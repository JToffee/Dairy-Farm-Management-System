<template>
  <div class="tab">
    <h4 class="tab-title">{{ title }}</h4>
    <h3 id="value" class="tab-value">{{ value }} {{ unit }}</h3>
    <p class="tab-difference">{{ difference }}</p>
  </div>
</template>

<script>
  export default {
    name: "TabbedSummary",
    props: ["title", "value", "unit", "difference", "valueClass", "colour"],
    data() {
      return {
        className: this.valueClass !== "" ? this.valueClass : "",
      };
    },
  };
</script>
<style scoped>
  .tab {
    min-width: 15vw;
    min-height: 20vh;
    margin-right: 3vw;
    /* box-shadow: 1px 1px 25px 1px var(--shadow-grey); */
    border-left: 1px solid var(--light-grey);
    margin-bottom: 5vh;
    text-indent: 10px;
  }

  .tab-title {
    background-color: var(--primary200);
    padding: 5px;
  }
  .tab-value {
    color: var(--primary500);
    /* background-color: var(--lightSteelBlue); */
    /* text-indent: 2vw; */
  }
  .tab-difference {
    font-size: 1rem;
    /* text-indent: 2vw; */
    width: 7vw;
  }
</style>
