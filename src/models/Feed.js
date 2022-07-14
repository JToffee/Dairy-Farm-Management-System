class Feed {
  totalCost;
  totalQty;
  constructor(date, name, unitName, unitSize, quantity, unitPrice) {
    this.id = `${new Date.toString()}${Math.random().toString()}`;
    this.date = new Date(new Date(date).setHours(0, 0, 0, 0)).getTime();
    this.name = name;
    this.qty = {
      unitName: unitName,
      unitSize: unitSize,
      quantity: quantity,
    };
    this.price = unitPrice;
    this.setQty();
    this.setCost();
  }
  setQty() {
    this.totalQty = +this.qty.unitSize * +this.qty.quantity * this.unitPrice;
  }
  setCost() {
    this.totalCost = this.qty.quantity * this.unitPrice;
  }
}

export default Feed;
