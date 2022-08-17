// Sum Produce
export const sum = (data) => {
  let total;

  data &&
    data.reduce((acc, item) => {
      if (item.qty) {
        total = item.qty + acc;
      }

      return total;
    }, 0);
  if (!total) total = 0;
  return total;
};

//Arr sum
export const sumSale = (data) => {
  let total;

  data &&
    data.reduce((acc, item) => {
      if (item.amount) {
        total = item.amount + acc;
      }

      return total;
    }, 0);
  if (!total) total = 0;
  return total;
};

export const allMonths = () => {
  let months = [];
  for (let i = 0; i < 12; i++) {
    months.push(new Date(2022, i).toLocaleString("default", { month: "long" }));
  }
  return months;
};

//Sum Feeds quantity
export const sumFeedsQty = (data) => {
  let total;

  data &&
    data.reduce((acc, item) => {
      if (item.totalQty) {
        total = item.totalQty + acc;
      }

      return total;
    }, 0);
  if (!total) total = 0;
  return total;
};

//Sum Feeds Cost
export const sumFeedsCost = (data) => {
  let total;

  data &&
    data.reduce((acc, item) => {
      if (item.totalCost) {
        total = item.totalCost + acc;
      }

      return total;
    }, 0);
  if (!total) total = 0;
  return total;
};
