require('babel-register')

const { SKILLS_LIST } = require('./src/data/skills')

module.exports = {
  build: {
    postcss: [
      require('postcss-cssnext')(),
    ]
  },
  generate: {
    routes: [
      ...SKILLS_LIST.map(skill => `/skills/${skill}`),
    ],
  },
}
