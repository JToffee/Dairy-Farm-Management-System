import Produce from "../models/Produce.js";
import { cows } from "./cows.js";

export const produce = [
	new Produce(cows[1].id, "morning", 50, new Date(2021, 2, 2)),
	new Produce(cows[2].id, "morning", 90, new Date(2021, 7, 3)),
	new Produce(cows[3].id, "morning", 50, new Date(2021, 2, 3)),
	new Produce(cows[4].id, "morning", 50, new Date()),
	new Produce(cows[5].id, "morning", 50, new Date()),
	new Produce(cows[0].id, "morning", 50, new Date()),
	new Produce(cows[1].id, "noon", 50, new Date(2022, 4, 4)),
	new Produce(cows[2].id, "noon", 50, new Date()),
	new Produce(cows[3].id, "noon", 56, new Date()),
	new Produce(cows[4].id, "noon", 50, new Date()),
	new Produce(cows[5].id, "noon", 50, new Date(2022, 4, 3)),
	new Produce(cows[0].id, "noon", 50, new Date(2022, 4, 5)),
	new Produce(cows[0].id, "noon", 500, new Date(2022, 4, 30)),
	new Produce(cows[1].id, "evening", 500, new Date(2022, 3, 27)),
	new Produce(cows[2].id, "evening", 55, new Date()),
	new Produce(cows[3].id, "evening", 45, new Date()),
	new Produce(cows[4].id, "evening", 89, new Date()),
	new Produce(cows[5].id, "evening", 4, new Date()),
	new Produce(cows[2].id, "evening", 36, new Date()),
];
