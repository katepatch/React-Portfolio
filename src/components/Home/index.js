import LogoTitle from '../../assets/images/ktitle.png';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>Hiya, <br /> My name is
                <img src={LogoTitle} alt="developer" />
                ate
                <br />
                web developer
                </h1>
                <h2>Full Stack</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>

        </div>
    )
}

export default Home