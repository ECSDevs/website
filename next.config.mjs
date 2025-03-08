/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: '*',
      }
    ],
    unoptimized: true
  },
  output: 'export'
};

export default nextConfig;
