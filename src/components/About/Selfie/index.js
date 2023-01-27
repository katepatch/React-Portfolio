import "./index.scss";
import pic from '../../../assets/images/selfie.png'


console.log(pic);

const Selfie = () => {
  return (
    <div className="selfie-container">
      <img
        className="selfie-pic"
        src={pic}
        alt="Me trying to show off my curly hair"
      />
      <p>This is me.  After a day in the ocean.</p>
    </div>
  );
};

export default Selfie;
