<template>
  <li class="character-card" @click="goToCharacterPage">
    <div class="img">
      <img :src="img"/>
    </div>
    <div class="info">
      <h3>{{ name }}</h3>
    </div>
  </li>
</template>
<script>
export default {
  props: ['img', 'name', 'concatedName'],
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
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: var(--middleSpacing);
  background-color: white;
  color: var(--mainGreen);
  cursor: pointer;
}
.img{
  flex: 1;
}
.img img{
  width: 100px;
  height: auto;
}
.info{
  flex: 2;
  padding: var(--smallSpacing);
}
</style>
