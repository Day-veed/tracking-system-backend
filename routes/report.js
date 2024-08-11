const router = require('express').Router();
const multer = require('multer');
const { bucket } = require('../config/firebaseConfig');
const Report = require('../models/report');
const auth = require('../middlewares/auth');
const { v4: uuidv4 } = require('uuid');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/upload', auth, upload.single('file'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }

  const metadata = {
    metadata: {
      firebaseStorageDownloadTokens: uuidv4()
    },
    contentType: req.file.mimetype,
    cacheControl: 'public, max-age=31536000'
  };

  const blob = bucket.file(req.file.originalname);
  const blobStream = blob.createWriteStream({
    metadata: metadata,
    gzip: true
  });

  blobStream.on('error', err => {
    console.error('Error uploading to Firebase:', err);
    return res.status(500).json({ error: 'Unable to upload file.', details: err.message });
  });

  blobStream.on('finish', async () => {
    const [url] = await blob.getSignedUrl({
      action: 'read',
      expires: '03-17-2025',
    });

    const report = new Report({
      userId: req.user._id,
      filename: blob.name,
      url: url
    });

    await report.save();
    res.status(201).json({ url });
  });

  blobStream.end(req.file.buffer);
});

router.get('/recent', auth, async (req, res) => {
  const reports = await Report.find({ userId: req.user._id }).sort({ uploadDate: -1 }).limit(5);
  res.status(200).json(reports);
});

router.get('/all', auth, async (req, res) => {
  const reports = await Report.find({ userId: req.user._id }).sort({ uploadDate: -1 });
  res.status(200).json(reports);
});

module.exports = router;
