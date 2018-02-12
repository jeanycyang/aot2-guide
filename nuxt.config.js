require('babel-register')

const { SKILLS_LIST } = require('./src/data/skills')

module.exports = {
  generate: {
    routes: [
      ...SKILLS_LIST.map(skill => `/skills/${skill}`),
    ],
  },
}
