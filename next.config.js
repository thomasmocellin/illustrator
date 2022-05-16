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
    ];
}

module.exports = nextConfig;
