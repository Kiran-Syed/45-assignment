//               ............Question no 11...........
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by 
// accessing each element in the list, one at a time.
var friendsName = ["Kiran", "Maryam", "Saba", "Hina"]; //index number method in Array
//      index number             0        1        2     3
console.log(friendsName[0]);
console.log(friendsName[1]);
console.log(friendsName[2]);
console.log(friendsName[3]);
friendsName.forEach(function (dostName) { return console.log(dostName); }); //forEach Method in Array
