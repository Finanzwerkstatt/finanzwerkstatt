/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: 'export',
  distDir: 'out', // <-- sagt Next.js, es soll in /out schreiben
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
