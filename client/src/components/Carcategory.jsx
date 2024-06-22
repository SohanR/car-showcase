import { useState } from "react";
import FullList from "./FullList";
import ShortList from "./ShortList";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Aos from "aos";

const Carcategory = () => {

  useEffect (() => {
    
    Aos.init(
    {duration: 900,}
    );
  }, []  )


  const [showAll, setShowAll] = useState(false);
  const handleshowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className=" " data-aos="zoom-in" >
      <div className="text-white text-4xl font-bold text-center pt-20" >
        
        Choose By Brands
        
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-8 gap-2 lg:gap-3 justify-center items-center w-full lg:w-[135vh] mx-auto mt-3 lg:mt-11 ">
        {showAll ? <ShortList /> : <FullList />}
      </div>

      <div className="text-center pt-6" onClick={handleshowAll}>
        <button className="  text-white bg-[#4178dc]  px-6 py-2 rounded ">
          {" "}
          See All Brands
        </button>
      </div>
    </div>
  );
};

export default Carcategory;
