import { RANKS } from './characters.schema'
import standardizedBy from '../utils/standardizedBy'
import concatName from '../utils/concatName'

const characters = ([{
  id: 1,
  name: 'Eren Jaeger',
  rank: RANKS.B,
  skills: [],
  abilities: {
    strength: 75, 敏捷性: 70, health: 70, leadership: 50, concentration: 80, dexterity: 50,
  },
}, {
  id: 2,
  name: 'Mikasa Ackerman',
  rank: RANKS.S,
  skills: [],
  abilities: {
    strength: 105, 敏捷性: 120, health: 90, leadership: 35, concentration: 85, dexterity: 75,
  },
}, {
  id: 3,
  name: 'Armin Arlert',
  rank: RANKS.B,
  skills: [],
  abilities: {
    strength: 35, 敏捷性: 45, health: 40, leadership: 105, concentration: 105, dexterity: 70,
  },
}, {
  id: 4,
  name: 'Levi',
  rank: RANKS.S,
  skills: [],
  abilities: {
    strength: 110, 敏捷性: 105, health: 60, leadership: 70, concentration: 95, dexterity: 85,
  },
}, {
  id: 5,
  name: 'Miche Zacharias',
  rank: RANKS.S,
  skills: [],
  abilities: {},
}, {
  id: 6,
  name: 'Nanaba',
  rank: RANKS.A,
  skills: [],
  abilities: {},
}, {
  id: 7,
  name: 'Gelgar',
  rank: RANKS.A,
  skills: [],
  abilities: {
    strength: 90, 敏捷性: 65, health: 80, leadership: 60, concentration: 80, dexterity: 70,
  },
}, {
  id: 8,
  name: 'Christa Lenz',
  rank: RANKS.B,
  skills: [],
  abilities: {
    strength: 30, 敏捷性: 55, health: 40, leadership: 90, concentration: 80, dexterity: 80,
  },
}, {
  id: 9,
  name: 'Ymir',
  rank: RANKS.B,
  skills: [],
  abilities: {
    strength: 70, 敏捷性: 90, health: 75, leadership: 25, concentration: 60, dexterity: 85,
  },
}, {
  id: 10,
  name: 'Oruo Bozad',
  rank: RANKS.A,
  skills: [],
  abilities: {},
}, {
  id: 11,
  name: 'Petra Ral',
  rank: RANKS.A,
  skills: [],
  abilities: {},
}, {
  id: 12,
  name: 'Gunther Schultz',
  rank: RANKS.A,
  skills: [],
  abilities: {},
}, {
  id: 13,
  name: 'Eld Gin',
  rank: RANKS.A,
  skills: [],
  abilities: {},
}, {
  id: 14,
  name: 'Moblit',
  rank: RANKS.B,
  skills: [],
  abilities: {},
}, {
  id: 15,
  name: 'Hange Zoe',
  rank: RANKS.A,
  skills: [],
  abilities: {},
}, {
  id: 16,
  name: 'Erwin Smith',
  rank: RANKS.S,
  skills: [],
  abilities: {
    strength: 80, 敏捷性: 80, health: 75, leadership: 120, concentration: 90, dexterity: 60,
  },
}, {
  id: 17,
  name: 'Hannes',
  rank: RANKS.B,
  skills: [],
  abilities: {
    strength: 80, 敏捷性: 70, health: 65, leadership: 65, concentration: 60, dexterity: 65,
  },
}, {
  id: 18,
  name: 'Ian Dietrich',
  rank: RANKS.B,
  skills: [],
  abilities: {
    strength: 70, 敏捷性: 70, health: 65, leadership: 80, concentration: 65, dexterity: 60,
  },
}, {
  id: 19,
  name: 'Rico Brzenska',
  rank: RANKS.B,
  skills: [],
  abilities: {
    strength: 55, 敏捷性: 80, health: 60, leadership: 75, concentration: 80, dexterity: 65,
  },
}, {
  id: 20,
  name: 'Mitabi Jarnach',
  rank: RANKS.B,
  skills: [],
  abilities: {
    strength: 70, 敏捷性: 55, health: 80, leadership: 60, concentration: 60, dexterity: 55,
  },
}, {
  id: 21,
  name: 'Thomas Wagner',
  rank: RANKS.C,
  skills: [],
  abilities: {
    strength: 45, 敏捷性: 60, health: 50, leadership: 45, concentration: 60, dexterity: 60,
  },
}, {
  id: 22,
  name: 'Mina Carolina',
  rank: RANKS.C,
  skills: [],
  abilities: {
    strength: 45, 敏捷性: 60, health: 50, leadership: 45, concentration: 60, dexterity: 60,
  },
}, {
  id: 23,
  name: 'Nile Dawk',
  rank: RANKS.B,
  skills: [],
  abilities: {
    strength: 60, 敏捷性: 60, health: 60, leadership: 90, concentration: 80, dexterity: 60,
  },
}, {
  id: 24,
  name: 'Marlo',
  rank: RANKS.B,
  skills: [],
  abilities: {
    strength: 60, 敏捷性: 60, health: 60, leadership: 90, concentration: 80, dexterity: 60,
  },
}, {
  id: 25,
  name: 'Hitch',
  rank: RANKS.B,
  skills: [],
  abilities: {},
}, {
  id: 26,
  name: 'Reiner Braun',
  rank: RANKS.A,
  skills: [],
  abilities: {
    strength: 90, 敏捷性: 60, health: 120, leadership: 75, concentration: 45, dexterity: 60,
  },
}, {
  id: 27,
  name: 'Bertholdt Hoover',
  rank: RANKS.A,
  skills: [],
  abilities: {
    strength: 85, 敏捷性: 85, health: 80, leadership: 40, concentration: 75, dexterity: 85,
  },
}, {
  id: 28,
  name: 'Annie Leonhart',
  rank: RANKS.A,
  skills: [],
  abilities: {
    strength: 65, 敏捷性: 100, health: 50, leadership: 30, concentration: 120, dexterity: 70,
  },
}, {
  id: 29,
  name: 'Jean Kirschtein',
  rank: RANKS.B,
  skills: [],
  abilities: {
    strength: 60, 敏捷性: 75, health: 60, leadership: 95, concentration: 55, dexterity: 80,
  },
}, {
  id: 30,
  name: 'Conny Springer',
  rank: RANKS.B,
  skills: [],
  abilities: {
    strength: 60, 敏捷性: 95, health: 65, leadership: 45, concentration: 45, dexterity: 100,
  },
}, {
  id: 31,
  name: 'Sasha Braus',
  rank: RANKS.B,
  skills: [],
  abilities: {
    strength: 55, 敏捷性: 65, health: 80, leadership: 40, concentration: 85, dexterity: 80,
  },
}, {
  id: 32,
  name: 'Marco Bodt',
  rank: RANKS.B,
  skills: [],
  abilities: {
    strength: 60, 敏捷性: 55, health: 55, leadership: 90, concentration: 60, dexterity: 50,
  },
}, {
  id: 33,
  name: 'Daz',
  rank: RANKS.C,
  skills: [],
  abilities: {
    strength: 45, 敏捷性: 40, health: 45, leadership: 40, concentration: 45, dexterity: 40,
  },
}, {
  id: 34,
  name: 'Keith Sadies',
  rank: RANKS.A,
  skills: [],
  abilities: {},
}, {
  id: 35,
  name: 'Kitz Woermann',
  rank: RANKS.B,
  skills: [],
  abilities: {
    strength: 65, 敏捷性: 55, health: 75, leadership: 80, concentration: 55, dexterity: 55,
  },
}, {
  id: 36,
  name: 'Dot Pyxis',
  rank: RANKS.A,
  skills: [],
  abilities: {},
}, {
  id: 37,
  name: 'Dhalis Zachary',
  rank: RANKS.A,
  skills: [],
  abilities: {},
}]).map(character => ({
  ...character,
  concatName: concatName(character.name),
}))

const CHARACTERS = standardizedBy('concatName', characters)
export const CHARACTERS_LIST = Object.keys(CHARACTERS)
export default CHARACTERS
