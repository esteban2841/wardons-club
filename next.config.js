/** @type {import('next').NextConfig} */
const nextConfig = {
  plugins: [
    ['next-sitemap'],
  ],
  compiler: {
      styledComponents: true,
  },
  images: {
      
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'hzahrfjtetaexlyfdecg.supabase.co',
          port: '',
          pathname: '/storage/v1/object/public/**', // Adjust the pathname pattern according to your needs
        },
      ],
    },
};

module.exports = nextConfig;
