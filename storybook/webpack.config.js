const path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = (storybookBaseConfig) => {
  storybookBaseConfig.resolve = {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('src'),
      components: resolve('src/components')
    },
    modules: [
      'node_modules',
      resolve('src'),
      resolve('node_modules')
    ]
  };

  storybookBaseConfig.module.rules.push({
    test: /\.styl/,
    loaders: ['style-loader', 'css-loader'],
    include: path.resolve(__dirname, '../src'),
  });

  return storybookBaseConfig;
};
