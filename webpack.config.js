const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    library: 'npccoincoreMnemonic',
    path: path.resolve(__dirname, 'dist'),
    filename: 'npccoincore-mnemonic.js'
  }
};
