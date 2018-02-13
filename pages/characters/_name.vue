<template>
  <div>
    <h1>{{ name }} {{ rank }}</h1>
    <p>Skills: </p>
  </div>
</template>
<script>
import CHARACTERS from '../../src/data/characters'

export default {
  validate({ params }) {
    return !!CHARACTERS[params.name]
  },
  data() {
    const character = CHARACTERS[this.$route.params.name]
    return { name: character.name, rank: character.rank }
  },
  head() {
    return {
      title: `${this.name} - Characters - Attack on Titan 2 Guide`,
      meta: [
      ],
    }
  },
}
</script>
