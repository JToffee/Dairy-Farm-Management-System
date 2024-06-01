<template>
  <div class="banner">
    <div class="banner-content">
      <h1 class="company--name">KAPORIA</h1>
      <p>"Quality milk, better health"</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: "BannerVue",
  };
</script>
<style scoped>
  .banner {
    height: 20vh;
    flex-basis: 40%;
    display: flex;
    justify-content: left;
    margin-top: 5vh;
    font-family: "Fira Sans", sans-serif;
  }
  .banner-content {
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    justify-content: center;
  }
  .banner-content h1 {
    color: var(--primary600);
    font-size: 2.2rem;
    flex-basis: 80%;
    padding-bottom: 0;
    font-family: Arial, sans-serif;
    
  }
  .banner-content p {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
      Arial, sans-serif;
    font-style: italic;
    margin-top: -5vh;
    color: var(--lightSteelBlue);
    font-size: 1rem;
  }
</style>
