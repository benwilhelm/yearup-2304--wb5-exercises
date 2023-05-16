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

// teamMembers.forEach((team) => {
//   console.log('team ---');
//   team.forEach((player) => console.log(player));
// });

for (let i = 0; i < teamMembers.length; i++) {
  console.log('team ---');
  for (let j = 0; j < teamMembers[i].length; j++) {
    console.log(teamMembers[i][j]);
  }
}
