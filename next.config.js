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
  
}

module.exports = nextConfig
