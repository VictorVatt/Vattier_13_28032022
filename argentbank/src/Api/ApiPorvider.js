import axios from "axios"


async function userLogIn(email, password, rememberMe) {
    return await axios.post('http://localhost:3001/api/v1/user/login', {
        "email": email,
        "password": password
      })
      .then(function (response) {
        if (response.data.body.token) {
          if (rememberMe) {
            sessionStorage.setItem("JWTtoken", response.data.body.token)
          }
          return response
          
        }
        
      })
      .catch(function (error) {
        if (error.response) {
          return error.response.data
        }
      });

}

export default userLogIn
