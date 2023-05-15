let kids = [
  { first: 'Natalie', last: 'Plyers' },
  { first: 'Brittany', last: 'Ray' },
  { first: 'Zachary', last: 'Westly' },
];

// const kidFullNames = ;

// { first: 'Natalie', last: 'Plyers' },
function buildFullName(arrayElement) {
  return arrayElement.first + ' ' + arrayElement.last;
}
const kidFullNames = kids.map(buildFullName);
console.log(kidFullNames);

/* 
[
  'Natalie Plyers', 
  'Brittany Ray', 
  'Zachary Westly'
]
*/
function lowerCaseName(name) {
  return name.toLowerCase();
}
const lowerCaseNames = kidFullNames.map(lowerCaseName);
console.log(lowerCaseNames);
/* 
[
  'natalie plyers', 
  'brittany ray', 
  'zachary westly'
]
*/
