// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://vue-element-admin-plus.vercel.app/',
        ws: true,
        changeOrigin: true,
      },
    },
  },
  chainWebpack(config) {
    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial',
      },
    ]);

    // when there are many pages, it will cause too many meaningless requests
    config.plugins.delete('prefetch');

    const svgPath = path.join(__dirname, 'src/plugins/icons/svg');
    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(svgPath)
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(svgPath)
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end();

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial',
                },
                elementUI: {
                  name: 'chunk-element-plus',
                  priority: 20,
                  test: /[\\/]node_modules[\\/]_?element-plus(.*)/,
                },
                commons: {
                  name: 'chunk-commons',
                  test: path.join(__dirname, 'src/components'),
                  minChunks: 3,
                  priority: 5,
                  reuseExistingChunk: true,
                },
              },
            });
          config.optimization.runtimeChunk('single');
        },
      );
  },
};
