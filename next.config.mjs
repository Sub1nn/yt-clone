/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    suppressComponentDidCatchWarning: true,
  },
  images: {
    domains: ["i.ytimg.com"],
  },
};

export default nextConfig;
