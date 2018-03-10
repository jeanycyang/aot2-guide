<template>
  <header class="top-header">
    <ul class="navbar">
      <li class="navbar-logo">
        <a href="/"><div class="home-img" /></a>
      </li>
      <li class="navbar-item">
        <a>Missions</a>
      </li>
      <li class="navbar-item">
        <a>Materials</a>
      </li>
      <li class="navbar-item">
        <a href="/characters">Characters</a>
      </li>
    </ul>
  </header>
</template>
<style scoped>
.top-header{
  z-index: 100;
  height: var(--topNavbarHeight);
  background: var(--mainGreen);
  box-shadow: 0 3px 8px 0 rgba(0,0,0,0.2);
}
.navbar{
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.navbar-item{
  position: relative;
  font-size: var(--normalFontSize);
}
.navbar-item a{
  color: white;
  text-decoration: none;
}
.navbar-item a::after{
  position: absolute;
  content: '';
  height: 2.5px;
  width: 100%;
  transform: scaleX(0);
  display: block;
  top: var(--middleFontSize);
  left: 0;
  background: white;
  transition: all 0.3s;
}
.navbar-item a:hover{
  color: white;
  text-decoration: none;
}
.navbar-item a:hover::after{
  transform: scaleX(1);
}
.home-img{
  width: 100px;
  height: var(--topNavbarHeight);
  background: url('~/assets/images/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
