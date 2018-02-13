<template>
  <li class="character-card" @click="goToCharacterPage">
    <img :src="img"/>
    <h3>{{ name }}</h3>
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
  display: inline-block;
  width: 50%;
  background-color: white;
  color: var(--mainGreen);
  cursor: pointer;
}
</style>
