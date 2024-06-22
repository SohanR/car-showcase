import offerBG from "./../assets/img/offer-bg.png";
import offer from "./../assets/img/offer.png";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

const OfferCTA = () => {
  useEffect(() => {
    Aos.init({duration: 900,});
  }, []);
  return (
    <section className="offer section">
      <div className="offer__container container grid">
        <img src={offerBG} alt="" className="offer__bg" />

        <div className="offer__data ">
          <h2 className="section__title offer__title ">
            Do You Want To Receive <br /> Special Offers?
          </h2>

          <p className="offer__description w-full ">
            Be the first to receive all the information about our products and
            new cars by email by subscribing to our mailing list.
          </p>
          <div className="pr-[30px]">
            <a href="#" className="button">
              Subscribe Now
            </a>
          </div>
        </div>

        <img
          src={offer}
          alt=""
          className="offer__img"
          data-aos="zoom-in-left"
        />
      </div>
    </section>
  );
};

export default OfferCTA;
