import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/katelogo1.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="logosub"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color ="#d62828" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color ="#d62828" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color ="#d62828" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/kate-patch-791126b1/">
                    <FontAwesomeIcon icon={faLinkedin} color="#d62828" />
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/katepatch">
                    <FontAwesomeIcon icon={faGithub} color="#d62828" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar