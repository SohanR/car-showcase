import { useEffect, useState } from 'react';

import { myCarList } from '../actions/carlist';
import CarCard from '../components/CarCard';

function MyCarList() {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    try {
      const res = await myCarList();
      setUserData(res.data);
    } catch (error) {
      console.error("Error fetching user data: ", error);
      // Handle the error - for example, you can set userData to an empty array or display an error message.
      setUserData([]);
    }
  };
console.log(userData)
  return (
  <div className='pt-32 max-w-6xl mx-auto'>
    <h2 className='text-center text-xl pb-5'>My Car List</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3">
     {userData.map(data=><CarCard car={data} key={data._id} />)}
    </div>
  </div>
  );
}

export default MyCarList;
