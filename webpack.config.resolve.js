const path = require('path');

// https://github.com/electron-react-boilerplate/electron-react-boilerplate/issues/1321#issuecomment-349767539
module.exports = {
  resolve: {
    alias: {
      $components: path.resolve(__dirname, 'src/components/'),
      $containers: path.resolve(__dirname, 'src/containers/'),
      $common: path.resolve(__dirname, 'src/common/'),
      $actions: path.resolve(__dirname, 'src/actions/'),
      $images: path.resolve(__dirname, 'src/assets/images/'),
      $scss: path.resolve(__dirname, 'src/assets/scss/'),
      $hocs: path.resolve(__dirname, 'src/hocs/'),
      $selectors: path.resolve(__dirname, 'src/selectors/'),
    },
    extensions: ['.js', '.json', '.jsx'],
  },
};
