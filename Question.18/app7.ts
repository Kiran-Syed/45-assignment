
//          ............Question no 18...........

// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Making an Array of countryand print in its original order.
let countriesToVisit:string[] = ["Turkey", "England","Australia","Brazil","Newsland"];
console.log("original order",countriesToVisit);

// Print the Array (country name ) in alphabetical order.asli waly mn changing kiye bagair
console.log("Alphabetical order:" ,[...countriesToVisit].sort());
// checking original order still in its original
console.log("still in its original order:", countriesToVisit);
// Print a Array in reverse order. Original order or unorginal order mn changing kiye bagair(duplicate bnao)
console.log("Reverse order:", [...countriesToVisit].reverse());
//show that the array is still im=n its original order
console.log("still in its original order:",countriesToVisit);
// we have change orginal Array order now
console.log("Original Array Reversed:", countriesToVisit.reverse());
// Print the Array to show that its Back to original order
console.log("Back to Original Order:", countriesToVisit.reverse());
//print the Array to show that its order has been change in alphabetical order
console.log(" sort in its ALphrbetical order:", countriesToVisit);
// Original Array Again reverse order 
console.log("Reverse order now:",countriesToVisit.reverse());