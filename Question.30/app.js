// ================ { Question : 30 } ==============
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing 
//  that will print a greeting to each user after they log in to a website. Loop through the array, and print a
//   greeting to each user:
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status
//  report?
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
var userNames = ["Kiran", "Saba", " Hina", "Admin", "Maryam"];
// creating message for each person with the help of forEach loop
userNames.forEach(function (user) {
    if (user === "Admin") {
        console.log("\n Hello ".concat(user, ", would you like to see a status report?"));
    }
    else {
        console.log("\n Hello ".concat(user, ", thank you for logging in again."));
    }
});
