import featureImg from "./../assets/img/features.png";
import mapSVG from "./../assets/img/map.svg";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from "aos";

const CarFeatures = () => {

  useEffect (() => {
    
    Aos.init(
    {duration: 900,}
    );
  }, []  )

  return (
    <section className="features section" data-aos="zoom-out" >
      <h2 className="section__title">More Features</h2>

      <div className="features__container container grid " data-aos="zoom-out">
        <div className="features__group">
          <img src={featureImg} alt="" className="features__img" />

          <div className="features__card features__card-1" data-aos="zoom-out-left" >
            <h3 className="features__card-title">800v</h3>
            <p className="features__card-description">
              Turbo <br /> Chargin
            </p>
          </div>

          <div className="features__card features__card-2" data-aos="zoom-out-right">
            <h3 className="features__card-title">350</h3>
            <p className="features__card-description">
              Km <br /> Range
            </p>
          </div>
          <div className="features__card features__card-3" data-aos="zoom-out-left">
            <h3 className="features__card-title">480</h3>
            <p className="features__card-description">
              Km <br /> Travel
            </p>
          </div>
        </div>
      </div>

      <img src={mapSVG} alt="" className="features__map" />
    </section>
  );
};

export default CarFeatures;
