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
        v-for="(character, key) in filter ? filteredCharacters : CHARACTERS"
        :key="key"
      >
        <a :href="'/characters/' + key">{{ character.name }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import CHARACTERS from '../../src/data/characters'
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
      RANKS,
    }
  },
  computed: {
    filteredCharacters() {
      return this.filter ?
        Object.keys(CHARACTERS)
          .map(name => CHARACTERS[name].rank === this.filter && CHARACTERS[name]) :
        []
    },
  },
}
</script>
