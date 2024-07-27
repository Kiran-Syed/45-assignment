
            //  ==========={ QUESTION 42 }===========

// Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great()
//  that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call 
//  show_magicians() to see that the list has actually been modified.


   // Define an Array containing magicians name list.
   let magicians_arr = ["Kiran", "Saba","Hina", "Maryam"];

//  Define a function to print each magician name from Array
   function show_magicians(magicians:string[]){
      return magicians.forEach( eachName => console.log(`${eachName}`) );
      
     }

//  Define to make magicians great through .map() method it will modify Array
 function make_great(magicians:string[]){
    magicians.map( eachName => console.log(`\n The Great magician ${eachName}`) );
    
   }

// initial list of magician
show_magicians(magicians_arr);

// modifying the list of magicians
make_great(magicians_arr);

// modified list of magicians
show_magicians(magicians_arr);