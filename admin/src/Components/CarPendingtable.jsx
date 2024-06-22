import React from 'react';
import { carApprove, carReject } from '../Actions/car';
import Swal from 'sweetalert2';
import CarView from './CarView';

function CarPendingtable({ car }) {
  const { _id, title, carImages, carDetails } = car;

  
  const handleApprove = async (carId) => {
    try {
      const res = await carApprove(carId);
      if (res && res.status === 200) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Car Approved successfully',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.reload(); 
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Approval failed',
      });
    }
  };

  const handleReject = async (carId) => {
    try {
      const res = await carReject(carId);
      if (res && res.status === 200) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Car Rejected successfully',
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          window.location.reload(); 
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Rejection failed',
      });
    }
  };

  return (
    <tr>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {carImages.map((image, index) => (
                  <img key={index} src={image} alt={`Car ${index + 1}`} />
                ))}
              </div>
            </div>
            <div className='w-full'>
              <div className="font-bold">{title}</div>
              <div className=""></div>
            </div>
          </div>
        </td>
        <td>{carDetails?.make}</td>
        <td>{carDetails?.condition}</td>
        <td>${carDetails?.model}</td>
      <th className="space-x-4 flex justify-center">
      <CarView id={_id} />
        <button
          onClick={() => handleApprove(_id)}
          className="btn text-green-600 bg-green-300 p-4 hover:bg-green-400"
        >
          Approve
        </button>
        <button
          onClick={() => handleReject(_id)}
          className="btn text-red-600 bg-red-200 p-4 hover:bg-red-400"
        >
          Reject
        </button>
      </th>
    </tr>
  );
}

export default CarPendingtable;
