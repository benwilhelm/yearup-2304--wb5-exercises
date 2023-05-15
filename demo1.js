const names = ['Adan', 'Cecelia', 'Chauni', 'Dillon', 'Noah'];

function startsWithC(name) {
  return name.indexOf('C') === 0;
}

function hasSixLetters(name) {
  return name.length === 6;
}

// Loop to find one
let matchingName;
for (let i = 0; i < names.length; i++) {
  if (startsWithC(names[i])) {
    matchingName = names[i];
    break;
  }
}

// Loop to find many
let matchingNames = [];
for (let i = 0; i < names.length; i++) {
  if (startsWithC(names[i])) {
    matchingNames.push(names[i]);
  }
}

const firstCName = names.find(startsWithC);
const allCNames = names.filter(startsWithC);
console.log('First name that starts with C:', firstCName);
console.log('All names that start with C:', allCNames);

const firstSixLetterName = names.find(hasSixLetters);
const allSixLetterNames = names.filter(hasSixLetters);
console.log('First name with six Letters:', firstSixLetterName);
console.log('All names with six Letters:', allSixLetterNames);
