const withImages = require("next-images");
const sitemap = (config, { isServer }) => {
  if (isServer) {
    require("./scripts/generate-sitemap");
  }

  return config;
};
module.exports = withImages(sitemap);
