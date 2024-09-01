const axios = require("axios");
const getToken = require("./getToken.js");
require("dotenv").config();
require("./getToken.js");

async function getArtistProfile(artistId) {
  const newToken = await getToken.getToken();
  const response = await fetch(
    `https://api.spotify.com/v1/artists/${artistId}`,
    {
      headers: {
        Authorization: "Bearer " + newToken,
      },
    }
  );

  const data = await response.json();
  console.log(
    `Artist name: ${JSON.stringify(data.name)}\nGenres: ${JSON.stringify(
      data.genres
    )}\nPopularity: ${JSON.stringify(data.popularity)}\n\n`
  );
}

module.exports = { getArtistProfile };
