import Sale from "../models/sale.js";

export const sales = [
	new Sale("KCC", 200, new Date()),
	new Sale("KCC", 300, new Date()),
	new Sale("retail", 400, new Date()),
	new Sale("retail", 500, new Date()),
	new Sale("wholesale", 600, new Date()),
	new Sale("wholesale", 700, new Date()),
	new Sale("prepaid", 800, new Date()),
	new Sale("prepaid", 900, new Date()),
	new Sale("prepaid", 900, new Date(2022, 4, 23)),
	new Sale("prepaid", 900, new Date(2022, 4, 23)),
	new Sale("prepaid", 500, new Date(2022, 6, 1)),
	new Sale("billed", 1000, new Date()),
	new Sale("billed", 1100, new Date()),
	new Sale("unsold", 1200, new Date()),
	new Sale("unsold", 1300, new Date()),
];
