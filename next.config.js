/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'https://hzahrfjtetaexlyfdecg.supabase.co/storage/v1/object/sign/',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

module.exports = nextConfig;
