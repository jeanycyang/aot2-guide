<template>
  <div>
    <div>
      <ul>
        <li @click="closeFilter">All</li>
        <li
          v-for="rank in RANKS"
          :key="rank"
          @click="filterByRank(rank)"
          class="{ isActive: rank === filter }"
        >
          {{ rank }}
        </li>
      </ul>
    </div>
    <ul>
      <character-card
        v-for="concatedName in filter ? filteredCharacters : CHARACTERS_LIST"
        :key="concatedName"
        :name="CHARACTERS[concatedName].name"
        :img="CHARACTERS[concatedName].img"
        :concatedName="concatedName"
      ></character-card>
    </ul>
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
  computed: {
    filteredCharacters() {
      return this.filter ?
        CHARACTERS_LIST.filter(name => CHARACTERS[name].rank === this.filter) : []
    },
  },
}
</script>
<style scoped>
</style>
