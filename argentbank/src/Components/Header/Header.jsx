import Logo from '../../assets/argentBankLogo.png'
import { Link } from 'react-router-dom'
import '../../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
        <div>
            <nav className="main-nav">
                <Link className="main-nav-logo" to={'/'}>
                    <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                <div>
                    <FontAwesomeIcon icon={ faUserCircle } />
                    <Link className="main-nav-item" to={'/signin'}>
                     Sign In
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Header