//  ============{ Question : 44 }==============
// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides,
// and it should print a summary of the sandwich that is being ordered. Call the function three times,
// using a different number of arguments each time.
// Define a function with a rest parameters that accept multiple arguments
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\n Making a sandwich with the following items: \n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
    console.log("Now enjoy the sandwich. \n");
}
//  Call the function 3 times with 3 different number of argumens
makeSandwich("Chicken", "Cheese", "Mayo", "Egg", "Ketchup");
makeSandwich("Bread", "Kebab", "Mayo", "Ketchup");
makeSandwich("Grilled Chicken", "Cheese", "Egg Mayo sauce", "Coleslow", "Boiled Egg", "Ketchup");
