const kids = [
  { first: 'Natalie', last: 'Plyers' },
  { first: 'Brittany', last: 'Ray' },
  { first: 'Zachary', last: 'Westly' },
];

function displayKid(kid) {
  console.log(`${kid.first} ${kid.last}`);
}

const natalie = kids[0];

displayKid(natalie);

console.log('---');

kids.forEach(displayKid);
