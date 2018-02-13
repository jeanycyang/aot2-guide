import { RANKS } from './characters.schema'
import standardizedBy from '../utils/standardizedBy'
import concatName from '../utils/concatName'

const characters = [
  {
    id: 1,
    name: 'Eren Jaeger',
    rank: RANKS.B,
    skills: [],
  },
  {
    id: 2,
    name: 'Mikasa Ackerman',
    rank: RANKS.S,
    skills: [],
  },
  {
    id: 3,
    name: 'Armin Arlert',
    rank: RANKS.B,
    skills: [],
  },
  {
    id: 4,
    name: 'Reiner Braun',
    rank: RANKS.A,
    skills: [],
  },
  {
    id: 5,
    name: 'Bertholdt Hoover',
    rank: RANKS.A,
    skills: [],
  },
  {
    id: 6,
    name: 'Annie Leonhart',
    rank: RANKS.A,
    skills: [],
  },
  {
    id: 7,
    name: 'Jean Kirschtein',
    rank: RANKS.B,
    skills: [],
  },
  {
    id: 8,
    name: 'Conny Springer',
    rank: RANKS.B,
    skills: [],
  },
  {
    id: 9,
    name: 'Sasha Braus',
    rank: RANKS.B,
    skills: [],
  },
  {
    id: 10,
    name: 'Christa Lenz',
    rank: RANKS.B,
    skills: [],
  },
  {
    id: 11,
    name: 'Ymir',
    rank: RANKS.B,
    skills: [],
  },
  {
    id: 12,
    name: 'Marco Bodt',
    rank: RANKS.B,
    skills: [],
  },
  {
    id: 13,
    name: 'Thomas Wagner',
    rank: RANKS.C,
    skills: [],
  },
  {
    id: 14,
    name: 'Mina Carolina',
    rank: RANKS.C,
    skills: [],
  },
  {
    id: 15,
    name: 'Daz',
    rank: RANKS.C,
    skills: [],
  },
  {
    id: 16,
    name: 'Keith Sadies',
    rank: RANKS.A,
    skills: [],
  },
  {
    id: 17,
    name: 'Levi',
    rank: RANKS.S,
    skills: [],
  },
  {
    id: 18,
    name: 'Hange Zoe',
    rank: RANKS.A,
    skills: [],
  },
  {
    id: 19,
    name: 'Erwin Smith',
    rank: RANKS.S,
    skills: [],
  },
  {
    id: 20,
    name: 'Miche Zacharias',
    rank: RANKS.S,
    skills: [],
  },
  {
    id: 21,
    name: 'Oruo Bozad',
    rank: RANKS.A,
    skills: [],
  },
  {
    id: 22,
    name: 'Petra Ral',
    rank: RANKS.A,
    skills: [],
  },
  {
    id: 23,
    name: 'Gunther Schultz',
    rank: RANKS.A,
    skills: [],
  },
  {
    id: 24,
    name: 'Eld Gin',
    rank: RANKS.A,
    skills: [],
  },
  {
    id: 25,
    name: 'Moblit',
    rank: RANKS.B,
    skills: [],
  },
  {
    id: 26,
    name: 'Nanaba',
    rank: RANKS.A,
    skills: [],
  },
  {
    id: 27,
    name: 'Gelgar',
    rank: RANKS.A,
    skills: [],
  },
  {
    id: 28,
    name: 'Hannes',
    rank: RANKS.B,
    skills: [],
  },
  {
    id: 29,
    name: 'Ian Dietrich',
    rank: RANKS.B,
    skills: [],
  },
  {
    id: 30,
    name: 'Rico Brzenska',
    rank: RANKS.B,
    skills: [],
  },
  {
    id: 31,
    name: 'Mitabi Jarnach',
    rank: RANKS.B,
    skills: [],
  },
  {
    id: 32,
    name: 'Kitz Woermann',
    rank: RANKS.B,
    skills: [],
  },
  {
    id: 33,
    name: 'Dot Pyxis',
    rank: RANKS.A,
    skills: [],
  },
  {
    id: 34,
    name: 'Nile Dawk',
    rank: RANKS.B,
    skills: [],
  },
  {
    id: 35,
    name: 'Marlo',
    rank: RANKS.B,
    skills: [],
  },
  {
    id: 36,
    name: 'Hitch',
    rank: RANKS.B,
    skills: [],
  },
  {
    id: 37,
    name: 'Dhalis Zachary',
    rank: RANKS.A,
    skills: [],
  },
]

const CHARACTERS = standardizedBy(({ name }) => concatName(name), characters)
export const CHARACTERS_LIST = Object.keys(CHARACTERS)
export default CHARACTERS
