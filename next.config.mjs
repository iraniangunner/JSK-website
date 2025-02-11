/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jsk-co.com",
        pathname: "/storage/project/**",
      },
    ],
  },
};

export default nextConfig;
