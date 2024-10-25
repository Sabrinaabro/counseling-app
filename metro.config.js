const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

// Add 'cjs' to the asset extensions
defaultConfig.resolver.assetExts.push('cjs');

module.exports = defaultConfig;
