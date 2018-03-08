<template>
  <div id="page">
    <div id="container">
      <h1>{{ name }} {{ rank }}</h1>
      <img :src="img" />
      <p>Skills: </p>
    </div>
  </div>
</template>
<script>
import CHARACTERS from '../../src/data/characters'
import { BASE_URL } from '../../src/common'

export default {
  validate({ params }) {
    return !!CHARACTERS[params.name]
  },
  data() {
    const character = CHARACTERS[this.$route.params.name]
    return {
      name: character.name,
      rank: character.rank,
      img: require(`~/assets/images/characters/${character.id}.jpg`), // eslint-disable-line
    }
  },
  head() {
    const title = `${this.name} - Characters - Attack on Titan 2 Guide`
    return {
      title,
      meta: [
        { property: 'og:title', content: title },
        { property: 'og:type', content: 'article' },
        { property: 'og:image', content: BASE_URL + this.img },
        { property: 'og:description', content: 'Koei Game Attack on Titan 2 Player Guide (UNOFFICIAL)' },
      ],
    }
  },
}
</script>
