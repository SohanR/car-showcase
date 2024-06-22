import React, { useState } from 'react';
import { carGetById } from '../Actions/car';

function CarView({ id }) {
  const [car, setCar] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCarDetails = async (e) => {
    e.preventDefault();
    setIsModalOpen(true);

    const response = await carGetById(id);
    setCar(response.car);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const firstImageUrl = car?.carImages ? car.carImages[0] : '';


  return (
    <div>
      <button className="btn btn-outline" onClick={handleCarDetails}>
        View
      </button>
      {isModalOpen && Object.keys(car).length > 0 && (
        <dialog id="my_modal_2" className="modal" open>
          <div className="modal-box  max-w-3xl">
         
            <div className="card lg:card-side bg-base-100 ">
              <figure>
                <img className='w-full h-auto' src={firstImageUrl} alt="Album" />
              </figure>
              <div className="card-body w-full">
                <h2 className="card-title">{car?.title}</h2>
                <p>Make : {car?.carDetails?.make}</p>
                <p>Model : {car?.carDetails?.model}</p>
                <p>Mileage : {car?.carDetails?.mileage}</p>
                <p>Engine Size : {car?.carDetails?.engineSize}</p>
                <p>Door : {car?.carDetails?.door}</p>
                <p>Condition : {car?.carDetails?.condition}</p>
              </div>
            </div>
            <button className='btn btn-circle absolute transform -translate-y-100 right-2 top-1 ' onClick={closeModal} >
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
               
          </div>
        </dialog>
      )}
    </div>
  );
}

export default CarView;
