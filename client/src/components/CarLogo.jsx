import logo1 from "./../assets/img/logo1.png";
import logo2 from "./../assets/img/logo2.png";
import logo3 from "./../assets/img/logo3.png";
import logo4 from "./../assets/img/logo4.png";
import logo5 from "./../assets/img/logo5.png";

const CarLogo = () => {
  return (
    <section className="logos section">
      <div className="logos__container container grid">
        <div className="logos__content">
          <img src={logo1} alt="" className="logos__img" />
        </div>
        <div className="logos__content">
          <img src={logo2} alt="" className="logos__img" />
        </div>
        <div className="logos__content">
          <img src={logo3} alt="" className="logos__img" />
        </div>
        <div className="logos__content">
          <img src={logo3} alt="" className="logos__img" />
        </div>
        <div className="logos__content">
          <img src={logo4} alt="" className="logos__img" />
        </div>
        <div className="logos__content">
          <img src={logo5} alt="" className="logos__img" />
        </div>
      </div>
    </section>
  );
};

export default CarLogo;
