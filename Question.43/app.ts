//  =========={ Question : 43 }===========

// Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of 
// the array of magicians’ names. Because the original array will be unchanged, return the new array and store
//  it in a separate array. Call show_magicians() with each array to show that you have one array of the 
//  original names and one array with the Great added to each magician’s name.


// Define an Array containing magicians name.
   let magicians_arr = ["Kiran", "Saba","Hina", "Maryam"];

//  Define a function to print each magician name from Array
function show_magicians(magicians:string[]):void{
   magicians.forEach( eachName => console.log(`${eachName}`) );
   
  }

//  Define to make magicians great through .map() method it will modify Array
function make_great(magicians:string[]):string[]{
 let greatMagician:string[]= magicians.map( eachName =>`\n The Great magician ${eachName}`);
 return greatMagician;
}

// Make copy of original Array through .slice function
// let copy_magicians_names = magicians_arr.slice()

// Modify the copied array include "The Great" with their names
let copy_great_magicians = make_great([...magicians_arr]);

// show both Array Original and Copied
console.log("Original Array:")
show_magicians(magicians_arr ); //original

console.log("\n Copied Array:")
show_magicians(copy_great_magicians); //copied