import HomePage from "../components/HomePage.vue";
import DurationProduce from "../components/produce/DurationProduce.vue";
import ProdInput from "../components/produce/ProdInput.vue";
import CustomPeriod from "../components/produce/CustomPeriod.vue";
import DurationSales from "../components/sales/DurationSales.vue";
import SalesPeriod from "../components/sales/CustomPeriod.vue";
import InputSale from "../components/sales/InputSale.vue";
import DurationFeeds from "../components/feeds/DurationFeeds.vue";
import InputFeed from "../components/feeds/InputFeed.vue";

export const routes = [
  //HOMEPAGE

  {
    path: "/",
    name: "Home",
    component: HomePage,
    props: { route: "home" },
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
    props: { route: "home" },
  },
  {
    path: "/produce",
    name: "produce",
    component: DurationProduce,
    props: { duration: 0 },
  },

  //PRODUCE
  {
    path: "/home",
    name: "home",
    component: HomePage,
    props: { route: "home" },
  },
  {
    path: "/new",
    name: "InputProduce",
    component: ProdInput,
    props: { route: "new produce" },
  },
  {
    path: "/today",
    name: "today",
    component: DurationProduce,
    props: { duration: 0 },
  },
  {
    path: "/week",
    name: "week",
    component: DurationProduce,
    props: { duration: 7 },
  },
  {
    path: "/month",
    name: "month",
    component: DurationProduce,
    props: { duration: 30 },
  },
  {
    path: "/customperiod",
    name: "customperiod",
    component: CustomPeriod,
  },

  //SALES

  {
    path: "/sales",
    name: "sales",
    component: DurationSales,
    props: { route: "sales", duration: 0 },
  },
  {
    path: "/add",
    name: "InputSale",
    component: InputSale,
  },
  {
    path: "/salestoday",
    name: "todaySales",
    component: DurationSales,
    props: { duration: 0 },
  },
  {
    path: "/thisweek",
    name: "weekProduce",
    component: DurationSales,
    props: { duration: 7 },
  },
  {
    path: "/thismonth",
    name: "thismonth",
    component: DurationSales,
    props: { duration: 30 },
  },
  {
    path: "/choose",
    name: "choose",
    component: SalesPeriod,
  },

  //FEEDS

  {
    path: "/feeds",
    name: "feeds",
    component: DurationFeeds,
  },
  {
    path: "/feeds/add",
    name: "feedsinp",
    component: InputFeed,
  },
  {
    path: "/feeds/:data",
    name: "MonthFeeds",
    component: DurationFeeds,
    props: true,
  },

  // {
  // 	path: "/about",
  // 	name: "About",
  // 	// route level code-splitting
  // 	// this generates a separate chunk (about.[hash].js) for this route
  // 	// which is lazy-loaded when the route is visited.
  // 	component: About,
  // },
];
