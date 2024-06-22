import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { singleCar } from "../actions/carlist";
import SingleCar from "../components/SingleCar";

function CarPage() {
  const { id } = useParams();
  const [carData, setCarData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await singleCar(id);

        setCarData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching car data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(carData);
  return (
    <div>{carData && <SingleCar car={carData.car} loading={loading} />}</div>
  );
}

export default CarPage;
