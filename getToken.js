const axios = require("axios");
require("dotenv").config();

let client_id = process.env.CLIENT_ID;
let client_secret = process.env.CLIENT_SECRET;

async function getToken() {
  var token;
  data = {
    client_id: `${client_id}`,
    client_secret: `${client_secret}`,
    grant_type: "client_credentials", // Adjust the grant type as needed
  };

  var formData = new URLSearchParams(data);
  try {
    const response = await axios.post(
      "https://accounts.spotify.com/api/token",
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    token = response.data.access_token;
    return token;
  } catch (error) {
    console.log(JSON.stringify(error));
    throw error;
  }
}

module.exports = { getToken };
