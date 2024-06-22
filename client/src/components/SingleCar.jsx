import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { useScrollToTop } from "../hooks/useScrollToTop";
import LoaderComponent from "../pages/LoaderComponent";

const SingleCar = ({ car, loading }) => {
  const { title, carImages, carDetails, carFeatures } = car;

  useScrollToTop();

  return (
    <div>
      {loading ? (
        <LoaderComponent />
      ) : (
        <div className="flex flex-col justify-center max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row w-full pt-24 ">
            <div className="w-full">
              <Carousel autoPlay={false} interval={3000} infiniteLoop={true}>
                {Array.isArray(carImages) &&
                  carImages.map((image, index) => (
                    <div key={index}>
                      <img
                        className="max-w-[700px] rounded-lg max-h-[400px]"
                        src={image}
                        alt={`Slide ${index + 1}`}
                      />
                    </div>
                  ))}
              </Carousel>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
              <a
                href="tel:01770610006"
                className="btn text-white bg-gray-400 px-9 p-3 w-full lg:w-[70%] rounded-xl mb-3 text-center flex items-center gap-2 justify-center"
              >
                <MdCall className="text-2xl" /> Call us for price
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=+8801770610006"
                target="_blank"
                rel="noopener noreferrer"
                className="btn text-white bg-gray-400 px-9 p-3 w-full lg:w-[70%] rounded-xl mb-3 text-center flex items-center gap-2 justify-center"
              >
                <FaWhatsapp className="text-2xl" /> Contact with WhatsApp
              </a>
            </div>
          </div>

          <div className=" flex flex-col gap-3 px-4">
            <h2 className="text-2xl font-bold py-7">Details</h2>
            <div className="flex flex-row justify-between  border-b-2">
              <span>Title:</span>
              <span>{title}</span>
            </div>

            <div className="flex flex-row justify-between border-b-2 pt-4">
              <span>Fuel-Type:</span>
              <span>{carDetails.fuelType}</span>
            </div>

            <div className="flex flex-row justify-between border-b-2 pt-4">
              <span>Condition:</span>
              <span>{carDetails.model}</span>
            </div>
            <div className="flex flex-row justify-between border-b-2 pt-4">
              <span>Door:</span>
              <span>{carDetails.door}</span>
            </div>
            <div className="flex flex-row justify-between border-b-2 pt-4">
              <span>Model:</span>
              <span>{carDetails.model}</span>
            </div>
            <div className="flex flex-row justify-between border-b-2 pt-4">
              <span>Transmition:</span>
              <span>{carDetails.transmission}</span>
            </div>
            <div className="flex flex-row justify-between border-b-2 pt-4">
              <span>Mileage:</span>
              <span>{carDetails.mileage}</span>
            </div>
            <div className="flex flex-row justify-between border-b-2 pt-4">
              <span>Color:</span>
              <span>{carDetails.color}</span>
            </div>
            <div className="flex flex-row justify-between border-b-2 pt-4">
              <span>Make:</span>
              <span>{carDetails.make}</span>
            </div>
            <div className="flex flex-row justify-between border-b-2 pt-4">
              <span>Engine Size:</span>
              <span>{carDetails.engineSize}</span>
            </div>
            <div className="flex flex-row justify-between border-b-2 pt-4">
              <span>Drive:</span>
              <span>{carDetails.drive}</span>
            </div>
            <div className="flex flex-row justify-between border-b-2 pt-4">
              <span>Cylinder:</span>
              <span>{carDetails.cylinder}</span>
            </div>

            <div className="flex flex-row justify-between border-b-2 pt-4">
              <span>Year:</span>
              <span>{carDetails.year}</span>
            </div>
          </div>
          <div className=" flex flex-col gap-3 px-4">
            <h2 className="text-2xl font-bold pt-9">Features</h2>
            <div className="flex flex-row justify-between shadow-2xl border-b-2 pt-4">
              <span>Convenience</span>
              <span>
                {carFeatures?.convinience &&
                  carFeatures.convinience.map((item, index) => {
                    if (item && item.trim() !== "") {
                      return <li key={index}>{item}</li>;
                    }
                    return null;
                  })}
              </span>
            </div>
            <div className="flex flex-row justify-between  border-b-2 pt-4">
              <span>Entertainment</span>
              <span>
                {" "}
                {carFeatures?.entertainment &&
                  carFeatures.entertainment.map((item, index) => {
                    if (item && item.trim() !== "") {
                      return <li key={index}>{item}</li>;
                    }
                    return null;
                  })}
              </span>
            </div>
            <div className="flex flex-row justify-between  border-b-2 pt-4">
              <span>Safety</span>
              <span>
                {carFeatures?.safety &&
                  carFeatures.safety.map((item, index) => {
                    if (item && item.trim() !== "") {
                      return <li key={index}>{item}</li>;
                    }
                    return null;
                  })}
              </span>
            </div>
            <div className="flex flex-row justify-between  border-b-2 pt-4">
              <span>Interior</span>
              <span>
                {carFeatures?.interior &&
                  carFeatures.interior.map((item, index) => {
                    if (item && item.trim() !== "") {
                      return <li key={index}>{item}</li>;
                    }
                    return null;
                  })}
              </span>
            </div>
            <div className="flex flex-row justify-between  border-b-2 pt-4">
              <span>Exterior</span>
              <span>
                {carFeatures?.exterior &&
                  carFeatures.exterior.map((item, index) => {
                    if (item && item.trim() !== "") {
                      return <li key={index}>{item}</li>;
                    }
                    return null;
                  })}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleCar;
