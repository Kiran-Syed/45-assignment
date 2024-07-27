//  ============== {QUESTION : 41} ==============
// Define an Array containing magicians name.
var magicians_name = ["Kiran", "Saba", "Hina", "Maryam"];
//  Define a function to print each magician name from Array
function show_magicians(magicians) {
    magicians.forEach(function (eachName) { return console.log(eachName); });
    return magicians;
}
//  call the function to print each magician name.
show_magicians(magicians_name);
//  @nd Method
var magicians_name1 = ["Kiran", "Saba", "Hina", "Maryam"];
function show_magicians1() {
    for (var _i = 0, magicians_name1_1 = magicians_name1; _i < magicians_name1_1.length; _i++) {
        var magicians = magicians_name1_1[_i];
        console.log(magicians);
    }
}
show_magicians1();
