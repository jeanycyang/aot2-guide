<template>
  <div>
    <ul>
      <li
        v-for="(character, key) in CHARACTERS"
        :key="key"
      >
        <a :href="'/characters/' + key">{{ character.name }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import CHARACTERS from '../../src/data/characters'

export default {
  data() {
    return {
      CHARACTERS,
    }
  },
}
</script>
