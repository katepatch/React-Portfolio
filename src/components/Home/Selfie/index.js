import './index.scss';
import Selfie from '../../../assets/images/selfie.jpeg';


Selfie = () => {


    return (
      <div className="selfie-container">
        <img className="solid-selfie" src={Selfie} alt="Me trying to show off my curly hair" width='400' height='609' />
          <p>This is me. After a day in the ocean.</p>
      </div>
    );
}

export default Selfie