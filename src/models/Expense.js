class Expense {
	constructor(description, amount, date) {
		this.id = `${new Date.toString()}${Math.random().toString()}`;
		this.description = description;
		this.amount = amount;
		this.date = date;
	}
}

export default Expense;
