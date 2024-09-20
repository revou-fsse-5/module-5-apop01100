/** @type {import('next').NextConfig} */

const nextConfig = {
  images:{
    remotePatterns: [
      {
        protocol:"https",
        hostname:"placeimg.com",
        port:"",
        pathname:"/**"
      },
      {
        protocol:"https",
        hostname:"i.imgur.com",
        port:"",
        pathname:"/**"
      }
    ]
  },
  reactStrictMode: true,
};

export default nextConfig;
