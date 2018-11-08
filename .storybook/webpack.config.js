const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');

module.exports = (baseConfig, env, config) => {
    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        loader: require.resolve('awesome-typescript-loader'),
    });
    config.plugins.push(new TSDocgenPlugin()); // optional
    config.resolve.extensions.push('.ts', '.tsx');
    config.node = { fs: 'empty' };
    return config;
};