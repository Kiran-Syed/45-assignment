
//  ============== {QUESTION : 41} ==============

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
//  which prints the name of each magician in the array.


//  Define a function to print each magician name from Array

function show_magicians(magicians:string[]){
 magicians.forEach( eachName => console.log(eachName) );
 return magicians;
}

// Define an Array containing magicians name.
let magicians_name = ["Kiran", "Saba","Hina", "Maryam"];

//  call the function to print each magician name.
show_magicians(magicians_name);


//  ......2nd Method.....
let magicians_name1 = ["Kiran", "Saba","Hina", "Maryam"];

// here we using for of loop inside a function
function show_magicians1(){
  for(let magicians of magicians_name1){
        console.log(magicians)
  }
}
show_magicians1();    // calling function