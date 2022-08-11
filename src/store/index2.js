import { createStore } from "vuex";
import { produce } from "../data/produce.js";
import Produce from "../models/Produce.js";
import { cows } from "../data/cows.js";
import { sales } from "../data/sales.js";
import Sale from "../models/sale.js";
import { feeds } from "@/data/feeds.js";

export default createStore({
  state: {
    produce: {
      produce: produce,
      time: new Date().getHours(),
      startDate: "",
      endDate: "",
    },
    cows: cows,
    sales: {
      sales: [...sales],
    },
    feeds: {
      feeds: [...feeds],
    },
  },
  getters: {
    //PRODUCE
    getCows: (state) => {
      return state.cows;
    },
    getHour: (state) => {
      if (state.produce.time > 14) return "evening";
      if (state.produce.time > 9) return "noon";
      if (state.produce.time > 0) return "morning";
    },
    getCowProduce: (state) => (id) => {
      if (id === "allproduce") {
        return state.produce.produce;
      } else {
        return state.produce.produce.filter((item) => item.cowId === id);
      }
    },
  },
  mutations: {
    //PRODUCE
    setTime(state) {
      state.produce.time = new Date().getHours();
    },
    setStartDate(state, startDate) {
      state.produce.startDate = +new Date(startDate).getTime();
    },
    setEndDate(state, endDate) {
      state.produce.endDate = +new Date(endDate).getTime();
    },
    addProduce(state, formData) {
      const { date, time, selectCow, quantity } = { ...formData };
      console.log(new Produce(selectCow, time, +quantity, date));
      state.produce.produce.push(new Produce(selectCow, time, +quantity, date));
    },
    addSale(state, formData) {
      const { date, category, quantity } = { ...formData };
      console.log(new Produce(category, +quantity, date));
      state.sales.sales.push(new Sale(category, +quantity, date));
    },
  },
  actions: {
    //PRODUCE
    setTime({ commit }) {
      commit("setTime");
    },
    setStartDate({ commit }, startDate) {
      commit("setStartDate", startDate);
    },
    setEndDate({ commit }, endDate) {
      commit("setEndDate", endDate);
    },
    addProduce({ commit }, formData) {
      commit("addProduce", formData);
    },
    addSale({ commit }, formData) {
      commit("addSale", formData);
    },
  },
  modules: {},
});
