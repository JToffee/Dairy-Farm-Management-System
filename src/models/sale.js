import { unitPrice } from "../util/config";
class Sale {
	unitPrice;
	amount;
	constructor(category, qty, date) {
		this.id = `${new Date().toString()}${Math.random().toString()}`;
		this.category = category;
		this.qty = qty;
		this.date = new Date(new Date(date).setHours(0, 0, 0, 0)).getTime();
		this.setPrice();
		this.setAmount();
	}

	setAmount() {
		this.amount = this.qty * this.unitPrice;
	}
	setPrice() {
		if (this.category === "KCC") {
			this.unitPrice = unitPrice.KCC;
		} else if (this.category === "wholesale") {
			this.unitPrice = unitPrice.wholesale;
		} else {
			this.unitPrice = unitPrice.retail;
		}
	}
}

export default Sale;
