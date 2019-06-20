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

]


module.exports = { presets }