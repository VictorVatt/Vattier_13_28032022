import Logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import '../../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserLogin } from '../../Utils/selectors'
import { logOut } from '../../Utils/reducers/userReducer'



function Header() {
    const connected = useSelector(selectUserLogin)
    const dispatch = useDispatch()
    return (
        <div>
            <nav className="main-nav">
                <Link className="main-nav-logo" to={'/'}>
                    <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div className='log-in-out'>
                    <FontAwesomeIcon icon={ faUserCircle } />
                    {connected 
                    ? 
                    <p className='main-nav-item' onClick={() => dispatch(logOut()) }>Log out</p> 
                    : 
                    <Link className="main-nav-item" to={"/signin"}>
                     Log In
                    </Link>}
                </div>
            </nav>
        </div>
    )
}

export default Header