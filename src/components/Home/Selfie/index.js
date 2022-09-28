import "./index.scss";
import Selfie from "../../../assets/images/selfie.png";

Selfie = () => {
  return (
    <div className="selfie-container">
      <img
        className="selfie-pic"
        src={Selfie}
        alt="Me trying to show off my curly hair"
      />
      <p>This is me. After a day in the ocean.</p>
    </div>
  );
};

export default Selfie;
