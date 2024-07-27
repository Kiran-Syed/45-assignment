//  ===================={ QUESTION: 31}===============

// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is prin


let userNames = ["Kiran", "Saba", " Hina", "Admin", "Maryam"];
userNames = [];

if(userNames.length === 0){
   console.log("We need to find some users!")
 
    userNames.forEach(user => {
    if(user === "Admin"){
    console.log(`\n Hello ${user}, would you like to see a status report?`);
    }
    else{
        console.log(`\n Hello ${user}, thank you for logging in again.`);
    }
    }) 
}