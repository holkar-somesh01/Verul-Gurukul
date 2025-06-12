// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   images: { unoptimized: true },
// };

// module.exports = nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
  // This makes Next.js export a static HTML version of your site
  output: 'export',

  // Skips ESLint errors during build – useful in CI/CD but not recommended long-term
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Disables Next.js image optimization (required for static export)
  images: {
    unoptimized: true,
  },
  matcher: ['/dashboard/:path*', '/settings/:path*', '/admin/:path*'],
};

module.exports = nextConfig
