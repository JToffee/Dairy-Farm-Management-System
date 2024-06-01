<template>
    <div class="thumbnail">
      <p class="title--thumbnail">{{ title }}</p>
      <p id="value" class="value-thumbnail">{{ value }} {{ unit }}</p>
      <p class="difference">{{ difference }}</p>
    </div>
  </template>
  <script>
    export default {
      name: "ThumbnailVue",
      props: ["title", "value", "unit", "difference", "valueClass", "colour"],
      data() {
        return {
          className: this.valueClass !== "" ? this.valueClass : "",
        };
      },
      mounted() {},
    };
  </script>
  <style scoped>
    .thumbnail {
      /* border: 2px solid var(--accent400); */
      margin: auto;
      margin-top: 3vh;
      padding: 1vw;
      flex-basis: 20%;
      padding: 1vw;
      height: 30vh;
      color: var(--white);
      /* -webkit-box-shadow: 1px 1px 25px 1px  var(--shadow-grey); */
      border-radius: 1vw;
      box-shadow: inset;
      color: black;
  
      /* border: 1px solid var(--accent300); */
      /* background: var(--dark-grey); */
    }
    .title--thumbnail {
      flex-basis: 100%;
      margin-bottom: 3vh;
      margin-top: 2vh;
      font-size: 2vw;
      text-align: center;
      /* color: var(--dark-grey); */
    }
    .value-thumbnail {
      /* border: 1px solid #092841; */
      /* background-color: var(--color-bcg-7); */
      background-color: var(--dark-grey);
      width: fit-content;
      padding: 1vh 1vw;
      font-size: 1.2vw;
      color: #fff;
      opacity: 0.8;
    }
    .thumbnail--active .value-thumbnail {
      background-color: var(--dark-grey);
    }
    .difference {
      margin-left: 2vw;
    }
    .thumbnail p {
      text-align: left;
      margin-left: 1vw;
    }
  </style>
  