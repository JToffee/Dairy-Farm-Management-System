class Produce {
	constructor(cowId, time, qty, date) {
		//qry = Quantity
		this.id = `${new Date().toString()}${Math.random().toString()}`;
		this.cowId = cowId;
		this.time = time;
		this.qty = qty;
		this.date = new Date(new Date(date).setHours(0, 0, 0, 0)).getTime();
	}
}

export default Produce;
