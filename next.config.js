/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
    images: {
      layoutRaw: true,
      allowFutureImage: true,
      domains: [
        'images.unsplash.com', 
        'bayut-production.s3.eu-central-1.amazonaws.com'
      ]
    },
    env: {
      RAPID_API_KEY: process.env.RAPID_API_KEY,
      FIREBASE_KEY: process.env.FIREBASE_KEY,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
      FIREBASE_STORAGE_BUCKET: process.env.FIREBASE_STORAGE_BUCKET,
      FIREBASE_MESSAGING_SENDER: process.env.FIREBASE_MESSAGING_SENDER,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID,
    },
  
}

module.exports = nextConfig
