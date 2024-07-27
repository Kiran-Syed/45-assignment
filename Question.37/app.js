//  ============ { Question : 37} =============
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message
//  that reads I love TypeScript. Make a large shirt and a medium shirt with the default message,
//   and a shirt of any size with a different message.
//  using named function with default value
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I love TypeScript."; }
    console.log("\n Creating ".concat(size, " shirt with the ").concat(printMessage, " print on shirt."));
}
// calling function name with default value
make_shirt();
//  calling function with medium shirt size but message should print the same/ default message
make_shirt("Medium");
//  Calling a function now with small size but this time we change the message.
make_shirt("Small", "I Love Javascript");
