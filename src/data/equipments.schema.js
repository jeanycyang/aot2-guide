export const TYPES = {
  BLADE: 'B',
  SCABBARD: 'S',
  GEAR: 'G',
}

export default {
  id: 1,
  type: TYPES.BLADE,
  name: "English Name Here",
  material1: 1, // material id
  material1Quantity: 10,
  material2: 2,
  material2Quantity: 5,
  material3: 3,
  material3Quantity: 1,
  upgradedTo: [2], // equipment ids
}
