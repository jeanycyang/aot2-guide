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
        <div class="grid radar">
          <character-radar :abilities="abilities" :canvasSize=200 />
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
  padding: var(--middleSpacing);
  display: flex;
  order: 4;
}
.grid:nth-of-type(odd){
  justify-content: flex-end;
}
.grid:nth-of-type(even){
  justify-content: flex-start;
}
.grid > div{
  width: 220px;
  height: 220px;
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
  color: var(--mainGreen);
}
.name-part:nth-child(2){
  text-indent: 6rem;
}
.character img{
  width: 150px;
}
.rank p{
  margin-right: var(--smallSpacing);
}
.rank h1{
  font-size: var(--XLargeFontSize);
  color: var(--mainGreen);
}
/*
  postcss doesn't work properly.
  this variable should only be defined in default.css or other globally injected css file
*/
@custom-media --small-viewport (max-width: 768px);
/* see more: https://github.com/nuxt/nuxt.js/issues/2150 */

@media (--small-viewport) {
  .grid{
    padding: var(--smallSpacing);
    justify-content: center !important;
    align-items: center !important;
  }
  .name, .rank{
    height: 80px;
  }
  .character, .radar{
    width: 100%;
  }
  .name{
    width: 65%;
    order: 1;
  }
  .name > div{
    flex-direction: row;
  }
  .name-part{
    font-size: var(--largeFontSize);
  }
  .name-part:nth-child(2){
    text-indent: 0.5rem;
  }
  .rank{
    width: 35%;
    order: 2;
  }
}
</style>
