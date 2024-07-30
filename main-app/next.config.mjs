/** @type {import('next').NextConfig} */
import NextFederationPlugin from "@module-federation/nextjs-mf";

const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: "main_app",
        remotes: {},
        filename: "static/chunks/remoteEntry.js",
        exposes: {},
        extraOptions: {
          debug: false, // `false` by default
          exposePages: false, // `false` by default
        },
        shared: {},
      })
    );

    return config;
  },
};

export default nextConfig;
