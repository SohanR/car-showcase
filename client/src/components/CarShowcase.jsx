import { useEffect, useRef } from "react";
import popular1 from "./../assets/img/popular1.png";
import popular2 from "./../assets/img/popular2.png";
import popular3 from "./../assets/img/popular3.png";
import popular4 from "./../assets/img/popular4.png";
import popular5 from "./../assets/img/popular5.png";
import Swiper from "swiper";
import "swiper/css";
import "aos/dist/aos.css";
import Aos from "aos";



const CarShowcase = () => {

  useEffect (() => {
    
    Aos.init(
    {duration: 900,}
    );
  }, []  )
  const swipperRef = useRef(null);

  useEffect(() => {
    if (swipperRef.current) {
      let swiperPopular = new Swiper(".popular__container", {
        loop: true,
        spaceBetween: 24,
        slidesPerView: 1,
        grabCursor: true,

        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },

        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 48,
          },
        },
      });
    }
  }, []);

  return (
    <section className="popular section" id="popular">
      <h2 className="section__title">
        Choose Your Dream Car <br /> of Any Brand
      </h2>
      <div ref={swipperRef} className="popular__container container swiper" data-aos="zoom-in" >
        <div className="swiper-wrapper w-[25vh] px-3" >
          <article className="popular__card  swiper-slide">
            <div className="shapeX shape__smaller"></div>

            <h1 className="popular__title">Porsche</h1>
            <h3 className="popular__subtitle">Turbo S</h3>

            <img src={popular1} alt="" className="popular__img" />

            <div className="popular__data"  >
              <div className="popular__data-group">
                <i className="ri-dashboard-2-line"></i> 3.7 sec
              </div>
              <div className="popular__data-group">
                <i className="ri-exchange-funds-line"></i> 356 Km/h
              </div>
              <div className="popular__data-group">
                <i className="ri-charging-pile-2-line"></i> Electric
              </div>
            </div>

            <h3 className="popular__price">$175,900</h3>
            <button className="button popular__button">
              <i className="ri-shopping-bag-2-line"></i>
            </button>
          </article>

          <article className="popular__card swiper-slide">
            <div className="shapeX shape__smaller"></div>

            <h1 className="popular__title">Porsche</h1>
            <h3 className="popular__subtitle">Taycan</h3>

            <img src={popular2} alt="" className="popular__img" />

            <div className="popular__data">
              <div className="popular__data-group">
                <i className="ri-dashboard-2-line"></i> 3.7 sec
              </div>
              <div className="popular__data-group">
                <i className="ri-exchange-funds-line"></i> 356 Km/h
              </div>
              <div className="popular__data-group">
                <i className="ri-charging-pile-2-line"></i> Electric
              </div>
            </div>

            <h3 className="popular__price">$114,900</h3>
            <button className="button popular__button">
              <i className="ri-shopping-bag-2-line"></i>
            </button>
          </article>

          <article className="popular__card swiper-slide">
            <div className="shapeX shape__smaller"></div>

            <h1 className="popular__title">Porsche</h1>
            <h3 className="popular__subtitle">Turbo S Cross</h3>

            <img src={popular3} alt="" className="popular__img" />

            <div className="popular__data">
              <div className="popular__data-group">
                <i className="ri-dashboard-2-line"></i> 3.7 sec
              </div>
              <div className="popular__data-group">
                <i className="ri-exchange-funds-line"></i> 356 Km/h
              </div>
              <div className="popular__data-group">
                <i className="ri-charging-pile-2-line"></i> Electric
              </div>
            </div>

            <h3 className="popular__price">$150,900</h3>
            <button className="button popular__button">
              <i className="ri-shopping-bag-2-line"></i>
            </button>
          </article>

          <article className="popular__card swiper-slide">
            <div className="shapeX shape__smaller"></div>

            <h1 className="popular__title">Porsche</h1>
            <h3 className="popular__subtitle">Boxster 718</h3>

            <img src={popular4} alt="" className="popular__img" />

            <div className="popular__data">
              <div className="popular__data-group">
                <i className="ri-dashboard-2-line"></i> 3.7 sec
              </div>
              <div className="popular__data-group">
                <i className="ri-exchange-funds-line"></i> 356 Km/h
              </div>
              <div className="popular__data-group">
                <i className="ri-charging-pile-2-line"></i> Electric
              </div>
            </div>

            <h3 className="popular__price">$125,900</h3>
            <button className="button popular__button">
              <i className="ri-shopping-bag-2-line"></i>
            </button>
          </article>

          <article className="popular__card swiper-slide">
            <div className="shapeX shape__smaller"></div>

            <h1 className="popular__title">Porsche</h1>
            <h3 className="popular__subtitle">Cayman</h3>

            <img src={popular5} alt="" className="popular__img" />

            <div className="popular__data">
              <div className="popular__data-group">
                <i className="ri-dashboard-2-line"></i> 3.7 sec
              </div>
              <div className="popular__data-group">
                <i className="ri-exchange-funds-line"></i> 356 Km/h
              </div>
              <div className="popular__data-group">
                <i className="ri-charging-pile-2-line"></i> Electric
              </div>
            </div>

            <h3 className="popular__price">$128,900</h3>
            <button className="button popular__button">
              <i className="ri-shopping-bag-2-line"></i>
            </button>
          </article>
        </div>

        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default CarShowcase;
