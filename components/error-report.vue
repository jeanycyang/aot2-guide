<template>
  <div class="error-report">
    <div>
      <p>!</p>
    </div>
  </div>
</template>
<style scoped>
.error-report{
  position: fixed;
  bottom: var(--largeSpacing);
  right: var(--largeSpacing);
  border-radius: 100%;
  background: var(--mainGolden);
  box-shadow: 0px 0px 20px 1px rgba(0,0,0,0.5);
  width: 50px;
  height: 50px;
}
.error-report > div{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: var(--largeFontSize);
}
</style>
