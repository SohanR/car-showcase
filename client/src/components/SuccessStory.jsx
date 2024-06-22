import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { successGet } from "../actions/carlist";
import "aos/dist/aos.css";
import Aos from "aos";

function SuccessStory() {
  const [story, setStory] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
      Aos.init({duration: 900});
    getSuccess();
  }, []);

  const getSuccess = async () => {
    try {
      const response = await successGet();
      setStory(response || []);
    } catch (error) {
      console.error('Error fetching Story: ', error);
    }
  };

  const handleViewAll = () => {
    setShowAll(true);
  };

  const handleLessAll = () => {
    setShowAll(false);
  };
  
  return (
    <div className="max-w-6xl mx-auto ">
      <div className="w-[50vh] mx-auto">
        <h2 className="text-center text-2xl py-3 pt-6 ">Our Success Story</h2>
        <p className="text-center py-2 pb-6 pr-[10px] pl-[10px]">
          See Our Success Stories, The Prove of excellence
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-14 pb-10">
        {story.slice(0, showAll ? story.length : 3).map((d) => (
          <div key={d._id} className="p-2 bg-gray-900 rounded-lg" data-aos="zoom-in-right">
            <img
              className="w-full h-[30vh] rounded-xl hover:scale-110 transition duration-300 ease-in-out"
              src={d.image}
              alt=""
            />
            <div className="my-1 px-2 text-center pt-3 pb-3">
              <h2 className="pb-3 text-center">{d.title}</h2>
              <h5 className="text-md text-justify">{d.description}</h5>
            </div>
          </div>
        ))}
      </div>
      {!showAll ? (
        <div className="text-center ">
          <button
            onClick={handleViewAll}
            className="text-white bg-[#4178dc] px-6 py-2 rounded"
          >
            View All
          </button>
        </div>
      ) : (
        <div className="text-center ">
          <button
            onClick={handleLessAll}
            className="text-white bg-[#4178dc] px-6 py-2 rounded"
          >
            Less All
          </button>
        </div>
      )}
    </div>
  );
}

export default SuccessStory;
