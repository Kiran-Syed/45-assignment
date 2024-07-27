//                  .........Questin no 14..........
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that 
// includes at least three people you’d like to invite to dinner. Then use your list to print a message to
//   each person, inviting them to dinner.
var guestList = ["Saba", "Maryam", "Hina", "warisha"];
guestList.forEach(function (oneGuest) { return console.log("Dear ".concat(oneGuest, ",\n I am inviting you for dinner party.")); });
