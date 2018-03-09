export const RANKS = {
  S: 'S',
  A: 'A',
  B: 'B',
  C: 'C',
  D: 'D',
}

const SCHEMA = {
  id: 1,
  name: 'Eren Jaeger',
  rank: RANKS.B,
  skills: [],
  abilities: {
    strength: 75,
    敏捷性: 70, // wait for English translation
    health: 70,
    leadership: 50,
    concentration: 80,
    dexterity: 50,
  },
}

export const ABILITIES = Object.keys(SCHEMA.abilities)

export default SCHEMA
