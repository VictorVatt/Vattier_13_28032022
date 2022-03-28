import Logo from '../../assets/argentBankLogo.png'
import '../../styles/Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
        <div>
            <nav className="main-nav">
                <a className="main-nav-logo" href="./index.html">
                    <img
                    className="main-nav-logo-image"
                    src={Logo}
                    alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <FontAwesomeIcon icon={ faUserCircle } />
                    <a className="main-nav-item" href="./sign-in.html">
                     Sign In
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default Header