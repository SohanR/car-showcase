import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CarTable from '../Components/CarTable';
import CarAddForm from '../Components/CarAddForm';
import CarPendingtable from '../Components/CarPendingtable';

function Cars() {
  const [cars, setCars] = useState([]);
  const [activeTab, setActiveTab] = useState('approved');
  const [tabCars, setTabCars] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    axios.get('http://localhost:4000/api/admin/get-cars', { withCredentials: true })
      .then((response) => {
        setCars(response.data);
        setLoading(false); // Set loading to false when data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  useEffect(() => {
    const filteredCars = cars.filter((car) => car.status === activeTab);
    setTabCars(filteredCars);
  }, [cars, activeTab]);

  const handleTabCar = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className='w-full min-h-screen bg-gray-300'>
      <div className='flex flex-row bg-gray-300 justify-between items-center p-4 py-5'>
        <div className="w-full flex flex-row gap-3">
          <div
            className={`tab  tab2 approved ${activeTab === "approved" ? "btn btn-outline btn-active text-purple-500 border-teal-300 border-2" : "btn btn-outline  btn-inactive text-purple-500"}`}
            onClick={() => handleTabCar("approved")}
          >
            Total Cars
          </div>
          <div
            className={`tab  tab2 pending ${activeTab === "pending" ? "btn btn-outline btn-active text-purple-500" : "btn btn-outline btn-inactive text-purple-500"}`}
            onClick={() => handleTabCar("pending")}
          >
            Requested Cars
          </div>
        </div>
        <CarAddForm />
      </div>
      {loading ? ( // Check loading state
        <div className="text-center mt-5"><span className="loading loading-ring loading-lg"></span></div>
      ) : (
      
      <div className="overflow-x-auto bg-gray-200 shadow-xl p-5 w-full">
  <table className="table w-full">
    <thead>
      <tr className="text-black font-semibold text-lg">
        <th>Title</th>
        <th>Make</th>
        <th>Condition</th>
        <th>Model</th>
        <th className="text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      {activeTab === "approved" ? (
        tabCars.map((car) => <CarTable car={car} key={car._id} />)
      ) : (
        tabCars.map((car) => <CarPendingtable car={car} key={car._id} />)
      )}
    </tbody>
  </table>
</div>  )}
    </div>
  );
}

export default Cars;
