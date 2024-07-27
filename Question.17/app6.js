//   ...........Question no: 17..........
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message
// to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// Creating Guest list Array who invited
var guestList = ["Saba", "Maryam", "Areeba"];
// Making variable for those who can't come in the party.
var absentGuest = guestList[0];
// print the name of guest who can't come in the party.
console.log(absentGuest, "dont come in the party");
// Adding or Remove the values from guest list array.
guestList.splice(0, 1, "Kiran");
// Print Mssage for Bigger Table.
console.log("Salam everyone,Good News! We have found a bigger table for dinner party");
// Adding new name in starting index of array
guestList.unshift("Hifza");
// Adding new name in ending index of array
guestList.push("Manahil");
// Making variable for storing a middle index of our guest list in array
var middleIndex = Math.floor(guestList.length / 2);
// // Adding a new guest in the middle index of Array
guestList.splice(middleIndex, 0, "Seher");
// Print message of updated list
console.log("Updated List Of Guests");
//  Sending inviting message to all guest one by one
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ",I'm Glad to iniviting you for dinner party.")); });
// Inform that can only 2 guest invited for dinner
console.log("Unfortunately,The dinner table won't arrived on time, I can invite only two guest for dinner");
// using while loop to remove guest from the Array untill only 2 names remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry ".concat(removeGuest, ", I can invite only two people on dinner party"));
}
// sending invitation for the last two guest
console.log("Invitation for last two guest ");
guestList.forEach(function (lastTwo) { return console.log("Luckily ".concat(lastTwo, ",You are still invited to dinner ")); });
// removing last 2 guest
guestList.pop();
guestList.pop();
console.log("\nEmpty list:", guestList);
