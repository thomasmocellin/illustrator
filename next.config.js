/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    redirects,
    images: {
        domains: ['i.imgur.com'],
    },
    webpack(config) {
        config.resolve.fallback = {
            ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
            // by next.js will be dropped. Doesn't make much sense, but how it is
            fs: false, // the solution
        };
        return config;
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
