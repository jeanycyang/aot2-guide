<template>
  <div>
    <ul>
      <li v-for="(skill, key) in SKILLS">
        <a :href="'/skills/' + key">{{ skill.name }}</a>
      </li>
    </ul>
  </div>
</template>
<script>
import SKILLS from '../../src/data/skills'

export default {
  data() {
    return {
      SKILLS,
    }
  },
}
</script>
