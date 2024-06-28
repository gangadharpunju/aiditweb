// /** @type {import('next').NextConfig} */

// const path = require("path")

// const nextConfig = {
//     reactStrictMode:true,
//     sassOptions: {
//         includePaths: [path.join(__dirname, "styles")]
//     }
// }

// module.exports = nextConfig

// next.config.js
module.exports = {
  webpack: (config, { isServer }) => {
    // Example: Add a rule for CSS modules
    config.module.rules.push({
      test: /\.css$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
          options: {
            modules: true, 
          },
        },
      ],
    });

    return config;
  },
};
