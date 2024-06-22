import React, { useState } from "react";

import { carEdit, carGetById } from "../Actions/car";
import Swal from "sweetalert2";

function CarEditForm({ id }) {
  const [car, setcar] = useState("");

  const [selectedFiles, setSelectedFiles] = useState([]);
  const [safety, setSafety] = useState([""]);
  const [convenience, setConvenience] = useState([""]);
  const [entertainment, setEntertainment] = useState([""]);
  const [interior, setInterior] = useState([""]);
  const [exterior, setExterior] = useState([""]);
  const [title, setTitle] = useState(car.title);
  const [model, setModel] = useState("");
  const [make, setMake] = useState("");
  const [color, setColor] = useState("");
  const [transmission, setTransmission] = useState("");
  const [condition, setCondition] = useState("");
  const [driveType, setDriveType] = useState("");
  const [price, setPrice] = useState("");
  const [year, setYear] = useState("");
  const [mileage, setMileage] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [engineSize, setEngineSize] = useState("");
  const [door, setDoor] = useState(null);
  const [cylinder, setCylinder] = useState("");

  const handleSafety = (e, index) => {
    const values = [...safety];
    values[index] = e.target.value;
    setSafety(values);
  };

  const addSafety = () => {
    setSafety([...safety, ""]);
  };

  const removeSafety = (index) => {
    const values = [...safety];
    values.splice(index, 1);
    setSafety(values);
  };

  //convenience input

  const handleConvenience = (e, index) => {
    const values = [...convenience];
    values[index] = e.target.value;
    setConvenience(values);
  };

  const addConvenience = () => {
    setConvenience([...convenience, ""]);
  };

  const removeConvenience = (index) => {
    const values = [...convenience];
    values.splice(index, 1);
    setConvenience(values);
  };
  //Entertainment input

  const handleEntertainment = (e, index) => {
    const values = [...entertainment];
    values[index] = e.target.value;
    setEntertainment(values);
  };

  const addEntertainment = () => {
    setEntertainment([...entertainment, ""]);
  };

  const removeEntertainment = (index) => {
    const values = [...entertainment];
    values.splice(index, 1);
    setEntertainment(values);
  };
  const handleInterior = (e, index) => {
    const values = [...interior];
    values[index] = e.target.value;
    setInterior(values);
  };

  const addInterior = () => {
    setInterior([...interior, ""]);
  };

  const removeInterior = (index) => {
    const values = [...interior];
    values.splice(index, 1);
    setInterior(values);
  };
  const handleExterior = (e, index) => {
    const values = [...exterior];
    values[index] = e.target.value;
    setExterior(values);
  };

  const addExterior = () => {
    setExterior([...exterior, ""]);
  };

  const removeExterior = (index) => {
    const values = [...exterior];
    values.splice(index, 1);
    setExterior(values);
  };

  // multiple img file input
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    console.log(files);
    setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const carDetails = {
      make: make,
      model: model,
      color: color,
      drive: driveType,
      transmission: transmission,
      condition: condition,
      year: year,
      mileage: mileage,
      fuelType: fuelType,
      engineSize: engineSize,
      door: door,
      cylinder: cylinder,
    };

    const carFeatures = {
      convinience: convenience,
      entertainment: entertainment,
      safety: safety,
      interior: interior,
      exterior: exterior,
    };

    const formData = new FormData();
    formData.append("title", title);
    formData.append("carDetails", JSON.stringify(carDetails));
    formData.append("carFeatures", JSON.stringify(carFeatures));

    selectedFiles.forEach((file) => {
      formData.append("carImages", file);
    });

    // console.log("form data -->", JSON.stringify(formData));

    try {
      const response = await carEdit(id, formData);
      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Car successful Updated",
          showConfirmButton: false,
          timer: 1500,
        });
        window.location.reload();
        handleCloseModal();
      }

      console.log("Response:", response);
      // Handle success or update state accordingly
    } catch (error) {
      if (error == "Unexpected field") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "image should be less than six !",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something wrong  !",
        });
      }
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    document.getElementById("my_modal_1").showModal();

    const response = await carGetById(id);
    setcar(response.data.car);
    setTitle(car.title);
    setMake(car.make);
    console.log("response , ", car.title);
  };

  //for closing modal
  const handleCloseModal = () => {
    const modal = document.getElementById("my_modal_1");

    if (modal) {
      modal.close();
    }
  };
  console.log(car);
  return (
    <div>
      <button
        className="btn text-green-600 bg-green-200 p-4 px-6 hover:bg-green-400"
        onClick={handleClick}
      >
        Edit
      </button>
      <dialog id="my_modal_1" className="modal w-full">
        <div className="modal-box max-w-5xl">
          <h3 className="text-center text-2xl font-bold">Update a Car</h3>
          <div className="modal-action">
            <form
              method="dialog"
              onSubmit={handleSubmit}
              className="flex flex-row flex-wrap gap-3 items-center p-4 "
            >
         
              <div className="flex flex-row w-full justify-between gap-7">
                <div className="mb-2 w-full">
                  <label htmlFor="title" className="block font-semibold mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={title}
                    placeholder={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="mb-2 w-full">
                  <label htmlFor="make" className="block font-semibold mb-1">
                    Make
                  </label>
                  <input
                    type="text"
                    id="make"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={make}
                    onChange={(e) => setMake(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-2 w-full ">
                <label htmlFor="picture" className="block font-semibold mb-1">
                  Picture
                </label>
                <input
                  type="file"
                  id="picture"
                  required
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  onChange={handleFileChange}
                  multiple // Allow multiple file selection
                />
                <div className="mt-3">
                  {selectedFiles.map((file, index) => (
                    <div key={index} className="mt-3">
                      <p>{file.name}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-row w-full justify-between gap-7">
                <div className="mb-2 w-full">
                  <label htmlFor="model" className="block font-semibold mb-1">
                    Model
                  </label>
                  <input
                    type="text"
                    id="model"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  />
                </div>

                <div className="mb-2 w-full">
                  <label htmlFor="color" className="block font-semibold mb-1">
                    Color
                  </label>
                  <input
                    type="text"
                    id="color"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row w-full justify-between gap-7">
                <div className="mb-2 w-full">
                  <label
                    htmlFor="transmission"
                    className="block font-semibold mb-1"
                  >
                    Transmission
                  </label>

                  <input
                    type="text"
                    id="transmission"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}
                  />
                </div>
                <div className="mb-2 w-full">
                  <label
                    htmlFor="condition"
                    className="block font-semibold mb-1"
                  >
                    Condition
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                  >
                    <option value="">select</option>
                    <option value="new">New</option>
                    <option value="used">Used</option>
                    <option value="recondition">Recondition</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row w-full justify-between gap-7">
                <div className="mb-3 w-full ">
                  <label
                    htmlFor="driveType"
                    className="block font-semibold mb-1"
                  >
                    Drive Type
                  </label>
                  <select
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={driveType}
                    onChange={(e) => setDriveType(e.target.value)}
                  >
                    <option defaultValue='' selected>select Deive Type</option>
                    <option value="4WD">4-Wheel Drive (4WD)</option>
              <option value="AWD">All-Wheel Drive (AWD)</option>
              <option value="FWD">Front-Wheel Drive (FWD)</option>
              <option value="RWD">Rear-Wheel Drive (RWD)</option>
              <option value="6WD">6-Wheel Drive (6WD)</option>{" "}
              {/* New drive type */}
              <option value="Part-Time 4WD">Part-Time 4WD</option>{" "}
                  </select>
                </div>
                <div className="mb-2 w-full">
                  <label htmlFor="price" className="block font-semibold mb-1">
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row w-full justify-between gap-7">
                <div className="mb-2 w-full">
                  <label htmlFor="year" className="block font-semibold mb-1">
                    Year
                  </label>
                  <input
                    type="text"
                    id="year"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                  />
                </div>
                <div className="mb-2 w-full">
                  <label htmlFor="mileage" className="block font-semibold mb-1">
                    Mileage
                  </label>
                  <input
                    type="number"
                    id="mileage"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={mileage}
                    onChange={(e) => setMileage(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row w-full justify-between gap-7">
                <div className="mb-2 w-full">
                  <label
                    htmlFor="fuelType"
                    className="block font-semibold mb-1"
                  >
                    Fuel Type
                  </label>
                  <input
                    type="text"
                    id="fueltype"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={fuelType}
                    onChange={(e) => setFuelType(e.target.value)}
                  />
                </div>
                <div className="mb-2 w-full">
                  <label
                    htmlFor="engineSize"
                    className="block font-semibold mb-1"
                  >
                    Engine Size
                  </label>
                  <input
                    type="number"
                    id="engineSize"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={engineSize}
                    onChange={(e) => setEngineSize(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row w-full justify-between gap-7">
                <div className="mb-2 w-full">
                  <label htmlFor="door" className="block font-semibold mb-1">
                    Door
                  </label>
                  <input
                    type="number"
                    id="door"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={door}
                    onChange={(e) => setDoor(e.target.value)}
                  />
                </div>
                <div className="mb-2 w-full">
                  <label
                    htmlFor="cylinder"
                    className="block font-semibold mb-1"
                  >
                    Cylinder
                  </label>
                  <input
                    type="number"
                    id="cylinder"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={cylinder}
                    onChange={(e) => setCylinder(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row w-full justify-between gap-7">
                <div className="mb-2 w-full">
                  <label htmlFor="vin" className="block font-semibold mb-1">
                    VIN
                  </label>
                  <input
                    type="text"
                    id="vin"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={vin}
                    onChange={(e) => setVin(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full">
                <div className="mb-2 w-full">
                  <label
                    htmlFor="convenience"
                    className="block font-semibold mb-1"
                  >
                    Convenience
                  </label>
                  {convenience.map((input, index) => (
                    <div key={index} className="relative mb-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                        value={input}
                        onChange={(e) => handleConvenience(e, index)}
                      />
                      {index > 0 && (
                        <button
                          type="button"
                          className="absolute top-2 right-2 text-red-500"
                          onClick={() => removeConvenience(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button type="button" className="btn" onClick={addConvenience}>
                  Add Convenience
                </button>
              </div>
              <div className="w-full">
                <div className="mb-2 w-full">
                  <label
                    htmlFor="entertainment"
                    className="block font-semibold mb-1"
                  >
                    Entertainment
                  </label>
                  {entertainment.map((input, index) => (
                    <div key={index} className="relative mb-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                        value={input}
                        onChange={(e) => handleEntertainment(e, index)}
                      />
                      {index > 0 && (
                        <button
                          type="button"
                          className="absolute top-2 right-2 text-red-500"
                          onClick={() => removeEntertainment(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={addEntertainment}
                >
                  Add Entertainment
                </button>
              </div>
              <div className="w-full">
                <div className="mb-2 w-full">
                  <label htmlFor="safety" className="block font-semibold mb-1">
                    Safety
                  </label>
                  {safety.map((input, index) => (
                    <div key={index} className="relative mb-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                        value={input}
                        onChange={(e) => handleSafety(e, index)}
                      />
                      {index > 0 && (
                        <button
                          type="button"
                          className="absolute top-2 right-2 text-red-500"
                          onClick={() => removeSafety(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button type="button" className="btn" onClick={addSafety}>
                  Add Safety
                </button>
              </div>
              <div className="w-full">
                <div className="mb-2 w-full">
                  <label
                    htmlFor="interior"
                    className="block font-semibold mb-1"
                  >
                    Interior
                  </label>
                  {interior.map((input, index) => (
                    <div key={index} className="relative mb-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                        value={input}
                        onChange={(e) => handleInterior(e, index)}
                      />
                      {index > 0 && (
                        <button
                          type="button"
                          className="absolute top-2 right-2 text-red-500"
                          onClick={() => removeInterior(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button type="button" className="btn" onClick={addInterior}>
                  Add Interior
                </button>
              </div>
              <div className="w-full">
                <div className="mb-2 w-full">
                  <label
                    htmlFor="exterior"
                    className="block font-semibold mb-1"
                  >
                    Exterior
                  </label>
                  {exterior.map((input, index) => (
                    <div key={index} className="relative mb-2">
                      <input
                        type="text"
                        className="w-full border border-gray-300 rounded px-3 py-2 pr-10"
                        value={input}
                        onChange={(e) => handleExterior(e, index)}
                      />
                      {index > 0 && (
                        <button
                          type="button"
                          className="absolute top-2 right-2 text-red-500"
                          onClick={() => removeExterior(index)}
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                </div>
                <button type="button" className="btn" onClick={addExterior}>
                  Add exterior
                </button>
              </div>

              <button
                type="submit"
                className="bg-blue-500 w-full mx-auto h-14 md:mt-7 text-white rounded hover:bg-blue-600"
              >
                Submit
              </button>
              <button
                className="btn w-full items-center"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default CarEditForm;
