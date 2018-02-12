<template>
  <main>
    <header>Home | Materials | Missions | Characters</header>
    <nuxt/>
    <footer>
      <p>All Materials Belong to Koei Tecmo.</p>
      <p>This site is UNOFFICIAL and just made for personal use.</p>
      <p><a href="https://github.com/jeanycyang/aot2-guide/">Github</a></p>
    </footer>
  </main>
</template>
<script>
import logo from '~/assets/images/logo.png'

export default {
  head() {
    return {
      title: 'Attack on Titan 2 Guide',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:title', content: 'Attack on Titan 2 Guide' },
        { property: 'og:url', content: 'https://jeanycyang.github.io/aot2-guide/' },
        { property: 'og:type', content: 'article' },
        { property: 'og:image', content: logo },
        { property: 'og:description', content: 'Koei Game Attack on Titan 2 Player Guide (UNOFFICIAL)' },
      ],
    }
  },
}
</script>
