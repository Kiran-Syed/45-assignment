             // ......{Question no 3}........
//   Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
//   uppercase, and titlecase

let myName :string = "kiran Shahid";

console.log(myName.toLowerCase());

console.log(myName.toUpperCase());

console.log(myName.replace(/\b\w/g, (char) => char.toUpperCase()));