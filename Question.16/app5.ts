//                   ..........Question no 16 .........

// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests 
// to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.

// Creating Guest list Array who invited
let guestList:string[] = ["Saba","Maryam","Areeba","warisha"];

// Making variable for those who can't come in the party.
let absentGuest = guestList[0]

// print the name of guest who can't come in the party.
console.log(absentGuest,"dont come in the party");

// Adding or Remove the values from guest list array.
guestList.splice(0,1,"Kiran");

// Print Mssage for Bigger Table
console.log("Salam everyone,Good News! We have found a bigger table for dinner party")

// Adding new name in starting index of array
guestList.unshift("Hifza");

// Adding new name in ending index of array
guestList.push("Manahil");

// Making variable for storing a middle index of our guest list in array
let middleIndex:number = Math.floor(guestList.length/2);

// Adding a new guest in the middle index of Array
guestList.splice(middleIndex,0,"Seher");

// Print message of updated list
console.log("Updated List Of Guests");
//  Sending inviting message to all guest one by one
guestList.forEach(guest => console.log(`Salam ${guest},I'm Glad to iniviting you for dinner party.`));