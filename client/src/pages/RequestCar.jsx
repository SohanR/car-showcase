import { useState } from "react";
import Swal from "sweetalert2";
import { memberCar } from "../actions/carlist";

function RequestCar() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [safety, setSafety] = useState([""]);
  const [convenience, setConvenience] = useState([""]);
  const [entertainment, setEntertainment] = useState([""]);
  const [interior, setInterior] = useState([""]);
  const [exterior, setExterior] = useState([""]);
  const [title, setTitle] = useState("");
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

  const [modelCode, setModelCode] = useState("");
  const [maxLoadingCapacity, setMaxLoadingCapacity] = useState("");
  const [cc, setCC] = useState("");
  const [airLock, setAirLock] = useState(false);
  const [antiLockBrakes, setAntiLockBrakes] = useState(false);
  const [airConditioner, setAirConditioner] = useState(false);
  const [alloyWheels, setAlloyWheels] = useState(false);
  const [blackTire, setBlackTire] = useState(false);
  const [fogLights, setFogLights] = useState(false);
  const [grillGuard, setGrillGuard] = useState(false);
  const [leatherSeats, setLeatherSeats] = useState(false);
  const [navigation, setNavigation] = useState(false);
  const [powerSteering, setPowerSteering] = useState(false);
  const [powerWindow, setPowerWindows] = useState(false);
  const [roofRails, setRoofRails] = useState(false);
  const [rearSpoilers, setRearSpoiler] = useState(false);
  const [sunRoof, setSunRoof] = useState(false);
  const [tv, setTv] = useState(false);
  const [dualAirBags, setDualAirBags] = useState(false);
  const [keylessEntry, setKeylessEntry] = useState(false);
  const [centralLocking, setCentralLocking] = useState(false);
  const [cdPlayer, setCDPlayer] = useState(false);
  const [abs, setABS] = useState(false);
  const [acFront, setACFront] = useState(false);
  const [acRear, setACRear] = useState(false);
  const [bodyType, setBodyType] = useState("");

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

    const addOn = {
      airLock: airLock,
      powerSteering: powerSteering,
      ac: airConditioner,
      navigation: navigation,
      antiLockBrakes: antiLockBrakes,
      leatherSeats: leatherSeats,
      tv: tv,
      fogLight: fogLights,
      alloyWheels: alloyWheels,
      grillGuard: grillGuard,
      powerWindow: powerWindow,
      roofRails: roofRails,
      dualAirBag: dualAirBags,
      sunRoof: sunRoof,
      rearSpoiler: rearSpoilers,
      blackTire: blackTire,
      keylessEntry: keylessEntry,
      contralLocking: centralLocking,
      cd: cdPlayer,
      abs: abs,
      acFront: acFront,
      acRear: acRear,
    };

    console.log(addOn);
    const formData = new FormData();
    formData.append("title", title);
    formData.append("carDetails", JSON.stringify(carDetails));
    formData.append("carFeatures", JSON.stringify(carFeatures));
    formData.append("addOn", JSON.stringify(addOn));

    selectedFiles.forEach((file) => {
      formData.append("carImages", file);
    });

    console.log("form data -->", JSON.stringify(formData));

    try {
      const response = await memberCar(formData);
      if (response.status === 200) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Car successful Added",
          showConfirmButton: false,
          timer: 1500,
        });
      
       
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


  return (
    <div className="mt-20 section">
   

        <div className="mx-auto max-w-7xl">
          <h3 className="text-center text-2xl font-bold">Request a New Car</h3>

          <div className=" ">
            <form
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
                    className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
                    value={title}
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
                    className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
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
                  className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
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
              <div className="flex flex-row w-full justify-between items-center gap-7">
                <div className="mb-2 w-full">
                  <label htmlFor="model" className="block font-semibold mb-1">
                    Model
                  </label>
                  <input
                    type="text"
                    id="model"
                    className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
                    value={model}
                    onChange={(e) => setModel(e.target.value)}
                  />
                </div>
                <div className="mb-2 w-full">
                  <label
                    htmlFor="modelCode"
                    className="block font-semibold mb-1"
                  >
                    Models Code
                  </label>
                  <input
                    type="text"
                    id="modelcode"
                    className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
                    value={modelCode}
                    onChange={(e) => setModelCode(e.target.value)}
                  />
                </div>
                <div className="mb-2 w-full">
                  <label
                    htmlFor="bodyType"
                    className="block font-semibold mb-1"
                  >
                    Engine Type
                  </label>
                  <input
                    type="text"
                    id="bodyType"
                    className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
                    value={bodyType}
                    onChange={(e) => setBodyType(e.target.value)}
                  />
                </div>

                <div className="mb-2 w-full">
                  <label
                    htmlFor="maxLoadingCapacity"
                    className="block font-semibold mb-1"
                  >
                    Loading Capacity
                  </label>
                  <input
                    type="text"
                    id="maxLoadingCapacity"
                    className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
                    value={maxLoadingCapacity}
                    onChange={(e) => setMaxLoadingCapacity(e.target.value)}
                  />
                </div>

                <div className="mb-2 w-full">
                  <label htmlFor="cc" className="block font-semibold mb-1">
                    CC
                  </label>
                  <input
                    type="text"
                    id="cc"
                    className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
                    value={cc}
                    onChange={(e) => setCC(e.target.value)}
                  />
                </div>

                <div className="mb-2 w-full">
                  <label htmlFor="color" className="block font-semibold mb-1">
                    Exterior Color
                  </label>
                  <input
                    type="text"
                    id="color"
                    className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
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
                    className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
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
                    className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                  >
                    <option value="">select</option>

                    <option value="used">Used</option>
                    <option value="new">New</option>
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
                    className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
                    value={driveType}
                    onChange={(e) => setDriveType(e.target.value)}
                  >
                    <option value="">select</option>
                    <option value="4WD">4-Wheel Drive (4WD)</option>
                    <option value="AWD">All-Wheel Drive (AWD)</option>
                    <option value="FWD">Front-Wheel Drive (FWD)</option>
                    <option value="RWD">Rear-Wheel Drive (RWD)</option>
                    <option value="6WD">6-Wheel Drive (6WD)</option>{" "}
                    {/* New drive type */}
                    <option value="Part-Time 4WD">Part-Time 4WD</option>
                  </select>
                </div>
                <div className="mb-2 w-full">
                  <label htmlFor="price" className="block font-semibold mb-1">
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
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
                    className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
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
                    className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
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
                    className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
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
                    className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
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
                    className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
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
                    className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2"
                    value={cylinder}
                    onChange={(e) => setCylinder(e.target.value)}
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
                        className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2 pr-10"
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
                        className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2 pr-10"
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
                        className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2 pr-10"
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
                        className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2 pr-10"
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
                        className="w-full border bg-gray-800 border-gray-300 rounded px-3 py-2 pr-10"
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
              <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 ">
              <div className="flex items-center gap-2">
        <input
          className="rounded border-gray-300 text-white"
          type="checkbox"
          id="airlock"
          name="airlock"
          value={airLock}
          onChange={(e) => setAirLock(e.target.value)}
        />
        <label htmlFor="airlock" className="text-white">
          Air Lock
        </label>
      </div>

  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="power-steering"
      name="powerSteering"
      checked={powerSteering}
      onChange={(e) => setPowerSteering(e.target.checked)}
    />
    <label htmlFor="power-steering" className="text-white">
      Power Steering
    </label>
</div>

  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="air-conditioner"
      name="airConditioner"
      checked={airConditioner}
 
        onChange={(e) => setAirConditioner(e.target.checked)}
    />
    <label htmlFor="air-conditioner" className="text-white">
      Air Conditioner
    </label>
</div>
 
  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="navigation"
      name="navigation"
      checked={navigation}
      onChange={(e) => setNavigation(e.target.checked)}
      
    />
    <label htmlFor="navigationg" className="text-white">
      Navigation
    </label>
</div>
  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="anti-lock-brake-system"
      name="antiLockBrakes"
      checked={antiLockBrakes}
      onChange={(e) => setAntiLockBrakes(e.target.checked)}
    />
    <label htmlFor="anti-lock-brake-system" className="text-white">
    Anti Lock Brakes
    </label>
</div>
  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="leather-seats"
      name="leatherSeats"
      checked={leatherSeats}
      onChange={(e) => setLeatherSeats(e.target.checked)}
    />
    <label htmlFor="leather-seats" className="text-white">
    Leather Seats
    </label>
</div>
  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="tv"
      name="tv"
      checked={tv}
      onChange={(e) => setTv(e.target.checked)}
    />
    <label htmlFor="tv" className="text-white">
     TV
    </label>
</div>
  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="fog-lights"
      name="fogLights"
      checked={fogLights}
      onChange={(e) => setFogLights(e.target.checked)}
    />
    <label htmlFor="fog-lights" className="text-white">
     Fog Lights
    </label>
</div>
  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="alloy-wheels"
      name="alloyWheels"
      checked={alloyWheels}
      onChange={(e) => setAlloyWheels(e.target.checked)}
    />
    <label htmlFor="alloy-wheels" className="text-white">
     Alloy Wheels
    </label>
</div>
  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="grill-guard"
      name="grillGuard"
      checked={grillGuard}
      onChange={(e) => setGrillGuard(e.target.checked)}
    />
    <label htmlFor="grill-guard" className="text-white">
    Grill Guard
    </label>
</div>
  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="power-windows"
      name="powerWindows"
      checked={powerWindow}
      onChange={(e) => setPowerWindows(e.target.checked)}
    />
    <label htmlFor="power-windows" className="text-white">
    Power Window
    </label>
</div>
  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="roof-rails"
      name="roofRails"
      checked={roofRails}
      onChange={(e) => setRoofRails(e.target.checked)}
    />
    <label htmlFor="roof-rails" className="text-white">
      Roof Rails
    </label>
</div>
  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="dual-air-bugs"
      name="dualAirBags"
      checked={dualAirBags}
      onChange={(e) => setDualAirBags(e.target.checked)}
    />
    <label htmlFor="dual-air-bugs" className="text-white">
      Dual Air Bugs
    </label>
</div>
  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="sun-roof"
      name="sunRoof"
      checked={sunRoof}
      onChange={(e) => setSunRoof(e.target.checked)}
    />
    <label htmlFor="sun-roof" className="text-white">
      Sun Roof
    </label>
</div>
  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="rear-spoilers"
      name="rearSpoilers"
      checked={rearSpoilers}
      onChange={(e) => setRearSpoiler(e.target.checked)}
    />
    <label htmlFor="rear-spoilers" className="text-white">
      Rear Spoilers
    </label>
</div>
  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="black-tire"
      name="blackTire"
      checked={blackTire}
      onChange={(e) => setBlackTire(e.target.checked)}
    />
    <label htmlFor="black-tire" className="text-white">
      Black Tire
    </label>
</div>
<div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="key-less-entry"
      name="keylessEntry"
      checked={keylessEntry}
      onChange={(e) => setKeylessEntry(e.target.checked)}
    />
    <label htmlFor="key-less-entry" className="text-white">
      Keyless Entry
    </label>
  </div>
  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="central-locking"
      name="centralLocking"
      checked={centralLocking}
      onChange={(e) => setCentralLocking(e.target.checked)}
    />
    <label htmlFor="central-locking" className="text-white">
      Central Locking
    </label>
  </div>
  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="cd-player"
      name="cdPlayer"
      checked={cdPlayer}
      onChange={(e) => setCDPlayer(e.target.checked)}
    />
    <label htmlFor="cd-player" className="text-white">
      CD Player
    </label>
  </div>
  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="abs"
      name="abs"
      checked={abs}
      onChange={(e) => setABS(e.target.checked)}
    />
    <label htmlFor="abs" className="text-white">
      ABS
    </label>
  </div>
  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="ac-front"
      name={acFront}
      checked={acFront}
      onChange={(e) => setACFront(e.target.checked)}
    />
    <label htmlFor="ac-front" className="text-white">
      A/C Front
    </label>
  </div>
  <div className="flex items-center gap-2">
    <input
      className="rounded border-gray-300 text-white"
      type="checkbox"
      id="ac-rear"
      name="acRear"
      checked={acRear}
      onChange={(e) => setACRear(e.target.checked)}
    />
    <label htmlFor="ac-rear" className="text-white">
      A/C Rear
    </label>
  </div>

              </div>


              <button
                type="submit"
                className="bg-blue-500 w-full mx-auto h-14 md:mt-7 text-white rounded hover:bg-blue-600"
              >
                Submit
              </button>
           
            </form>
          </div>
        </div>
    </div>
  );
}

export default RequestCar;
