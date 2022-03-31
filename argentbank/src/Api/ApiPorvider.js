import axios from "axios"


async function userLogIn(email, password) {
    return await axios.post('http://localhost:3001/api/v1/user/login', {
        "email": email,
        "password": password
      })
      .then(function (response) {
        return response
        
      })
      .catch(function (error) {
        return error
      });

}

export default userLogIn
