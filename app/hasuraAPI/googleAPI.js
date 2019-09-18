// Hasura API which creates and logs into an account by authenticating with google

function googleAPI() 
{
var url = "https://auth.charisma19.hasura-app.io/v1/signup";

var requestOptions = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    }
};

var body = {
    "provider": "google",
    "data": {
        "access_token": "oauth-access-token"
    }
};

requestOptions.body = JSON.stringify(body);

fetch(url, requestOptions)
.then(function(response) {
	return response.json();
})
.then(function(result) {
	console.log(result);
	// To save the auth token received to offline storage
	 var authToken = result.auth_token
	 AsyncStorage.setItem('HASURA_AUTH_TOKEN', authToken);
})
.catch(function(error) {
	console.log('Request Failed:' + error);
});
}

export default googleAPI;