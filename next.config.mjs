import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

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
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
