export default function standardizedBy(identity, array) {
  if (!array || array.length === 0) return {}
  const getKey = (typeof identity === 'function') ? identity : item => item[identity]
  return array.reduce((accum, currentItem) => ({
    ...accum,
    [getKey(currentItem)]: currentItem,
  }), {})
}
