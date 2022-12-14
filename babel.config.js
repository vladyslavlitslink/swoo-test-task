module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['babel-plugin-styled-components'],
    [
      'module-resolver',
      {
        alias: {
          // This needs to be mirrored in tsconfig.json
          components: './src/components/index',
          screens: './src/screens/index',
          styles: './src/styles',
          src: './src'
        }
      }
    ]
  ]
}
