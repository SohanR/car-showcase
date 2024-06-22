import { Link } from 'react-router-dom';

function CarCard({ car }) {
  const { _id, carImages, title, carDetails } = car;

  // Extracting the URL of the first image from the carImages object
  const firstImageUrl = carImages ? Object.values(carImages)[0] : '';

  return (
    <div className="p-4  bg-gray-600 rounded-lg">
      <img
        className="w-[50vh] h-[30vh] rounded-xl hover:scale-110 transition duration-300 ease-in-out"
        src={firstImageUrl} 
        alt=""
      />

      <div className="flex flex-row items-center justify-between pt-3 px-2">
        <div className="my-1 px-2 text-start">
          <h2 className='text-lg'>{title}</h2>
          <p className='text-md'>{carDetails?.condition}</p>
        </div>

        {/* Updated Link component to pass the ID */}
        <Link
          to={`/carPage/${_id}`} // Passing ID as a parameter in the URL
          className="text-white border-b-rounded btn-sm bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-4 py-1.5 text-center me-2 mb-2 border-b-2"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default CarCard;
