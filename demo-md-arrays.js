let lockerAndAccessCode = [
  ['Locker 1', 135],
  ['Locker 2', 159],
  ['Locker 3', 642]
];

lockerAndAccessCode[2][0]; // "Locker 3"

let teamMembers = [
  ['Dana', 'Brenda', 'Happy'],
  ['Laura', 'Patti'],
  ['Leslye', 'Randy', 'Mollye', 'Ranse'],
  ['Eloise', 'Robert']
];

teamMembers[2][2]; // Mollye
teamMembers[2][3]; // Ranse

// You can loop through multi-dimensional arrays using
// nested forEach loops. I find this to be the most
// intuitive, but others may disagree.
teamMembers.forEach((team) => {
  console.log('team ---');
  team.forEach((player) => console.log(player));
});

// You can also loop through them using plain old for
// loops. I find this more error-prone, because you have
// to keep two separate indexes (i and j in this case), and
// it's easy to use the wrong one and difficult to spot
// when you do.
for (let i = 0; i < teamMembers.length; i++) {
  console.log('team ---');
  for (let j = 0; j < teamMembers[i].length; j++) {
    console.log(teamMembers[i][j]);
  }
}
