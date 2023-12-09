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
    /* background-color: var(--primary800); */
    margin-top: 2vh;
  }
  .banner-content {
    display: flex;
    overflow: hidden;
    flex-wrap: wrap;
    margin-left: 10vw;
  }
  .banner-content h1 {
    color: var(--white);
    font-size: 4.5rem;
    flex-basis: 100%;
    margin-top: 15vh;
    font-family: "PT Sans Caption", sans-serif;
    opacity: 1;
    /* color: var(--white); */
  }
  .banner-content h1 span {
    background-color: var(--dark-grey);
    padding: 0.2vw 2vw 0.2vw 2vw;
  }
  .banner-content p {
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
    margin-left: 20vw;
    font-style: italic;
    margin-top: 0vh;
    color: var(--primary500);
  }
</style>
