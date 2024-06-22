/* eslint-disable no-constant-condition */
import { useState, useEffect } from "react";
import FilterInput from "./FilterInput";
import Aos from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import {
  carList,
  newCarList,
  reconditionCarList,
  useedCarList,
} from "../actions/carlist";
import CarCard from "./CarCard";
import LoaderComponent from "../pages/LoaderComponent";

const FilterSearch = () => {
  const [showAllStatusContent, setShowAllStatusContent] = useState(true);
  const [showNewContent, setShowNewContent] = useState(false);
  const [showReconditionContent, setShowReconditionContent] = useState(false);
  const [showUsedContent, setShowUsedContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 900 });
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);

    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const handleWindowSizeChange = () => {
    setIsMobile(window.innerWidth <= 768); // Set breakpoint for mobile view
  };
  const toggleAllStatusContent = () => {
    setShowAllStatusContent(true);
    setShowNewContent(false);
    setShowReconditionContent(false);
    setShowUsedContent(false);
    setIsSearch(false);
    setLoading(false);
  };

  const toggleNewContent = () => {
    setShowNewContent(true);
    setShowAllStatusContent(false);
    setShowReconditionContent(false);
    setShowUsedContent(false);
    setIsSearch(false);
    setLoading(false);
  };

  const toggleReconditionContent = () => {
    setShowReconditionContent(true);
    setShowAllStatusContent(false);
    setShowNewContent(false);
    setShowUsedContent(false);
    setIsSearch(false);
    setLoading(false);
  };

  const toggleUsedContent = () => {
    setShowReconditionContent(false);
    setShowAllStatusContent(false);
    setShowNewContent(false);
    setShowUsedContent(true);
    setIsSearch(false);
    setLoading(false);
  };

  const [allCar, setAllCar] = useState([]);
  const [reconditionCar, setReconditionCar] = useState([]);
  const [newCar, setNewCar] = useState([]);
  const [usedCar, setUsedCar] = useState([]);
  const [searchCar, setSearchCar] = useState([]);

  useEffect(() => {
    fetchAllCar();
    fetchReconditionCar();
    fetchNewCar();
    fetchUsedCar();
  }, []);

  const fetchAllCar = async () => {
    try {
      const response = await carList();
      setAllCar(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchReconditionCar = async () => {
    try {
      const response = await reconditionCarList();
      setReconditionCar(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchNewCar = async () => {
    try {
      const response = await newCarList();
      setNewCar(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchUsedCar = async () => {
    try {
      const response = await useedCarList();
      setUsedCar(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {console.log("loading ", loading)}
      <div
        className="text-[#C9D2E3] w-full mx-auto text-center  py-2 "
        data-aos="fade-up"
      >
        <h2 className="text-2xl lg:text-5xl font-bold">Find Your Next Match</h2>
        <p className="text-xs lg:text-sm pt-2">
          Find the right price, dealer, and advice.
        </p>

        <div className="w-full flex justify-center px-4 pt-3 lg:pt-8">
          <div className="flex flex-row gap-1">
            <button
              className={`btn bg-[#202f3d79] text-xs lg:text-lg text-[#C9D2E3] p-2 px-5 rounded-t-lg border-t-orange-400 ${
                showAllStatusContent ? "bg-[#dee5ec79] text-[#C9D2E3]" : ""
              }`}
              onClick={toggleAllStatusContent}
            >
              All Status
            </button>
            <button
              className={`btn bg-[#202f3d79] text-xs lg:text-lg text-[#C9D2E3] p-2 px-5 rounded-t-lg border-t-orange-400 ${
                showNewContent ? "bg-[#dee5ec79] text-[#C9D2E3]" : ""
              }`}
              onClick={toggleNewContent}
            >
              New
            </button>
            <button
              className={`btn bg-[#202f3d79] text-xs lg:text-lg text-[#C9D2E3] p-2 px-5 rounded-t-lg border-t-orange-400 ${
                showReconditionContent ? "bg-[#dee5ec79] text-[#C9D2E3]" : ""
              }`}
              onClick={toggleReconditionContent}
            >
              Recondition
            </button>
            <button
              className={`btn bg-[#202f3d79] text-xs lg:text-lg text-[#C9D2E3] p-2 px-5 rounded-t-lg border-t-orange-400 ${
                showUsedContent ? "bg-[#dee5ec79] text-[#C9D2E3]" : ""
              }`}
              onClick={toggleUsedContent}
            >
              Used
            </button>
          </div>
        </div>
        <div className="w-full flex justify-center items-center">
          <div className="w-full lg:w-[135vh] ">
            {showAllStatusContent && (
              <FilterInput
                setSearchCar={setSearchCar}
                setShowAllStatusContent={setShowAllStatusContent}
                setShowNewContent={setShowNewContent}
                setShowReconditionContent={setShowReconditionContent}
                setShowUsedContent={setShowUsedContent}
                setIsSearch={setIsSearch}
                setLoading={setLoading}
              />
            )}
            {showNewContent && (
              <FilterInput
                setSearchCar={setSearchCar}
                setShowAllStatusContent={setShowAllStatusContent}
                setShowNewContent={setShowNewContent}
                setShowReconditionContent={setShowReconditionContent}
                setShowUsedContent={setShowUsedContent}
                setIsSearch={setIsSearch}
                setLoading={setLoading}
              />
            )}
            {showReconditionContent && (
              <FilterInput
                setSearchCar={setSearchCar}
                setShowAllStatusContent={setShowAllStatusContent}
                setShowNewContent={setShowNewContent}
                setShowReconditionContent={setShowReconditionContent}
                setShowUsedContent={setShowUsedContent}
                setIsSearch={setIsSearch}
                setLoading={setLoading}
              />
            )}
            {showUsedContent && (
              <FilterInput
                setSearchCar={setSearchCar}
                setShowAllStatusContent={setShowAllStatusContent}
                setShowNewContent={setShowNewContent}
                setShowReconditionContent={setShowReconditionContent}
                setShowUsedContent={setShowUsedContent}
                setIsSearch={setIsSearch}
                setLoading={setLoading}
              />
            )}

            {isSearch ? (
              <>
                <FilterInput
                  setSearchCar={setSearchCar}
                  setShowAllStatusContent={setShowAllStatusContent}
                  setShowNewContent={setShowNewContent}
                  setShowReconditionContent={setShowReconditionContent}
                  setShowUsedContent={setShowUsedContent}
                  setIsSearch={setIsSearch}
                  setLoading={setLoading}
                />
                {loading ? (
                  <div style={{ margin: "10% 10% 10% 35%" }}>
                    <LoaderComponent />
                  </div>
                ) : (
                  <>
                    <h1 className="text-white text-3xl pb-5 pt-10 ">
                      {<span>{searchCar.length} cars found</span>}
                    </h1>
                    <div className="pt-3 grid grid-cols-1 lg:grid-cols-3 px-2 lg:px-20">
                      {searchCar.map((ca) => (
                        <CarCard key={ca._id} car={ca} />
                      ))}
                    </div>
                  </>
                )}
              </>
            ) : (
              <Swiper
                spaceBetween={30}
                freeMode={true}
                slidesPerView={isMobile ? 1 : 3} // Show 1 slide on mobile, 3 on larger screens
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper pb-10 flex justify-center mt-[30px] lg:mt-[70px]"
              >
                {showAllStatusContent &&
                  allCar.map((ca) => (
                    <SwiperSlide key={ca._id}>
                      <CarCard car={ca} />
                    </SwiperSlide>
                  ))}

                {showReconditionContent &&
                  reconditionCar.map((ca) => (
                    <SwiperSlide key={ca._id}>
                      <CarCard car={ca} />
                    </SwiperSlide>
                  ))}

                {showNewContent &&
                  newCar.map((ca) => (
                    <SwiperSlide key={ca._id}>
                      <CarCard car={ca} />
                    </SwiperSlide>
                  ))}

                {showUsedContent &&
                  usedCar.map((ca) => (
                    <SwiperSlide key={ca._id}>
                      <CarCard car={ca} />
                    </SwiperSlide>
                  ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSearch;
