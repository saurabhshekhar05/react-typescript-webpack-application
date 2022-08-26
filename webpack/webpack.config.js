const { merge } = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

module.exports = (envVariable) => {
    const { env } = envVariable;
    console.log('Environment Variable: ', env);
    const envConfig = require(`./webpack.${env}.js`);
    const webpackConfig = merge(commonConfig, envConfig);
    return webpackConfig;
}