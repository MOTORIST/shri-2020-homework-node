/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  style: {
    postcss: {
      plugins: [
        require('postcss-simple-vars')({
          variables: {
            'screen-m': '1024px',
          },
        }),
        require('postcss-calc'),
        require('postcss-color-function'),
        require('postcss-nested'),
      ],
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.plugins = webpackConfig.plugins.filter(
        (plugin) => plugin.constructor.name !== 'GenerateSW',
      );

      return webpackConfig;
    },
  },
};
