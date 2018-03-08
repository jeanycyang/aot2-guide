<template>
  <li class="character-card">
    <div @click="goToCharacterPage">
      <div class="img" :style="{ backgroundImage: `url(${img()})` }" />
      <div class="info">
        <h3>{{ name }}</h3>
      </div>
    </div>
  </li>
</template>
<script>
export default {
  props: ['cid', 'name', 'concatedName'],
  methods: {
    img() {
      return require(`~/assets/images/characters/${this.cid}.jpg`) // eslint-disable-line
    },
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
