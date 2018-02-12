import standardizedBy from '../utils/standardizedBy'
import concatName from '../utils/concatName'

const skills = [
  {
    id: 1,
    name: 'Chain Attack',
    description: 'Multiple attacks after hitting with initial attack',
  },
  {
    id: 2,
    name: 'Transformation',
    description: 'Turn into Titan Form when Decisive Signal is at MAX',
  },
  {
    id: 3,
    name: 'Tactician',
    description: 'Give orders to allies fighting with you',
  },
  {
    id: 4,
    name: 'Chain Dash',
    description: 'Boost twice in a row while in the air',
  },
  {
    id: 5,
    name: 'Swoop',
    description: 'Allows for powerful downward strike by attacking an enemy from above',
  },
  {
    id: 6,
    name: 'Elimination Bonus',
    description: 'Acquire more materials from destroying Titan body parts',
  },
  {
    id: 7,
    name: 'Charisma',
    description: 'Fill up the Decisive Battle meter faster',
  },
  {
    id: 8,
    name: 'Rotating Slash',
    description: 'Allows for powerful rotating slash after accelerating for an attack',
  },
  {
    id: 9,
    name: 'Reckless',
    description: 'Reduce leadership',
  },
  {
    id: 10,
    name: 'Guts',
    description: 'Keeps your movements sharp even when injured',
  },
  {
    id: 11,
    name: 'Focus',
    description: 'Increases the amount of time Decisive Battle Signals are active',
  },
  {
    id: 12,
    name: 'Power of Humanity',
    description: 'Increases attack power as more Decisive Battle Signals are fired',
  },
  {
    id: 13,
    name: 'Duelist',
    description: 'Increases attack power against Titans who are attacking you',
  },
  {
    id: 14,
    name: 'Swordsmanship',
    description: 'Reduces blade durability loss during quick attacks',
  },
  {
    id: 15,
    name: 'Always Prepared',
    description: 'Increases the number of items that can be brought to the battlefield',
  },
  {
    id: 16,
    name: 'Expert Beggar',
    description: 'Reduces the time required between your allies\' attacks',
  },
  {
    id: 17,
    name: 'Enhanced Concentration',
    description: 'Increases Concentration',
  },
  {
    id: 18,
    name: 'Ready for Anything',
    description: 'Greatly increases the number of items that can be brought to the battlefield',
  },
  {
    id: 19,
    name: 'Flanking',
    description: 'Increases the attack power of team members as more individuals join you',
  },
  {
    id: 20,
    name: 'Aerial Replacement',
    description: 'Allows you to replace blades mid-air',
  },
  {
    id: 21,
    name: 'Togetherness',
    description: 'Increases your attack power as more soldiers join your fight',
  },
  {
    id: 22,
    name: 'Wings of Freedom',
    description: 'Increaes the attack power and number of additional hits in Chain Attacks',
  },
]

const SKILLS = standardizedBy(({ name }) => concatName(name), skills)
export const SKILLS_LIST = Object.keys(SKILLS)
export default SKILLS
