import { useEffect, useState } from "react";
import CarCard from "../components/CarCard";
import CarSearch from "../components/CarSearch";
import { carList } from "../actions/carlist";
import LoaderComponent from "./LoaderComponent";

function CarList() {
  const [carData, setCarData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchCar,setSearchCar]=useState([]);
  const [searchClick, setSearchClick] = useState(false);

  useEffect(() => {
    fetchCar();
  }, []);

  const fetchCar = async () => {
    try {
      const response = await carList();
      setCarData(response.data);
      setLoading(false); 
    } catch (error) {
      console.error(error);
      setLoading(false); 
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-16">
      <CarSearch setSearchCar={setSearchCar} setSearchClick={setSearchClick}/>

      <h1 className="text-white text-3xl pb-5 pt-10 ">{searchClick? <span>{searchCar.length} cars found</span> : <span>All Cars List</span>} </h1>
      {loading ? ( 
        <LoaderComponent/>
      ) : ( 
        <div className="pt-3 grid grid-cols-1 lg:grid-cols-4 px-2 lg:px-20">
          {
            searchClick ? (
              searchCar.map((car) => (
                <CarCard car={car} key={car._id} />
              ))
            ): (carData.map((car) => (
              <CarCard car={car} key={car._id} />
            )))
          }
        </div>
      )}
    </div>
  );
}

export default CarList;
