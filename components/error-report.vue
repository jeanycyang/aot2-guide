<template>
  <div class="error-report">
    <div :class="{ form: true, show: show }">
      <form>
        <p>Path: {{ path }}</p>
        <input type="text" v-model="title" placeholder="Problem Title" />
      </form>
    </div>
    <div :class="{ 'error-report-button': true, formOpen: show }" @click="toggle">
      <div>
        <p v-if="show">✖</p>
        <p v-else>!</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      show: false,
      title: '',
    }
  },
  methods: {
    toggle() {
      this.show = !this.show
    },
  },
}
</script>
<style scoped>
.error-report{
  position: fixed;
  bottom: var(--largeSpacing);
  right: var(--largeSpacing);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
/*
  postcss doesn't work properly.
  this variable should only be defined in default.css or other globally injected css file
*/
@custom-media --small-viewport (max-width: 768px);
/* see more: https://github.com/nuxt/nuxt.js/issues/2150 */

@media (--small-viewport) {
  .error-report{
    bottom: var(--smallSpacing);
    right: var(--smallSpacing);
  }
}
.error-report-button{
  border-radius: 100%;
  background: var(--mainGolden);
  box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.5);
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.error-report-button.formOpen{
}
.error-report-button > div{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: var(--largeFontSize);
}
.form{
  display: none;
  z-index: -999;
  background: white;
  height: 500px;
  width: 300px;
  max-width: 100%;
  max-height: 70vh;
  box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.5);
  border-radius: 3px;
}
.form.show{
  display: block;
  z-index: 999;
}
</style>
