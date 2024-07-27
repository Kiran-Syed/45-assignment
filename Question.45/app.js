//  ============={ Question : 45 }============
// Cars: Write a function that stores information about a car in a Object. The function should always receive
// a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or
// an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
//  Define afunction to createa car object with optional option
function carFeatures(manufactures, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    // initialize a car object with manufacture and model
    var car = {
        manufactures: manufactures,
        model: model
    };
    //  add aditional to the car object
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//   Call the function to creat a car object
var my_car = carFeatures("Toyota", "Corolla", "color: Black", "Year: 2024");
// check that all the information is stored correctly or not 
console.log(my_car);
