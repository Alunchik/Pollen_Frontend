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
        return(response.data)
    } catch (e) {
        alert(e)
    }
}

export const login_request = async (username, password)=> {
    try {
        const response = await axios.post("http://localhost:8189/auth",
            {
                "username": username,
                "password": password,
            });
        axios.defaults.headers.common['Authorization'] = "Bearer " + response.data.token
      return response.data.token
    } catch (e) {
        alert(e)
    }
}