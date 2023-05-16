let lockerAndAccessCode = [
  ['Locker 1', 135], // 0
  ['Locker 2', 159], // 1
  ['Locker 3', 642] // 2
  // 0       //1
];

// console.log(lockerAndAccessCode[2][1]);
// console.log(lockerAndAccessCode[1]);

const menu = [
  // breakfast items
  [
    { item: 'Sausage and Egg Biscuit', price: 3.69 },
    { item: 'Bacon and Egg Biscuit', price: 3.49 },
    { item: 'Ham and Egg Biscuit', price: 3.29 }
  ],

  // Lunch items
  [
    { item: 'Avocado Egg Salad Sandwich', price: 12.95 },
    { item: 'Buffalo Chicken Wrap', price: 11.95 },
    { item: 'Chicken Salad Sandwich', price: 13.95 },
    { item: 'Cheesburger', price: 12.95 }
  ],

  // Dinner items
  [
    { item: 'Cheesburger', price: 12.95 },
    { item: 'Chicken and Rice', price: 19.95 },
    { item: 'Fettuccini Alfredo', price: 23.95 },
    { item: 'Ribeye Steak', price: 29.95 },
    { item: 'Fish and Chips', price: 16.95 }
  ]
];

const mealIndex = 2;
const mealNames = ['Breakfast', 'Lunch', 'Dinner'];

console.log(mealNames[mealIndex], 'Menu');

menu[mealIndex].forEach((food) => {
  console.log(food.item);
});
