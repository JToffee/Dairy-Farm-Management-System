import Produce from "./produce.js";

import { produce } from "../../data/produce.js";
import { cows } from "../../data/cows.js";

export const state = {
	cows: [...cows],
	feeds: [],
	produce: [...produce],
	sales: [],
	expenses: [],
	profits: [],
};

// produce

export const filterBycow = (id) => {
	const result = state.produce.filter((produce) => produce.cowId === id);

	console.log(result);

	return result;
};
// Save data to farmData

export const save = (formData, type) => {
	// produce

	if (type === "produce") {
		console.log(formData);
		const { date, time, selectCow, quantity } = { ...formData };
		state.produce.push(new Produce(selectCow, time, +quantity, date));
	}
};

// delete from farmData

// retrieve data from farmData

// save to local storage

// retrieve from local storage
