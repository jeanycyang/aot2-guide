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
      <li
        v-for="concatedName in filter ? filteredCharacters : CHARACTERS_LIST"
        :key="concatedName"
      >
        <a :href="'/characters/' + concatedName">
          {{ CHARACTERS[concatedName].name }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import CHARACTERS, { CHARACTERS_LIST } from '../../src/data/characters'
import { RANKS } from '../../src/data/characters.schema'

export default {
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
