class Feed {
  unitSize = [];
  unitName = [];
  unitPrice = [];

  constructor(date, name, unitPrice, unitSize, unitName) {
    this.date = new Date(new Date(date).setHours(0, 0, 0, 0)).getTime();
    this.id = `${new Date.toString()}${Math.random().toString()}`;
    this.name = name;
    this.unitSize.push(unitSize);
    this.unitName.push(unitName);
    this.unitPrice.push(unitPrice);
  }
}

export default Feed;
