const { shareAll } = require('@angular-architects/module-federation/webpack');

let ModuleFederationPlugin;
try {
  ModuleFederationPlugin = require('@angular-devkit/build-angular/node_modules/webpack').container.ModuleFederationPlugin;
} catch (e) {
  ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;
}

module.exports = {
  output: {
    uniqueName: 'vendas',
    publicPath: 'auto',
    scriptType: 'text/javascript'
  },
  optimization: {
    runtimeChunk: false
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        "produtos": "http://localhost:4201/remoteEntry.js",    
        "grafico": "http://localhost:4202/remoteEntry.js"
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