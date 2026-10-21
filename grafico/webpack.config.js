const { shareAll } = require('@angular-architects/module-federation/webpack');

let ModuleFederationPlugin;
try {
  ModuleFederationPlugin = require('@angular-devkit/build-angular/node_modules/webpack').container.ModuleFederationPlugin;
} catch (e) {
  ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
}

module.exports = {
  output: {
    uniqueName: 'grafico',
    publicPath: 'auto',
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'grafico',
      filename: 'remoteEntry.js',
      exposes: {
        './Component': './src/app/app.ts',
      },
      shared: {
        ...shareAll({ 
          singleton: true, 
          strictVersion: true, 
          requiredVersion: 'auto' 
        })
      }
    })
  ]
};