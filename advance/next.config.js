/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["cdn.download.ams.birds.cornell.edu"],
    },
};

module.exports = nextConfig;
