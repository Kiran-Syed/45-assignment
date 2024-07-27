//  =========={ Question : 43 }===========
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of 
// the array of magicians’ names. Because the original array will be unchanged, return the new array and store
//  it in a separate array. Call show_magicians() with each array to show that you have one array of the 
//  original names and one array with the Great added to each magician’s name.
// Define an Array containing magicians name.
var magicians_arr = ["Kiran", "Saba", "Hina", "Maryam"];
//  Define a function to print each magician name from Array
function show_magicians(magicians) {
    magicians.forEach(function (eachName) { return console.log("".concat(eachName)); });
}
//  Define to make magicians great through .map() method it will modify Array
function make_great(magicians) {
    var greatMagician = magicians.map(function (eachName) { return "\n The Great magician ".concat(eachName); });
    return greatMagician;
}
// Make copy of original Array through .slice function
// let copy_magicians_names = magicians_arr.slice()
// Modify the copied array include "The Great" with their names
var copy_great_magicians = make_great(__spreadArray([], magicians_arr, true));
// show both Array Original ans Copied(
console.log("Original Array:");
show_magicians(magicians_arr); //original
console.log("\n Copied Array:");
show_magicians(copy_great_magicians); //copied
