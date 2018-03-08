<template>
  <header class="top-header">
    <ul class="navbar">
      <li class="navbar-item">
        <a href="/"><div class="home-img" /></a>
      </li>
      <li class="navbar-item">Missions</li>
      <li class="navbar-item">Materials</li>
      <li class="navbar-item"><a href="/characters">Characters</a></li>
    </ul>
  </header>
</template>
<style scoped>
.top-header{
  height: var(--topNavbarHeight);
  background: var(--mainGolden);
  box-shadow: 0 0 2px black;
}
.navbar{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.navbar-item{
}
.home-img{
  width: 100px;
  height: var(--topNavbarHeight);
  background: url('~/assets/images/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
