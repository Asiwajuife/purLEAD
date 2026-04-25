/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      { hostname: "randomuser.me" },
      { hostname: "images.unsplash.com" },
      { hostname: "cdn.vocallabs.ai" },
      { hostname: "t4.ftcdn.net" },
      { hostname: "t3.ftcdn.net" },
      { hostname: "as1.ftcdn.net" },
      { hostname: "media.licdn.com" },
      { hostname: "www.ringcentral.com" },
      { hostname: "plaksha.edu.in" },
      { hostname: "cdn.simpleicons.org" },
      { hostname: "img.freepik.com" },
      { hostname: "powerinai.com" },
      { hostname: "www.contactspace.com" },
      { hostname: "i0.wp.com" },
      { hostname: "paeditorial.co.uk" },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
  },
};

export default nextConfig;
