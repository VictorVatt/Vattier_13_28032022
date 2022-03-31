import { useState } from "react"
import userLogIn from "../../Api/ApiPorvider"
import "../../styles/SignInModal.css"

function SignInModal() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => { 
      e.preventDefault()
      setError('')

      if(userName.length < 3 || password.length < 3 ) {
        return setError("Veuillez renseigner un email et un mdp valide")
      }
      const response = await userLogIn(userName, password)

      setPassword('')
      setUserName('')
      console.log(response.data.body.token)

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