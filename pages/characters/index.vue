<template>
  <div>
    <div v-if="filter === null">
      <ul>
        <li
          v-for="rank in RANKS"
          :key="rank"
          @click="filterByRank(rank)"
        >
          {{ rank }}
        </li>
      </ul>
    </div>
    <div v-else>
      Characters ranked {{ filter }}
      <a @click="closeFilter">[x] close filter</a>
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
