import React from "react";
import aboutus from "../assets/img/about us.svg";
import { useScrollToTop } from "../hooks/useScrollToTop";

const AboutUs = () => {
  useScrollToTop();
  return (
    <div className="py-10 lg:py-20 font-poppins dark:bg-gray-800">
      <div className="max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="lg:max-w-md">
              <div className="px-4 pl-4 mb-6 border-l-4 border-blue-500">
                <span className="text-sm pt-5  text-white uppercase dark:text-gray-400">
                  Who we are?
                </span>
                <h1 className="mt-2 pt-3 text-3xl font-black text-white md:text-5xl dark:text-gray-300">
                  About Us
                </h1>
              </div>
              <p className="px-4 mb-10 md:w-full text-sm lg:w-full leading-6 text-white dark:text-gray-400">
                Welcome to RMJ, where automotive excellence meets a legacy of
                precision and innovation. At RMJ, were not just crafting cars;
                we are engineering experiences that redefine the very essence of
                driving. Founded on a rich heritage of passion for automobiles,
                RMJ has consistently set the benchmark for performance, design,
                and cutting-edge technology in the automotive industry.
                <br />
                <br />
                Our journey is rooted in a commitment to pushing boundaries and
                challenging the status quo. At the core of RMJ is a team of
                dedicated experts who share an unwavering commitment to crafting
                vehicles that go beyond transportation; they embody an
                exhilarating lifestyle.
              </p>

              <div className="flex mb-4">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-file-earmark-code"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2.5h-2z" />
                    <path d="M8.646 6.646a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L10.293 9 8.646 7.354a.5.5 0 0 1 0-.708zm-1.292 0a.5.5 0 0 0-.708 0l-2 2a.5.5 0 0 0 0 .708l2 2a.5.5 0 0 0 .708-.708L5.707 9l1.647-1.646a.5.5 0 0 0 0-.708z" />
                  </svg>
                </span>
                <div className="pb-8">
                  <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                    Contact
                  </h2>
                  <p className="text-base leading-loose text-gray-300 dark:text-gray-400">
                    +8801770610006 ~ +8801970610006
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-file-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z" />
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                  </svg>
                </span>
                <div className="pb-8">
                  <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                    Follow us on Facebook
                  </h2>
                  <a
                    href="https://www.facebook.com/rmjautos700?mibextid=LQQJ4d"
                    className="text-base leading-loose text-gray-300 dark:text-gray-400"
                  >
                    RMJ AUTOS FACEBOOK PAGE
                  </a>
                </div>
              </div>
              <div className="flex mb-4">
                <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-blue-500 rounded dark:bg-blue-500 dark:text-gray-100 text-gray-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 bi bi-bank2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z"></path>
                  </svg>
                </span>
                <div className="pb-10">
                  <h2 className="mb-4 text-xl font-bold leading-tight dark:text-gray-300 md:text-2xl">
                    Address
                  </h2>
                  <p className="text-base leading-loose text-gray-300 dark:text-gray-400">
                    HOUSE 4, ROAD 1 PALPARA, RANGPUR, 5400
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                
                {/* Repeat the same structure for the other three grid items */}
              </div>
            </div>
          </div>
          <div className="w-full mb-10 lg:w-1/2 lg:mb-0">
            <img
              src={aboutus}
              alt=""
              className="object-cover w-full h-64 rounded-lg md:h-96 lg:h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
