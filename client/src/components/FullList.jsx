import toyota_new from "../assets/img/toyota_new.svg";
import honda_new from "../assets/img/honda_new.svg";
import nissan_new from "../assets/img/nissan_new.svg";
import hundai from "../assets/img/hundai.svg";
import mercedes_benz from "../assets/img/mercedes_benz.svg";
import mitsubishi from "../assets/img/mitsubishi.svg";
import kia from "../assets/img/kia.svg";
import audi from "../assets/img/audi.svg";
import { Link } from "react-router-dom";

const FullList = () => {
  return (
    <>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/toyota'><img className="w-[10vh] h-[10vh]" src={toyota_new} alt="car1" /></Link>
        <p className="text-md">Toyota</p>
      </div>

      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg  ">
      <Link to='brand/honda'><img className="w-[10vh] h-[10vh]" src={honda_new} alt="car1" /></Link>
        <p className="text-md">Honda</p>
      </div>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/nissan'><img className="w-[10vh] h-[10vh]" src={nissan_new} alt="car1" /></Link>
        <p className="text-md">Nissan</p>
      </div>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/audi'><img className="w-[10vh] h-[10vh]" src={audi} alt="car1" /></Link>
        <p className="text-md">Audi</p>
      </div>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/kia'><img className="w-[10vh] h-[10vh]" src={kia} alt="car1" /></Link>
        <p className="text-md">KIA</p>
      </div>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/mistubishi'><img className="w-[10vh] h-[10vh]" src={mitsubishi} alt="car1" /></Link>
        <p className="text-md">Mitsubishi</p>
      </div>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/marcedesbenz'><img className="w-[10vh] h-[10vh]" src={mercedes_benz} alt="car1" /></Link>
        <p className="text-md">Mercedes Benz</p>
      </div>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/hundai'><img className="w-[10vh] h-[10vh]" src={hundai} alt="car1" /></Link>
        <p className="text-md">Hundai</p>
      </div>
    </>
  );
};

export default FullList;
