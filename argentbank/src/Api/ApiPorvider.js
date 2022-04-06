import axios from "axios"

class ApiProvider {

  async userLogIn(email, password, rememberMe) {
      return await axios.post('http://localhost:3001/api/v1/user/login', {
          "email": email,
          "password": password
        })
        .then(function (response) {
          if (response.data.body.token) {
            if (rememberMe) {
              localStorage.setItem("JWTtoken", response.data.body.token)
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

  async getUserProfileData(JWTtoken) {
    return await axios.post("http://localhost:3001/api/v1/user/profile", {}, {
      headers: {
        Authorization: "Bearer" + JWTtoken
      }
    })
    .then(function (response) {
      return response
    })
    .catch (function (error) {
      return error
    }) 
  }

  async updateUserProfileData(firstName, lastName, JWTtoken) {
    return await axios.put("http://localhost:3001/api/v1/user/profile", {
      firstName,
      lastName
    },
    {
      headers: {
        Authorization: "Bearer" + JWTtoken
      }
    })
    .then(function (response) {
      return response
    })
    .catch(function (error) {
      return error
    })
  }

}

export default ApiProvider