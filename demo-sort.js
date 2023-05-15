const arr = [3, 12, 8, 57, 6];

arr.sort(function (a, b) {
  if (a > b) return -1;
  else if (a === b) return 0;
  else return 1;
});

console.log(arr);

const products = [
  { prodId: 2, item: 'Notepads (12 pk)', price: 12.29 },
  { prodId: 12, item: 'Black Pens (12 pk)', price: 5.7 },
  { prodId: 22, item: 'Stapler', price: 12.79 },
];

products.sort(function (a, b) {
  if (a.item < b.item) return -1;
  else if (a.item === b.item) return 0;
  else return 1;
});
products.forEach(function (product) {
  console.log(product.item);
});

let cart = [
  { item: 'Bread', price: 3.29, quantity: 2 },
  { item: 'Milk', price: 4.09, quantity: 1 },
  { item: 'T-Bone Steak', price: 12.99, quantity: 2 },
  { item: 'Baking Potato', price: 1.89, quantity: 6 },
  { item: 'Iceberg Lettuce', price: 2.06, quantity: 1 },
  { item: 'Ice Cream - Vanilla', price: 6.81, quantity: 1 },
  { item: 'Apples', price: 0.66, quantity: 6 },
];
