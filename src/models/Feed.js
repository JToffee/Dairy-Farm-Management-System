class Feed {
  // totalCost;
  // totalQty;
  constructor(date, name, unitName, packagingSize, quantity, unitPrice) {
    this.id = `${new Date().toString()}${Math.random().toString()}`;
    this.date = new Date(new Date(date).setHours(0, 0, 0, 0)).getTime();
    this.name = name.toString().toLowerCase();
    this.qty = {
      unitName: unitName,
      packagingSize: packagingSize,
      quantity: quantity,
    };
    this.price = unitPrice;
    this.totalQty = packagingSize * +quantity;
    this.totalCost = +quantity * +unitPrice;
    // this.setQty();
    // this.setCost();
  }
  // setQty() {
  //   this.totalQty = +this.qty.unitSize * +this.qty.quantity;
  // }
  // setCost() {
  //   this.totalCost = +this.qty.quantity * +this.unitPrice;
  // }
}

export default Feed;
