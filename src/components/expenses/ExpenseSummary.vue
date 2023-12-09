<template>
  <div>
    <div class="produce-summary">
      <div class="thumbnails-container today-input">
        <summary-title
          title="Summary"
          :startDate="startDate"
          :endDate="endDate"
        ></summary-title>
        <thumbnail-vue
          title="Morning"
          :value="morning"
          unit="KG"
          :difference="morningDifference"
        ></thumbnail-vue>
        <thumbnail-vue
          title="Noon"
          :value="noon"
          unit="KG"
          :difference="noonDifference"
          valueClass="thumbnail--active .value-thumbnail"
        ></thumbnail-vue>
        <thumbnail-vue
          title="Evening"
          :value="evening"
          unit="KG"
          :difference="eveningDifference"
        ></thumbnail-vue>
        <thumbnail-vue
          title="Total"
          :value="total"
          unit="KG"
          :difference="totalDifference"
          class="thumbnail--active"
        ></thumbnail-vue>
      </div>
    </div>
  </div>
</template>

<script>
  import ThumbnailVue from "../ui/summary/ThumbnailVue.vue";

  export default {
    name: "ExpenseSummary",
    components: { ThumbnailVue },
  };
</script>

<style>
  .produce-summary {
    margin-top: 3vw;
  }
  .value-thumbnail {
    /* border: 1px solid #092841; */
    /* background-color: var(--color-bcg-7); */
    background-color: var(--primary500);
    width: fit-content;
    padding: 1vw;
    font-size: 1.5vw;
  }
  .thumbnail {
    background-color: var(--primary700);
  }
  .thumbnail--active {
    color: #fff;
    background-color: var(--accent400);
  }
</style>
