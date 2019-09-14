loginAPI = async (email, password) => {
    try {
        var requestOptions = {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            }
        };
        
        var body = {
            "provider": "email",
            "data": {
                "email": email,
                "password": password
            }
        };
        requestOptions.body = JSON.stringify(body)
        const response = await fetch("https://auth.moappetit.com/v1/login", requestOptions)
        const result = await response.json() // result.auth_token will return the auth token for current session
        console.log(result)
    } catch (e) { console.log(e) }
}

export default loginAPI;
