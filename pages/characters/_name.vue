<template>
  <div id="page">
    <div id="container">
      <div class="grids">
        <div class="grid name">
          <div>
            <p class="name-part" v-for="part in splitName" :key="part">
              {{ part }}
            </p>
          </div>
        </div>
        <div class="grid character">
          <div>
            <img :src="img" />
          </div>
        </div>
        <div class="grid">
          <character-radar :abilities="abilities" canvasSize="180" />
        </div>
        <div class="grid rank">
          <div>
            <p>rank</p>
            <h1>{{ rank }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CHARACTERS from '../../src/data/characters'
import { BASE_URL } from '../../src/common'
import characterRadar from '../../components/character-radar.vue'

export default {
  components: { characterRadar },
  validate({ params }) {
    return !!CHARACTERS[params.name]
  },
  data() {
    const character = CHARACTERS[this.$route.params.name]
    return {
      name: character.name,
      splitName: character.name.split(' '),
      rank: character.rank,
      img: require(`~/assets/images/characters/${character.id}.jpg`), // eslint-disable-line
      abilities: character.abilities,
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
<style scoped>
.grids{
  display: flex;
  flex-wrap: wrap;
}
.grid{
  width: 50%;
  padding: var(--smallSpacing);
  display: flex;
  justify-content: center;
  align-items: center;
}
.grid > div{
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.name > div{
  display: flex;
  flex-direction: column;
}
.name-part{
  font-size: var(--XLargeFontSize);
}
.name-part:nth-child(2){
  text-indent: 6rem;
}
.character img{
  width: 150px;
}
.rank p{
  margin-right: var(--smallSpacing);
  color: var(--mainGreen);
}
.rank h1{
  font-size: var(--XLargeFontSize);
}
</style>
