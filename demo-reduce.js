const numbers = [3, 5, 7, 9];

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }

function sumReducer(sum, item) {
  return sum + item;
}
const sum = numbers.reduce(sumReducer, 0);
console.log('sum', sum);
