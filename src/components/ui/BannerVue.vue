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
  }
  .banner-content {
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    justify-content: center;
  }
  .banner-content h1 {
    color: var(--white);
    font-size: 2.2rem;
    flex-basis: 80%;
    padding-bottom: 0;
    font-family: Arial, sans-serif;
  }
  .banner-content p {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans",
      Arial, sans-serif;
    font-style: italic;
    margin-top: -3vh;
    color: var(--lightSteelBlue);
    font-size: 1rem;
  }
</style>
