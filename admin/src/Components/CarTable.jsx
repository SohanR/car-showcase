import React, { useState } from "react";
import { carDelete } from "../Actions/car";
import Swal from "sweetalert2";
import CarEditForm from "./CarEditForm";
import CarView from "./CarView";

function CarTable({ car }) {
  const { _id, title, carImages, carDetails } = car;

  const handleDelete = async (carId) => {
    try {
      const response = await carDelete(carId);
      if (response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Successfully Deleted",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
      } else {
        throw new Error("Failed to delete car");
      }
    } catch (error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Error",
        text: error.message || "Something went wrong!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
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
            <div className="w-full">
              <div className="font-bold">{title}</div>
              <div className=""></div>
            </div>
          </div>
        </td>
        <td>{carDetails?.make}</td>
        <td>{carDetails?.condition}</td>
        <td>{carDetails?.model}</td>
        <th className="space-x-4 flex justify-center">
          <div className='flex flex-row gap-3'>
           <CarView id={_id} />
         <CarEditForm  id={_id}/>
            <button onClick={() => handleDelete(_id)} className="btn text-red-600 bg-red-200 p-4 px-6 hover:bg-red-400">
              Delete
            </button>
          </div>
        </th>
      </tr>
    </>
  );
}

export default CarTable;
