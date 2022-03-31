import { useState } from 'react'
import { useDispatch } from 'react-redux'
import userLogIn from "../../Api/ApiPorvider"
import "../../styles/SignInModal.css"
import { logIn } from '../../Utils/reducers/userReducer'

function SignInModal() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = async (e) => { 
      e.preventDefault()
      setError('')

      if(userName.length === 0 || password.length === 0 ) {
        return setError("Veuillez renseigner un email et un mdp valide")
      }
      const response = await userLogIn(userName, password)
        if (response.data.status !== 200) {
          console.log(response.data)
        }
      setPassword('')
      setUserName('')
      dispatch(logIn(response.data.body.token))

    }

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