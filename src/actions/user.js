import axios from "axios";


export const registration_request = async (username, email, password)=> {
    try {
        const response = await axios.post("http://localhost:8189/registration",
            {
                "email": email,
                "username": username,
                "password": password,
                "confirmPassword": password
            });
        alert(response.data)
    } catch (e) {
        alert(e)
        alert(e.data)
    }
}

export const login_request = async (username, password)=> {
    try {
        const response = await axios.post("http://localhost:8189/auth",
            {
                "username": username,
                "password": password,
            });
       var token = response.data.token
    return response;
    } catch (e) {
        alert(e)
    }
}