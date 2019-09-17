import React from 'react';


// Added by Salwa
const REGISTER_URL = "https://auth.moappetit.com/v1/signup"; // Signup end point

// Function to send a request to API to register user
const registerAPI = async (data, callback) => {
  let requestOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
  };

  let body = {
    provider: "email",
    data: {
      email: data.email.toLowerCase(),
      password: data.password
    }
  };

  requestOptions.body = JSON.stringify(body);

  try {
    const response = await fetch(REGISTER_URL, requestOptions);
    const result = await response.json() // result.auth_token will return the auth token for current session
    console.log(result)
    if(response.status !== 200){
        const error = result.message
        callback(error)
    }
    else {
      const error = 'noerror'
      callback(error);
    }
    return response;
  } catch (e) {
    console.log("Request Failed: " + e.message);
  }
};

export default registerAPI;
// END: Added by Salwa
