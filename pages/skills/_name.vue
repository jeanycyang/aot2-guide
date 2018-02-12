<template>
  <div>
    <h1>{{ name }}</h1>
    <p>{{ description }}</p>
  </div>
</template>
<script>
import SKILLS from '../../src/data/skills'

export default {
  validate({ params }) {
    return !!SKILLS[params.name]
  },
  data() {
    const skill = SKILLS[this.$route.params.name]
    return { name: skill.name, description: skill.description }
  },
}
</script>
