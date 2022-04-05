import Logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import '../../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { selectFirstName, selectUserLogin } from '../../Utils/selectors'
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../Utils/reducers/userReducer'



function Header() {
    const connected = useSelector(selectUserLogin)
    const firstName = useSelector(selectFirstName)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    let handleLogOut = () => {
        dispatch(logOut()) 
        sessionStorage.clear()
        navigate("/signin")
    }
    return (
        <div>
            <nav className="main-nav">
                <Link className="main-nav-logo" to={'/'}>
                    <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div className='log-in-out'>
                    {connected 
                    ?
                    <div className='logged-container'> 
                        <Link className='main-nav-item' to={"/profile"}>{firstName}</Link>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} className="logout-icon"/>
                        <p className='main-nav-item' onClick={handleLogOut}>Log out</p> 
                    </div>
                    : 
                    <div>
                        <FontAwesomeIcon icon={ faUserCircle } /> 
                        <Link className="main-nav-item" to={"/signin"}>
                        Log In
                        </Link>
                    </div>}
                </div>
            </nav>
        </div>
    )
}

export default Header