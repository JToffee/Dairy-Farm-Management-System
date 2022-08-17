import Feed from "@/models/Feed";

// date, name, unitName, unitSize, quantity, unitPrice;
export const feeds = [
  new Feed(new Date(), "sunflower", "kg", 5, 10, 50),
  new Feed(new Date(2022, 6, 15), "sunflower", "kg", 5, 100, 50),
  new Feed(new Date(), "molases", "litre", 1, 10, 20),
  new Feed(new Date(), "wheat", "kg", 50, 10, 200),
  new Feed(new Date(), "dairy lick", "kg", 2, 2, 100),
  new Feed(new Date(), "cotton", "kg", 90, 10, 315),
  new Feed(new Date(2022, 3, 16), "dairy lick", "kg", 2, 2, 100),
];
