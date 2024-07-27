//  ============= { QUESTION : 36 } ============= 
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should
//  be printed zon the shirt. The function should print a sentence summarizing the size of the shirt and
//   the message printed on it. Call the function.
function make_shirt(size, printMessage) {
    console.log("\n You Select ".concat(size, " size shirt with ").concat(printMessage, " prints on it."));
}
make_shirt("Small", "'Hello Coders'");
make_shirt("Medium", "'Hello Coders'");
make_shirt("Large", "'Hello Coders'");
