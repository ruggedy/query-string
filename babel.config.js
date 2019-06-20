const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        ie: '11'
      },
      useBuiltIns: 'usage',
      corejs: {
        version: 3
      }
    }
  ]
]


module.exports = { presets }