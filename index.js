require("dotenv").config();

const getToken = require("./getToken.js");
getToken.getToken();

//some artistsId examples

const getArtistProfile = require("./getArtist.js");
getArtistProfile.getArtistProfile("3m6alJyeKYSCZ8078ttfaH"); //Jesper Kyd's Id

getArtistProfile.getArtistProfile("1oNxPFiz63yiszGOxZ9DeG"); //Shangrila's Id

getArtistProfile.getArtistProfile("67lytN32YpUxiSeWlKfHJ3"); //Yung Lean's Id

getArtistProfile.getArtistProfile("25uiPmTg16RbhZWAqwLBy5"); //Charlie XCX's Id
