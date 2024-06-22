import {
  RiDashboard2Line,
  RiFlashlightFill,
  RiTempColdLine,
} from "react-icons/ri";
import home5 from "./../assets/img/home.png";
import Social from "./Social";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    Aos.init({ });
  }, []);
  return (
    <section className="home section" id="home">
      <div className="shapeX shape__big"></div>

      <div className="shapeX shape__small"></div>

      <div className="home__container container grid">
        <div className="home__data">
          <h1 className="home__title">Pick Your Best Car</h1>
          <h2 className="home__subtitle">Ferrari 458</h2>
          <h3 className="home__elec">
            <RiFlashlightFill />
            RELENTLESS FORCE
          </h3>
        </div>

        <img src={home5} alt="home" className="home__img"  />
        <div className="home__car">
          <div className="home__car-data">
            <div className="home__car-icon">
              <RiTempColdLine />
            </div>
            <h2 className="home__car-number">3.0s</h2>
            <h3 className="home__car-name">0-100 km/h</h3>
          </div>

          <div className="home__car-data">
            <div className="home__car-icon">
              <RiDashboard2Line />
            </div>
            <h2 className="home__car-number">419</h2>
            <h3 className="home__car-name">POWER (KW)</h3>
          </div>
          <div className="home__car-data">
            <div className="home__car-icon">
              <RiFlashlightFill />
            </div>
            <h2 className="home__car-number">325 km/h</h2>
            <h3 className="home__car-name">MAX. SPEED</h3>
          </div>
        </div>

        <a href="#" className="home__button">
          START
        </a>
      </div>

      <Social />
    </section>
  );
};

export default Home;
