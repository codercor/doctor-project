/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [ 'nazanuysalharzadin.s3.eu-west-2.amazonaws.com' ],
    unoptimized: true,
  },
  trailingSlash: true,
  staticPageGenerationTimeout: 120000,
  
}

module.exports = {
  // Diğer yapılandırma ayarları...

  webpack: (config) => {
    config.module.rules.push({
      test: /ckeditor5-[^/\\]+[/\\]theme[/\\].+\.css$/,
      use: [
        {
          loader: "postcss-loader",
          options: {
            ident: "postcss",
            plugins: [
              require("tailwindcss"),
              require("autoprefixer"),
              // İsteğe bağlı: Diğer postcss eklentilerini ekleyebilirsiniz.
            ],
          },
        },
      ],
    });

    return config;
  },
};


module.exports = nextConfig
