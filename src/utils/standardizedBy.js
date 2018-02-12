export default function standardizedBy(identity, array) {
  if (!array || array.length === 0) return {}
  return array.reduce((accum, currentItem) => ({
    ...accum,
    [currentItem[identity]]: currentItem,
  }), {})
}
