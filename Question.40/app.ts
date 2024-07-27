//         ============={ Question : 40}==============

// Album: Write a function called make_album() that builds a Object describing a music album. 
// The function should take in an artist name and an album title, and it should return 
// a Object containing these two pieces of information. Use the function to make three 
// dictionaries representing different albums. Print each return value to show that Objects
// are storing the album information correctly. Add an optional parameter to make_album() that 
// allows you to store the number of tracks on an album. If the calling line includes a value for
// the number of tracks, add that value to the album’s Object. Make at least one new function call 
// that includes the number of tracks on an album.



//  creating function with optional parameters inside function we create object
function make_album(artist_name: string, album_title:string, tracks?:number){

  let album:{artist:string, title:string, tracks?:number}={
    artist:artist_name,     title:album_title 
    }
    if(tracks !== undefined){
        album.tracks= tracks;
    }
  return album;
}

// calling function with three different value.and store it in a new variable.
let new_album1 = make_album("Kiran","Album 1" );
console.log(new_album1);

let new_album2 = make_album("Saba","Album 2" );
console.log(new_album2);

// here we give optional value in function arguments
let new_album3 = make_album("Hina","Album 3" , 20);
console.log(new_album3);