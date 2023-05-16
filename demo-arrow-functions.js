const numbers = [3, 5, 7, 9];

const sumReducer = (a, b) => a + b;

const sum = numbers.reduce(sumReducer, 0);
console.log('sum', sum);

const names = ['Adan', 'Cecelia', 'Chauni', 'Dillon', 'Noah'];

// These two functions are equivalent
function funcFindC(name) {
  return name.startsWith('C');
}
const arrowFindC = (name) => name.startsWith('C');

const firstC = names.find((name) => name.startsWith('C'));
