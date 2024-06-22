import rmjLogo from "./../assets/img/rml2.svg";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from "aos";
import { Link } from "react-router-dom";



const About = () => {
  useEffect (() => {
    
    Aos.init(
    {duration: 900,}
    );
  }, []  )

  return (
    <section className="about section" id="about" data-aos="fade-right" >
      <div className="about__container container grid">
        <div className="about__group">
          <img src={rmjLogo} alt="websitelogo" className="about__img" />

          
        </div>

        <div className="about__data" data-aos="fade-left">
          <h2 className="section__title about__title">
            RMJ AUTOS <br /> Future Technology
          </h2>
          <p className="about__description w-full mx-auto  ">
            See the future with high-performance electric cars produced by
            renowned brands. They feature futuristic builds and designs with new
            and innovative platforms that last a long time.
          </p>

          <Link to="/aboutus" className="button">
            Know More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
