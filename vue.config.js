const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    express: {
      shouldServeApp: true,
      serverDir: './srv',
    },
  },
});
