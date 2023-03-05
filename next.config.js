/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ["@react-three/drei", "@react-three/fiber", "three"],
};

module.exports = nextConfig;
