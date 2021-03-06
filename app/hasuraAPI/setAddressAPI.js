// Added by IMI
const SET_ADDRESS_URL = "https://data.moappetit.com/v1/query";

// Function to call the API that adds the address to the address_table in Hasura (postgres db)
export const setAddressAPI = async (data) => {
    let requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }
    };

    let body = {
        type: "insert",
        args: {
            table: "address",
            objects: [
                {
                    id: data.id,
                    addressline1: (data.addressline1),
                    addressline2: (data.addressline2),
                    addressline3: (data.addressline3),
                    city: (data.city),
                    state: (data.state),
                    zip: (data.zip),
                    user_id: (data.user_id)
                    
                }
            ]
        }
    };
    console.log('This should not show');
    requestOptions.body = JSON.stringify(body);

    try {
        return await fetch(SET_ADDRESS_URL, requestOptions); // returning the response generated by the API
    } catch (e) {
        console.log('Request Failed:' + e);
    }
};

export default setAddressAPI;

// END: Added by IMI