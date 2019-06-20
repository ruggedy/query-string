const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        ie: 10
      },
      useBuiltIns: 'usage',
      corejs: {
        version: 3
      }
    }
  ]
]

const plugins = [
  "@babel/plugin-proposal-optional-chaining",
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-transform-arrow-functions"
]


module.exports = { presets }