//  ============={ QUESTION : 27 }===========

// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.

// • If the alien is yellow, print a message that the player earned 10 points.

// • If the alien is red, print a message that the player earned 15 points.

// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

//  1st version
let alien_Color = "Green";

if(alien_Color === "Green"){
    console.log("you shot Green alien, you earn just 5 points");
}
else if(alien_Color === "Yellow"){
    console.log("you shot Yellow alien, you earn just 10 points");
}
else if(alien_Color === "Red"){
    console.log("you shot Red alien, you earn just 15 points");
}


//  2nd version
let alien_Color2 = "Yellow";

if(alien_Color2 === "Green"){
    console.log("you shot Green alien, you earn just 5 points");
}
if(alien_Color2 === "Yellow"){
    console.log("you shot Yellow alien, you earn just 10 points");
}
if(alien_Color2 === "Red"){
    console.log("you shot Red alien, you earn just 15 points");
}
//  3rd version
let alien_Color3 = "Red";

if(alien_Color3 === "Green"){
    console.log("you shot Green alien, you earn just 5 points");
}
if(alien_Color3 === "Yellow"){
    console.log("you shot Yellow alien, you earn just 10 points");
}
if(alien_Color3 === "Red"){
    console.log("you shot Red alien, you earn just 15 points");
}