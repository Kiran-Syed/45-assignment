//============{ Question : 24 } =============

//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array
//                   ====================================================================

// • Tests for equality and inequality with strings
let orange = "orange";
console.log("is orange is equal to orange ?");
console.log( orange == "orange");

console.log("\n An orange is not equal to orange ?");
console.log( orange != "orange");

// • Tests using the lower case function
let apple= "APPLE";
console.log("\n Is APPLE is equal to apple ?");
console.log( apple.toLowerCase() == "apple");

console.log("\n Is APPLE is not equal to apple ?");
console.log( apple.toLowerCase() != "apple");

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to
let ten = 10;
let twenty = 20;

// equal to
console.log("\n Is ten is equal to twenty ?");
console.log(ten == twenty);

// not equal
console.log("\n Is ten is not equal to twnety?");
console.log(ten != twenty);

// greater than
console.log("\n Is twenty is greater than ten?");
console.log(ten>twenty);

// less than
console.log("\n Is ten is less than twenty?");
console.log(ten<twenty);

// greater than or equal to
console.log("\n Is twenty is greater than or equal to ten ?");
console.log(twenty >= ten);

// less than or equal to
console.log("\n Is twenty is less than or equal to ten?");
console.log(twenty <= ten );

// • Tests using "and" and "or" operators
// true
console.log("\n twenty is not equal to ten and twenty greater than ten?");
console.log(twenty != ten && twenty > ten );
// false
console.log("\n twenty is not equal to ten and twenty greater than 30?");
console.log(twenty != ten && twenty > 30 );
//  true
console.log("\n twenty is not equal to ten or twenty less than ten?");
console.log(twenty != ten || twenty < ten );
// false
console.log("\n twenty is not equal to 20 and twenty greater than 50?");
console.log(twenty != twenty || twenty > 50 );

// • Test whether an item is in a array
 let fruits = ["Apple", "Mango","Orange"] ;
 console.log(" \n Is Apple is includes in my fruits Array");
 console.log(fruits.includes("Apple"));

// • Test whether an item is not in a array
 console.log(" \n Is Apple is includes in my fruits Array");
 console.log(!fruits.includes("Orange"));