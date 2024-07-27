//          ============={ QUESTION : 32 }==============
// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a 
// unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in 
// the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message
//  that the person will need to enter a new username. If a username has not been used, print a message saying that 
//  the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
// • Make a list of five or more usernames called current_users.
var current_users = ["Kiran", "Saba", "Hina", "Maryam", "Sana"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in 
// the current_users list.
var new_users = ["Ayesha", "Urooj", "Hania", "Saba", "Hina"];
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message
//  that the person will need to enter a new username. If a username has not been used, print a message saying that 
//  the username is available.
new_users.forEach(function (one_users) {
    var our_condition = current_users.some(function (current_one) { return current_one.toLowerCase() === one_users.toLowerCase(); });
    if (our_condition) {
        console.log("\n sorry ".concat(one_users, " is already taken"));
    }
    else {
        console.log("\n The username ".concat(one_users, " is available."));
    }
});
