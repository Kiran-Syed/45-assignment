
//  ============ {QUESTION : 39}=============

// City Names: Write a function called city_country() that takes in the name of a city and its country.
//  The function should return a string formatted like this:

// "Lahore, Pakistan"

// Call your function with at least three city-country pairs, and print the value that’s returned.



//  creating a function called city_country()
function city_country(city:string , country:string):string{
  return `\n ${city} is in ${country} `
}

// three city-country pairs
console.log(city_country("Peshawar", "Pakistan"));

console.log(city_country("Quetta", "Pakistan"));

console.log(city_country("Berlin","Germany" ));