/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    redirects,
    images: {
        domains: ['i.imgur.com'],
    },
};

async function redirects() {
    return [
        {
            source: '/',
            destination: '/homepage',
            permanent: true,
        },
        {
            source: '/gallery',
            destination: '/gallery/all',
            permanent: true,
        },
    ];
}

module.exports = nextConfig;
