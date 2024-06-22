import { IoCarSportSharp } from "react-icons/io5";
import { RiFacebookFill, RiWhatsappFill } from "react-icons/ri";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer section">
      <div className="shapeX shape__big"></div>
      <div className="shapeX shape__small"></div>

      <div className="footer__container container grid">
        <div className="footer__content">
          <Link to="/" className="footer__logo">
            <IoCarSportSharp />
            RMJ AUTOS
          </Link>
          <p className="footer__description">
            We offer the best cars of <br />
            the most recognized brands in <br />
            the world.
          </p>
        </div>

        <div className="footer__content">
          <h3 className="footer__title pb-2">Company </h3>

          <ul className="footer__links">
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/Cars" className="footer__links">
                Cars
              </Link>
            </li>
            <li>
              <Link to="/SuccessStory" className="footer__links">
                Success Story
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title pb-2">Information </h3>
          <ul className="footer__links">
            <li>
              <Link to="/login" className="footer__links">
                Join As Member
              </Link>
            </li>

            <li>
              <Link to="/Contact" className="footer__links">
                Contact us
              </Link>
            </li>
            <li>
              <a href="#" className="footer__links">
                Services
              </a>
            </li>
            <li>
              <Link to="/policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/termscondition">Terms & Condition </Link>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title  "> Follow us </h3>

          <ul className="flex flex-row gap-2">
           
             <a
              href="https://www.facebook.com/rmjautos700?mibextid=LQQJ4d"
              className="home__social-icon"
            ><RiFacebookFill/>
             
            </a>
          
              <a
              href="https://api.whatsapp.com/send?phone=01770610006"
              className="home__social-icon"
            ><RiWhatsappFill />
             
            </a> 
            
          </ul>
        </div>
      </div>
      <span className="footer__copy">
        &#169;{" "}
        <a target="_blank" href="#" className="footer__dev-link">
          RMJ AUTOS.
        </a>
        All rigths reserved, Developed by{" "}
        <a target="_blank" rel="noreferrer" href="https://dotpotit.com">
          DOTPOT IT
        </a>
      </span>
    </footer>
  );
};

export default Footer;
