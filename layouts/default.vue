<template>
  <main id="main">
    <navbar></navbar>
    <nuxt id="page"/>
    <bottom-footer></bottom-footer>
  </main>
</template>
<script>
import logo from '../assets/images/logo.png'
import navbar from '../components/navbar.vue'
import bottomFooter from '../components/bottom-footer.vue'

export default {
  components: {
    navbar,
    bottomFooter,
  },
  head() {
    return {
      title: 'Attack on Titan 2 Guide',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    }
  },
}
</script>
<style>
@import './default.css';
</style>
