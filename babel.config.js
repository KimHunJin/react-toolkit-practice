module.exports = function babelConfig(api) {
  api.cache.forever()
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: {
            browsers: ['>1%', 'Firefox ESR', 'ie >= 11']
          },
          modules: false,
          useBuiltIns: false
        }
      ],
      '@babel/preset-typescript',
      '@babel/preset-react'
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          corejs: 3
        }
      ]
    ]
  }
}
