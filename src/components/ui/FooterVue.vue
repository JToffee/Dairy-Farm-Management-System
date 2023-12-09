<template>
  <footer class="footer"><p>&copy; Author: Sheila Jerotich</p></footer>
</template>
<script>
  export default {
    name: "FooterVue",
  };
</script>
<style scoped>
  .footer {
    left: 0px;
    bottom: 0px;
    width: 100%;
    margin-top: 10vh;
    text-align: center;
    height: 10vh;
    font-size: 1.5vw;
    font-family: "Roboto", sans-serif;
    color: var(--light-grey);
    border-top: 1px solid var(--border-grey);
    display: flex;
    align-items: baseline;
    justify-content: center;
    background-color: var(--primary700);
  }
</style>
