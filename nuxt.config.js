require('babel-register')

const { SKILLS_LIST } = require('./src/data/skills')
const { CHARACTERS_LIST } = require('./src/data/characters')

module.exports = {
  css: [
    '~assets/css/main.css',
  ],
  build: {
    postcss: [
      require('postcss-cssnext')(),
    ],
  },
  generate: {
    routes: [
      ...SKILLS_LIST.map(skill => `/skills/${skill}`),
      ...CHARACTERS_LIST.map(character => `/characters/${character}`),
    ],
  },
}
