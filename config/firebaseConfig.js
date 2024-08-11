const admin = require('firebase-admin');
const serviceAccount = require('../config.js');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.FIREBASE_BUCKET_URL
});

const bucket = admin.storage().bucket();

module.exports = { bucket };
