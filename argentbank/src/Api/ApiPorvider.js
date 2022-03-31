import axios from "axios"


async function userLogIn(email, password) {
    axios.post('http://localhost:3001/api/v1/user/login', {
        "email": email,
        "password": password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

}

export default userLogIn
