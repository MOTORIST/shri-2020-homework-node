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
};
