/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    redirects,
    images: {
        domains: ['localhost', 'static.wikia.nocookie.net'],
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
