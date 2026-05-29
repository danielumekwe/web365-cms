import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,

  async redirects() {
    return [
      // MAIN PAGES
      {
        source: "/about-us/",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact-us/",
        destination: "/contact",
        permanent: true,
      },

      // SERVICES
      {
        source: "/services/website-design/",
        destination: "/services/website-development",
        permanent: true,
      },
      {
        source: "/e-commerce-website-design-company/",
        destination: "/services/ecommerce-website",
        permanent: true,
      },
      {
        source: "/secured-web-hosting/",
        destination: "/services/secured-web-hosting",
        permanent: true,
      },

      // BLOG REDIRECT (VERY IMPORTANT)
      {
        source: "/blog/:path*",
        destination: "https://blog.web365ng.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;