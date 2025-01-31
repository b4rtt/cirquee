module.exports = function (api) {
  api.cache(true);
  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@': './src',
            assets: './assets', // Přidej alias pro assets
          },
        },
      ],
    ],
  };
};
