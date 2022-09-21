import './index.scss'
import { Link } from 'react-router-dom'
import LogoS from '../../assets/images/katelogo1.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="logosub"/>
        </Link>
        
    </div>
)

export default Sidebar