import HomePage from "../components/HomePage.vue";
import DurationProduce from "../components/produce/DurationProduce.vue";
import ProdInput from "../components/produce/ProdInput.vue";
import CustomPeriod from "../components/produce/CustomPeriod.vue";
import DurationSales from "../components/sales/DurationSales.vue";
import SalesPeriod from "../components/sales/CustomPeriod.vue";
import InputSale from "../components/sales/InputSale.vue";
import DurationFeeds from "../components/feeds/DurationFeeds.vue";
import InputFeed from "../components/feeds/InputFeed.vue";
import FeedsPeriod from "../components/feeds/CustomPeriod.vue";
import DurationExpenses from "../components/expenses/DurationExpenses.vue";

export const routes = [
  //HOMEPAGE

  {
    path: "/",
    name: "Home",
    component: HomePage,
    alias: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomePage,
  },
  {
    path: "/:any/home",
    redirect: "/home",
  },

  //PRODUCE

  {
    path: "/produce",
    component: DurationProduce,
    name: "produce",
    props: { duration: 0 },
  },
  {
    path: "/produce",
    component: DurationProduce,
    alias: "/today",
    props: { duration: 0 },
  },
  {
    path: "/produce/new",
    name: "producenew",
    component: ProdInput,
  },

  {
    path: "/produce/today",
    name: "producetoday",
    component: DurationProduce,
    props: { duration: 0 },
  },
  {
    path: "/produce/pastweek",
    component: DurationProduce,
    name: "producepastweek",
    props: { duration: 7 },
    alias: "/week",
  },
  {
    path: "/produce/pastmonth",
    component: DurationProduce,
    name: "producepastmonth",
    props: { duration: 30 },
  },
  {
    path: "/produce/chooseperiod",
    component: CustomPeriod,
    name: "producechooseperiod",
  },
  {
    path: "/:any/produce",
    redirect: "/produce",
  },

  //SALES

  {
    path: "/sales",
    name: "sales",
    component: DurationSales,
    props: { duration: 0 },
  },
  {
    path: "/sales/new",
    name: "salesnew",
    component: InputSale,
  },
  {
    path: "/sales/today",
    name: "salestoday",
    component: DurationSales,
    props: { duration: 0 },
  },
  {
    path: "/sales/pastweek",
    name: "salespastweek",
    component: DurationSales,
    props: { duration: 7 },
  },
  {
    path: "/sales/pastmonth",
    name: "salespastmonth",
    component: DurationSales,
    props: { duration: 30 },
  },
  {
    path: "/sales/chooseperiod",
    name: "saleschooseperiod",
    component: SalesPeriod,
  },

  {
    path: "/sales",
    name: "sales",
    component: DurationSales,
    props: { route: "sales", duration: 0 },
  },
  {
    path: "/:any/sales",
    redirect: "/sales",
  },
  //FEEDS
  {
    path: "/:any/feeds",
    redirect: "/feeds",
  },

  {
    path: "/feeds",
    name: "feeds",
    component: DurationFeeds,
  },
  {
    path: "/feeds/new",
    name: "feedsnew",
    component: InputFeed,
  },
  {
    path: "/feeds/today",
    name: "feedstoday",
    component: DurationFeeds,
  },

  {
    path: "/feeds/month",
    name: "MonthFeeds",
    component: DurationFeeds,
    props: true,
  },
  {
    path: "/feeds/chooseperiod",
    name: "feedschooseperiod",
    component: FeedsPeriod,
  },

  //EXPENSES
  {
    path: "/expenses",
    name: "expenses",
    component: DurationExpenses,
  },
];

  // {
  // 	path: "/about",
  // 	name: "About",
  // 	// route level code-splitting
  // 	// this generates a separate chunk (about.[hash].js) for this route
  // 	// which is lazy-loaded when the route is visited.
  // 	component: About,
  // },

