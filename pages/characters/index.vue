<template>
  <div id="page">
    <div id="container">
      <div>
        <ul class="filter">
          <li @click="closeFilter">All</li>
          <li
            v-for="rank in RANKS"
            :key="rank"
            @click="filterByRank(rank)"
            :class="{ isActive: rank === filter }"
          >
            {{ rank }}
          </li>
        </ul>
      </div>
      <ul>
        <character-card
          v-for="concatedName in CHARACTERS_LIST"
          v-if="!filter || CHARACTERS[concatedName].rank === filter"
          :key="concatedName"
          :name="CHARACTERS[concatedName].name"
          :img="CHARACTERS[concatedName].img"
          :concatedName="concatedName"
        ></character-card>
      </ul>
    </div>
  </div>
</template>
<script>
import CHARACTERS, { CHARACTERS_LIST } from '../../src/data/characters'
import { RANKS } from '../../src/data/characters.schema'
import characterCard from '../../components/character-card.vue'

export default {
  components: { characterCard },
  methods: {
    filterByRank(rank) {
      this.filter = rank
    },
    closeFilter() {
      this.filter = null
    },
  },
  data() {
    return {
      filter: null,
      CHARACTERS,
      CHARACTERS_LIST,
      RANKS,
    }
  },
}
</script>
<style scoped>
.filter{
  text-align: center;
  margin: var(--middleSpacing) 0;
  padding: var(--smallSpacing);
}
.filter li{
  display: inline-block;
  margin: 0 var(--smallSpacing);
  padding: var(--smallSpacing);
  cursor: pointer;
  border: 1px solid var(--mainGreen);
  border-radius: 3px;
  text-align: center;
}
.filter li:hover, .filter li.isActive{
  background: var(--mainGreen);
  color: white;
}
</style>
