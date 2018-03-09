<template>
  <li class="character-card">
    <div @click="goToCharacterPage">
      <div class="img" :style="{ backgroundImage: `url(${img})` }" />
      <div class="info">
        <h3>{{ name }}</h3>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: ['cid', 'name', 'concatedName'],
  data() {
    return {
      img: require(`~/assets/images/characters/${this.cid}.jpg`), // eslint-disable-line
    }
  },
  methods: {
    goToCharacterPage() {
      this.$router.push(`/characters/${this.concatedName}`)
    },
  },
}
</script>
<style scoped>
.character-card{
  display: inline-flex;
  width: 50%;
  padding: var(--middleSpacing);
  background-color: white;
  color: var(--mainGreen);
}
.character-card > div{
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-items: center;
  height: 100px;
  border: 1px solid var(--mainGreen);
  border-radius: 3px;
  cursor: pointer;
  overflow: hidden;
}
.character-card > div:hover{
  background: var(--mainGreen);
  color: white;
  transform: scale(1.02);
}

/*
  postcss doesn't work properly.
  this variable should only be defined in default.css or other globally injected css file
*/
@custom-media --small-viewport (max-width: 768px);
/* see more: https://github.com/nuxt/nuxt.js/issues/2150 */

@media (--small-viewport) {
  .character-card{
    width: 100%;
  }
}

.img{
  height: 100px;
  width: 100px;
  background-size: cover;
}
.info{
  flex: 2;
  padding: var(--smallSpacing);
}
.info h3{
  font-size: var(--middleFontSize);
}
</style>
