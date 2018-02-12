<template>
  <div>
    <h1>{{ name }}</h1>
    <p>{{ description }}</p>
  </div>
</template>
<script>
import skills from '../../src/data/skills'

export default {
  validate({ params }) {
    return !!skills[params.name]
  },
  data() {
    const skill = skills[this.$route.params.name]
    return { name: skill.name, description: skill.description }
  },
}
</script>
