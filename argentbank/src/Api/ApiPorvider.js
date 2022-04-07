import axios from "axios"

class ApiProvider {
  /**
   * Use axios to POST login email and password to the API
   * If remember is true (checked) the response (JWTtoken) is stored in the localStorage 
   * If error it return the error
   * @param {string} email 
   * @param {string} password 
   * @param {boolean} rememberMe 
   * @returns {object}
   */
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
  /**
   * Use axios to POST the token previusly recover to retrive the user data
   * if there is a response : return response
   * if error return the error with a catch
   * @param {string} JWTtoken 
   * @returns {object}
   */
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
  /**
   * Use the axios method PUT do modify/updata the firstName or lastname or both with the JWTtoken
   * return response or error if error
   * @param {string} firstName 
   * @param {string} lastName 
   * @param {string} JWTtoken 
   * @returns 
   */
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