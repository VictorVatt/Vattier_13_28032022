import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import ApiProvider from '../../Api/ApiPorvider'
import "../../styles/SignInModal.css"
import { logIn } from '../../Utils/reducers/userReducer'

function SignInModal() {
    const [userName, setUserName] = useState('') // set as local state the username / password / error / and the remember
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [rememberMe, setRemenberMe ] = useState(false)

    const dispatch = useDispatch() 
    let navigate = useNavigate()
    
    const handleSubmit = async (e) => {  // function called with the form submit
      e.preventDefault() // prevent the default behavior of the form
      setError('') 

      if(userName.length === 0 || password.length === 0 ) { // if no value in imputs don't call the ApiProvider and return a visible error message 
        return setError("Veuillez renseigner un email et un mdp valide")
      }
      const response = await new ApiProvider().userLogIn(userName, password, rememberMe) // call the userLogin method from ApiProvider to retrive JWTtoken
        if (response.status !== 200) {
          setError("Mot de passe ou email inconnu") // set an error message if error
        }
      setPassword('')
      setUserName('')
      dispatch(logIn(response.data.body.token)) // dispatch the token in the global redux state
      navigate('/profile') // redirect to /profile
    }
    useEffect(() => {
      localStorage.setItem("remenberMe", JSON.stringify(rememberMe)) // set in the local storage the rememberMe
    })


    return (
       <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              value={userName} 
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="input-remember">
            <input 
              type="checkbox" 
              id="remember-me"
              onChange={() => setRemenberMe(!rememberMe)}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type="submit" className="sign-in-button">Sign In</button>
          <p className="error-message">{error}</p>
        </form>
      </section>
    )
}

export default SignInModal