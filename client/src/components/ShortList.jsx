import toyota_new from "../assets/img/toyota_new.svg";
import honda_new from "../assets/img/honda_new.svg";
import nissan_new from "../assets/img/nissan_new.svg";
import hundai from "../assets/img/hundai.svg";
import mercedes_benz from "../assets/img/mercedes_benz.svg";
import mitsubishi from "../assets/img/mitsubishi.svg";
import kia from "../assets/img/kia.svg";
import audi from "../assets/img/audi.svg";
import BENTLEY from "../assets/img/BENTLEY_kbb6otv.svg";
import bmw from "../assets/img/bmw_new.svg";
import Cadillac from "../assets/img/Cadillac.svg";
import Chevrolet from "../assets/img/Chevrolet.svg";
import DAIHATSU from "../assets/img/DAIHATSU_yVgWmes.svg";
import Fiat from "../assets/img/Fiat.svg";
import ford_new from "../assets/img/ford_new.svg";
import GMC from "../assets/img/GMC.svg";
import Haval from "../assets/img/Haval.svg";
import INFINITI from "../assets/img/INFINITI.svg";
import Jaguar from "../assets/img/Jaguar.svg";
import land_rover from "../assets/img/land_rover.svg";
import Lexus_logo from "../assets/img/Lexus_logo.svg";
import Mahindra from "../assets/img/Mahindra.svg";
import MarutiSuzuki from "../assets/img/MarutiSuzuki.svg";
import mazda_new from "../assets/img/mazda_new.svg";
import New_mg_logo from "../assets/img/New_mg_logo.svg";
import Porsche from "../assets/img/Porsche.svg";
import Suzuki from "../assets/img/Suzuki.svg";
import Tata from "../assets/img/Tata.svg";
import Tesla from "../assets/img/Tesla.svg";
import { Link } from "react-router-dom";

const ShortList = () => {
  return (
    <>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
        <Link to='brands/toyota'>
          <img className="w-[10vh] h-[10vh]" src={toyota_new} alt="car1" />
        </Link>
        <p className="text-md">Toyota</p>
      </div>

      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg  ">
        <Link to='brands/honda'><img className="w-[10vh] h-[10vh]" src={honda_new} alt="car1" /></Link>
        <p className="text-md">Honda</p>
      </div>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
        <Link to='nissan'><img className="w-[10vh] h-[10vh]" src={nissan_new} alt="car1" /></Link>
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
      <Link to='brand/mercedesbenz'><img className="w-[10vh] h-[10vh]" src={mitsubishi} alt="car1" /></Link>
        <p className="text-md">Mitsubishi</p>
      </div>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/'><img className="w-[10vh] h-[10vh]" src={mercedes_benz} alt="car1" /></Link>
        <p className="text-md">Mercedes Benz</p>
      </div>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/hundai'><img className="w-[10vh] h-[10vh]" src={hundai} alt="car1" /></Link>
        <p className="text-md">Hundai</p>
      </div>

      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/bentley'><img className="w-[10vh] h-[10vh]" src={BENTLEY} alt="car1" /></Link>
        <p className="text-md">BENTLEY</p>
      </div>

      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/bmw'><img className="w-[10vh] h-[10vh]" src={bmw} alt="car1" /></Link>
        <p className="text-md">BMW</p>
      </div>

      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/cadillac'><img className="w-[10vh] h-[10vh]" src={Cadillac} alt="car1" /></Link>
        <p className="text-md">Cadillac</p>
      </div>

      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/chevrolet'><img className="w-[10vh] h-[10vh]" src={Chevrolet} alt="car1" /></Link>
        <p className="text-md">Chevrolet</p>
      </div>

      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/daihatsu'><img className="w-[10vh] h-[10vh]" src={DAIHATSU} alt="car1" /></Link>
        <p className="text-md">DAIHATSU</p>
      </div>

      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/pord'><img className="w-[10vh] h-[10vh]" src={ford_new} alt="car1" /></Link>
        <p className="text-md">Ford</p>
      </div>

      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/fiat'><img className="w-[10vh] h-[10vh]" src={Fiat} alt="car1" /></Link>
        <p className="text-md">Fiat</p>
      </div>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/gmc'><img className="w-[10vh] h-[10vh]" src={GMC} alt="car1" /></Link>
        <p className="text-md">GMC</p>
      </div>

      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/haval'><img className="w-[10vh] h-[10vh]" src={Haval} alt="car1" /></Link>
        <p className="text-md">Haval</p>
      </div>

      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/infiniti'><img className="w-[10vh] h-[10vh]" src={INFINITI} alt="car1" /></Link>
        <p className="text-md">INFINITI</p>
      </div>

      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/jaguar'><img className="w-[10vh] h-[10vh]" src={Jaguar} alt="car1" /></Link>
        <p className="text-md">Jaguar</p>
      </div>

      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/landrover'><img className="w-[10vh] h-[10vh]" src={land_rover} alt="car1" /></Link>
        <p className="text-md">Land Rover</p>
      </div>

      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/lexus'><img className="w-[10vh] h-[10vh]" src={Lexus_logo} alt="car1" /></Link>
        <p className="text-md">Lexus</p>
      </div>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/mahindra'><img className="w-[10vh] h-[10vh]" src={Mahindra} alt="car1" /></Link>
        <p className="text-md">Mahindra</p>
      </div>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/marutisuzuki'><img className="w-[10vh] h-[10vh]" src={MarutiSuzuki} alt="car1" /></Link>
        <p className="text-md">MarutiSuzuki</p>
      </div>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/mazda'><img className="w-[10vh] h-[10vh]" src={mazda_new} alt="car1" /></Link>
        <p className="text-md">Mazda_new</p>
      </div>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/mg'><img className="w-[10vh] h-[10vh]" src={New_mg_logo} alt="car1" /></Link>
        <p className="text-md">MG</p>
      </div>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/porsche'><img className="w-[10vh] h-[10vh]" src={Porsche} alt="car1" /></Link>
        <p className="text-md">Porsche</p>
      </div>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/suzuki'><img className="w-[10vh] h-[10vh]" src={Suzuki} alt="car1" /></Link>
        <p className="text-md">Suzuki</p>
      </div>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/tata'><img className="w-[10vh] h-[10vh]" src={Tata} alt="car1" /></Link>
        <p className="text-md">Tata</p>
      </div>
      <div className=" p-4  flex flex-col justify-center items-center gap-2 rounded-lg">
      <Link to='brand/tesla'><img className="w-[10vh] h-[10vh]" src={Tesla} alt="car1" /></Link>
        <p className="text-md">Tesla</p>
      </div>
    </>
  );
};

export default ShortList;
