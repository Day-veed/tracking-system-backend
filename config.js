const serviceAccount = {
    type: process.env.TYPE,
    project_id: process.env.PROJECT_ID,
    private_key_id: process.env.PRIVATE_KEY_ID,
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDzpYWqfd/eiuH2\npOUZzt4GY8AmQaI70QbImh8pIhC8Ro/sA4yc8h2DMdoAkIg95RCYhqKuLIVSyy3o\niu9crbeWf6DDrsy2gf3rgDYmzREXQ3j560Nsahzf2qEN4Lqt/qMk8xlA16lr/n8T\nP6PcrAFoDman2zzC7vbA1Cf4OHEDi3rTjWM3sLhXZOyKosn+kH3oRic1XrGcSuCH\njdZWcccuD0Y3PnG9lhnAapWm3RR7ybPrwp5Ykhqv11JVjHpcuxlbtZdXeIRvWrzT\n3yqtkzm0mU9LpOTHjR3Gs/6SHEpIkJE3OHUeF5ai7bYaPvtS6tQIwxNZaUmt0rho\nMKANGz9FAgMBAAECggEAIMnIJKr+2xB+mzYSnLgBmgOHgr53aixViN5wzhTHAsdO\nK/lITYCppxOo3kWVCBtQ8e3Aa8cTBBLSsUYtMyAvoiG3zU2zP+ZbePtOjkcvgx1x\n5NQbxTW8gAWIgfkZtjub0eejIN5E7wMXL8xzLUm6gLnbZ8Bxu1v0OfvzCwzxbIPv\n//jJHotwGIHFvankenGbSYjZot6e9fPPgV2WqK01p9Ho1Lf2P7XQo3KKKKQiKF2V\nTBMqQz4LOcyJtchuIxhva6Hd8uxTlLtdPThztub4dewCigmjjvadZuy5vQ4i6sM7\nPD5lQFwdK/K8aIB7jot7zS8+JKhk53h0k9x8UrYWQQKBgQD9iljqEpakmLV6PTDw\nfYnVDSmDlnjs40suN+9jPkp4voUbRvADdRNmIXm9EtaBrFYCunE/1RVhjylC0yf5\nOy0M/zb5QM+a68MHDxDLJiaP3EPauixt6mK1ol6HP5Q0r3jkQli/JZdxsfTw8pjP\nqhrmgzLP8Nk+ngr2m8UHJPQI5QKBgQD2ApqhMSknAW+Q+JEuAVIx0FMS1GaMwdvK\nt55VMHPeb41mWjdEvb9BaHtUKw6a7F6zgpufuXt2H9SbjaadY0EkUh+vCBhQ62hl\nxN+HnnOiQfoYZJcdFOuy4l4Ce3K8ch628UGaZw1fTCWe0YBY4c4EOuudb/Ln7ctT\nbiPeA3DW4QKBgCLyE6lHoJ3VMoZDsuAi3YGRC9zIO6ii93TKXuN17XvQ/rWwxFol\no+Paz1XBJ/G9mClOG1fp/cVxnwVH52WRw3bcIm6egT7gKgRqDi2B96SyfmPCb2dC\n/BH+7DqGB95vJSGJB4RpIQOZvKINPgS5dHW7NaC1mKvpyqcM904xyLUFAoGBAMwG\nPNeSPd7rgetpOn48+j311++115bE79OflOBx3qaLPWm1SEDqXMOSMzYKv4Icpi2a\nFBbTbWD55Qlc4OGGf2/v6/btb70sfthn/jorXxsiPJgeVHT59L/WnMDSQMWon3B5\nhT7YWG7AaDLe7OLJ4mH/u4hGX92ZiRcYMQbfM6YBAoGAP/GEUw/LmzYirGOXitnu\nleIwFPkFGyGw0j6ih0IlTzJlPYTYLGYGiWs5embsZzKmA/UmWLtCTZZD4pBa7exX\nEh2FntEUulP0IX0etiVwJv02TO4S1v4F2Z2yt7DalLhFMSpQPUuMHPGRXN5Eeeac\nHxh1Mesh6fIPByfzomQXLBE=\n-----END PRIVATE KEY-----\n",
    client_email: process.env.CLIENT_EMAIL,
    client_id: process.env.CLIENT_ID,
    auth_uri: process.env.AUTH_URI,
    token_uri: process.env.TOKEN_URI,
    auth_provider_x509_cert_url: process.env.AUTH_PROVIDER,
    client_x509_cert_url: process.env.CLIENT,
    universe_domain: process.env.UNIVERSE_DOMAIN
  };
  
  module.exports = serviceAccount;
  