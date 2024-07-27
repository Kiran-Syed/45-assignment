//  ============={ Question : 45 }============
// Cars: Write a function that stores information about a car in a Object. The function should always receive
// a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or
// an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


//  Define afunction to createa car object with optional option
 function carFeatures(manufactures:string, model:string, ...options:string[]){

    // initialize a car object with manufacture and model
   let car = {
    manufactures : manufactures,
    model : model
    };
    //  add aditional to the car object
    options.forEach(option => {
        let [key,value] = option.split(":");
        car[key.trim()] = value.trim();
    })
 return car;
 }
//   Call the function to creat a car object
 let my_car = carFeatures("Toyota", "Corolla", "color: Black", "Year: 2024");

// check that all the information is stored correctly or not 
 console.log(my_car)