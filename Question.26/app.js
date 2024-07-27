// ==============={ Question : 26 }===============
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
// • Write one version of this program that runs the if block and another that runs the else block.
var alien_Color = "Green";
if (alien_Color === "Green") {
    console.log("\n Alien color is green, Player just earn 5 points");
}
else {
    console.log("\n Player just earn 10 points");
}
if (alien_Color === "blue") {
    console.log("You got 2 points");
}
else {
    console.log("\n Game Over! , Please Try again");
}
