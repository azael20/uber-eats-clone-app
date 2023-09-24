module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel',
      ['module:react-native-dotenv', {
      "envName": "uber_eats_clone",
      "moduleName": "@env",
      "path": "./src/api/keys.env",
      "safe": false,
      "allowUndefined": true,
      "verbose": false
    },]
    ],
  };
};
