/* eslint-disable react/prop-types */
import { useState } from "react";
import { CiSettings } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

import { getSearchCar } from "../actions/carlist";
import CarCard from "./CarCard";
function CarSearch({ setSearchCar, setSearchClick }) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
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
  const [showAdvancedSettings, setShowAdvancedSettings] = useState(false);
  const [acFront, setACFront] = useState(false);
  const [acRear, setACRear] = useState(false);
  const [ccFrom, setCcFrom] = useState("");
  const [ccTo, setCcTo] = useState("");
  const [yearFrom, setYearFrom] = useState("");
  const [yearTo, setYearTo] = useState("");
  const [maxLoadingCapacity, setMaxLoadingCapacity] = useState("");
  const [selectedMileage, setSelectedMileage] = useState("");
  const [modelCode, setModelCode] = useState("");
  const [selectedEngineSize, setSelectedEngineSize] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const handleModelCodeChange = (e) => {
    setModelCode(e.target.value);
  };
  // console.log(acFront);
  // console.log(airLock)
  const [searchCriteria, setSearchCriteria] = useState({
    condition: "",

    category: "",
    driveType: "",
    fuelType: "",
    cylinder: "",
    transmission: "",
    doorCount: "",
    color: "",
    bodyType: "",
    selectedEngineType: "",
  });

  // const searchForm = {
  //   make: searchCriteria.make,
  //   model: searchCriteria.model,
  //   modelCode: modelCode,
  //   enginType: searchCriteria.selectedEngineType,
  //   loadingCapacity: maxLoadingCapacity,
  //   cc: ccFrom,
  //   exteriorColor: searchCriteria.color,
  //   driveType: searchCriteria.driveType,
  //   transmission: searchCriteria.transmission,
  //   condition: searchCriteria.condition,
  //   year: yearFrom,
  //   mileage: selectedMileage,
  //   fuelType: searchCriteria.fuelType,
  //   engineSize: selectedEngineSize,
  //   door: searchCriteria.doorCount,
  //   cylinder: searchCriteria.cylinder,
  //   airLock: airLock,
  //   powerSteering: powerSteering,
  //   ac: airConditioner,
  //   navigation: navigation,
  //   antiLockBrakes: antiLockBrakes,
  //   leatherSeats: leatherSeats,
  //   tv: tv,
  //   fogLight: fogLights,
  //   alloyWheels: alloyWheels,
  //   grillGuard: grillGuard,
  //   powerWindow: powerWindow,
  //   roofRails: roofRails,
  //   dualAirBag: dualAirBags,
  //   sunRoof: sunRoof,
  //   rearSpoiler: rearSpoilers,
  //   blackTire: blackTire,
  //   keylessEntry: keylessEntry,
  //   centralLocking: centralLocking,
  //   cd: cdPlayer,
  //   abs: abs,
  //   acFront: acFront,
  //   acRear: acRear,
  // };

  // console.log("search form --> ", searchForm);

  // Function to handle search criteria changes
  const handleSearchCriteriaChange = (event) => {
    const { name, value } = event.target;
    setSearchCriteria((prevCriteria) => ({
      ...prevCriteria,
      [name]: value,
    }));
  };

  // Function to handle search button click
  const handleSearchClick = async (e) => {
    e.preventDefault();

    setSearchClick(true);

    const searchForm = {
      make,
      model,
      modelCode: modelCode,
      enginType: searchCriteria.selectedEngineType,
      loadingCapacity: maxLoadingCapacity,
      cc: ccFrom,
      exteriorColor: searchCriteria.color,
      driveType: searchCriteria.driveType,
      transmission: searchCriteria.transmission,
      condition: searchCriteria.condition,
      year: yearFrom,
      mileage: selectedMileage,
      fuelType: searchCriteria.fuelType,
      engineSize: selectedEngineSize,
      door: searchCriteria.doorCount,
      cylinder: searchCriteria.cylinder,
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
      centralLocking: centralLocking,
      cd: cdPlayer,
      abs: abs,
      acFront: acFront,
      acRear: acRear,
    };
    console.log(searchForm);
    try {
      const result = await getSearchCar({
        params: searchForm,
      });
      setSearchCar(result.cars);
      console.log("search result", result);
    } catch (error) {
      console.log("search error", error);
    }
  };

  const toggleAdvancedSettings = () => {
    setShowAdvancedSettings(!showAdvancedSettings);
  };

  const modelsByMake = {
    Abarth: [
      "124spider",
      "500",
      "595",
      "595competizione",
      "595esseesse",
      "595pista",
      "595turismo",
      "695",
      "69510thanniversary",
      "695esseesse",
      "695rivale",
      "695yrch",
      "124gt",
      "124rally",
    ],
    AlfaRomeo: [
      "33",
      "145",
      "146",
      "147",
      "149",
      "155",
      "156",
      "159",
      "166",
      "4c",
      "8c",
      "brera",
      "crosswagon",
      "giulia",
      "gt",
      "giulietta",
      "mito",
      "rz",
      "spider",
      "sz",
    ],
    AMG: [
      "a35",
      "a45",
      "amgone",
      "amggt",
      "c43",
      "c63",
      "cls53",
      "e53",
      "e63",
      "g63",
      "gla35",
      "gla45",
      "gls63",
      "gtr",
      "rs3",
      "rs5",
      "rs6",
      "rs7",
      "s3",
      "s4",
      "s5",
    ],
    AstonMartin: [
      "cygnet",
      "db4",
      "db5",
      "db6",
      "db7",
      "db9",
      "db10",
      "db11",
      "dbs",
      "dbsuperleggera",
      "dbr1",
      "dbr2",
      "dbr3",
      "dbr4",
      "dbr5",
      "dbr9",
      "dbrs9",
      "rapide",
      "valhalla",
      "vanquish",
    ],
    Audi: [
      "a1",
      "a3",
      "a4",
      "a6",
      "a7",
      "a8",
      "etron",
      "q2",
      "q3",
      "q4",
      "q5",
      "q7",
      "q8",
      "rs3",
      "rs4",
      "rs5",
      "rs6",
      "rs7",
      "s3",
      "s4",
      "s5",
    ],
    Baic: [
      "a111",
      "a113",
      "a115",
      "a60",
      "a70",
      "a115",
      "arcfox",
      "benben",
      "benbenev",
      "bj20",
      "bj40",
      "bj80",
      "cs15",
      "cs35",
      "cs55",
      "cs75",
      "cs95",
      "cx20",
      "cx30",
      "cx70",
    ],
    Barabus: [
      "2+2",
      "2door",
      "4door",
      "biturbo",
      "cabriolet",
      "convertible",
      "coupe",
      "gtr",
      "lm",
      "lmp",
      "roadster",
      "saloon",
      "sedan",
      "spyder",
      "tkr",
      "twinturbo",
      "v12",
      "v12tt",
      "4c",
      "coupe",
    ],
    Bentley: [
      "arnage",
      "azure",
      "brooklands",
      "bentayga",
      "continentalgt",
      "flyingspur",
      "mulsanne",
      "rturbo",
      "rtype",
      "s1",
      "s2",
      "s3",
      "s4",
      "s5",
      "s6",
      "s7",
      "s8",
      "turbo",
      "t2",
      "mulsanneewb",
    ],
    BMW: [
      "3series",
      "4series",
      "5series",
      "6series",
      "7series",
      "8series",
      "i3",
      "i4",
      "m3",
      "m5",
      "m8",
      "x1",
      "x2",
      "x3",
      "x4",
      "x5",
      "x6",
      "x7",
      "x8",
      "z4",
    ],
    BMWAlpina: [
      "b3",
      "b3s",
      "b4",
      "b4s",
      "b5",
      "b5s",
      "b6",
      "b6s",
      "b7",
      "b8",
      "d3",
      "d4",
      "d5",
      "d6",
      "xd3",
      "xd4",
      "xd5",
      "xd6",
      "b8gran",
      "d3",
    ],
    BYD: [
      "e1",
      "e2",
      "e3",
      "ea1",
      "ea2",
      "ea3",
      "ea4",
      "ea5",
      "ea6",
      "ea7",
      "ea8",
      "ea9",
      "et",
      "et360",
      "et560",
      "etim",
      "etse",
      "etseries",
      "eternity",
      "etphybrid",
    ],
    Cadillac: [
      "ats",
      "ats-v",
      "ct4",
      "ct5",
      "ct6",
      "ctsv",
      "deville",
      "eldorado",
      "escalade",
      "escaladeesv",
      "fleewood",
      "seville",
      "srx",
      "sts",
      "xt4",
      "xt5",
      "xt6",
      "xts",
      "xlr",
      "xt6hybrid",
      "xtshybrid",
    ],
    Changan: [
      "alsvin",
      "benben",
      "benbenmini",
      "cs15",
      "cs35",
      "cs55",
      "cs75",
      "cs95",
      "cx20",
      "cx30",
      "cx40",
      "cx50",
      "cx70",
      "cx75",
      "cs85",
      "cs95",
      "eado",
      "eadoev",
      "eadoxt",
      "cx70t",
      "cv11",
    ],
    Chery: [
      "arrizo3",
      "arrizo5",
      "arrizo7",
      "beta3",
      "crosses",
      "eastar",
      "eastar5",
      "exeedlx",
      "exeedtx",
      "fulwin",
      "fulwin2",
      "karryq",
      "karryyouya",
      "karryyouyou",
      "qq",
      "qqme",
      "tiggo2",
      "tiggo3",
      "tiggo4",
      "tiggo5",
    ],
    Chevrolet: [
      "aveo",
      "blazer",
      "bolt",
      "camaro",
      "captiva",
      "cavalier",
      "colorado",
      "corvette",
      "cruze",
      "equinox",
      "express",
      "malibu",
      "onix",
      "s10",
      "silverado",
      "sonic",
      "spark",
      "suburban",
      "tahoe",
      "trailblazer",
    ],
    Chrysler: [
      "200",
      "300",
      "aspen",
      "concorde",
      "crossfire",
      "grandvoyager",
      "pacifica",
      "ptcruiser",
      "sebring",
      "townandcountry",
    ],
    ChryslerJeep: [
      "cherokee",
      "commander",
      "compass",
      "gladiator",
      "grandcherokee",
      "liberty",
      "patriot",
      "renegade",
      "wrangler",
    ],
    Citroen: [
      "amidship",
      "berlingo",
      "c-elysee",
      "c1",
      "c3",
      "c4",
      "c4cactus",
      "c4grandpicasso",
      "c5",
      "c6",
      "c8",
      "ds3",
      "ds4",
      "ds5",
      "jumper",
      "jumpy",
      "nemo",
      "spacetourer",
      "xantia",
      "xsara",
    ],
    Daf: [
      "33",
      "44",
      "46",
      "55",
      "66",
      "daffodil",
      "marathon",
      "museumkw",
      "museumxf",
      "samuel",
    ],
    Daihatsu: [
      "altis",
      "ayla",
      "beck",
      "cast",
      "ceria",
      "copen",
      "delta",
      "f1",
      "granmax",
      "hijet",
      "materia",
      "mirai",
      "move",
      "sirion",
      "sonica",
      "taft",
      "terios",
      "thor",
      "xenia",
      "yrv",
    ],
    Daimler: [
      "250",
      "astonmartin",
      "ds420",
      "eb110",
      "f-type",
      "f5000",
      "fpace",
      "ftype",
      "i-pace",
      "mkii",
      "mkv",
      "mkx",
      "mkxviii",
      "mkz",
      "mkziii",
      "monaco",
      "montecarlo",
      "pickup",
      "sedan",
      "sportbrake",
    ],
    Dodge: [
      "avenger",
      "caliber",
      "challenger",
      "charger",
      "coronet",
      "dart",
      "demon",
      "durango",
      "journey",
      "magnum",
      "neon",
      "ram",
      "srtviper",
      "stealth",
      "stratus",
      "viper",
      "wc",
      "wc54",
      "wc64",
      "wcseries",
    ],
    DongFeng: [
      "aeolusax3",
      "ax4",
      "ax5",
      "ax7",
      "ax8",
      "ax5ev",
      "joyear",
      "joyearx5",
      "joyearx7",
      "seres",
      "seresev",
      "seresfcv",
      "sereshatch",
      "seresphev",
      "seressedan",
      "seressuv",
      "seresv",
      "seresvf",
      "seresvg",
      "seresvplus",
    ],

    Ferrari: [
      "250",
      "275",
      "288gto",
      "308",
      "328",
      "348",
      "360",
      "456",
      "458",
      "488",
      "512",
      "550",
      "575m",
      "599",
      "612",
      "california",
      "enzo",
      "f12berlinetta",
      "f355",
      "f40",
    ],
    Fiat: [
      "124spider",
      "500",
      "500l",
      "500x",
      "bravo",
      "doblo",
      "ducato",
      "fiorino",
      "freemont",
      "fullback",
      "grande punto",
      "panda",
      "punto",
      "qubo",
      "talento",
      "tipo",
      "ulysse",
      "uno",
      "x1/9",
    ],
    Foton: [
      "cs2",
      "cs3",
      "cs5",
      "cs6",
      "cs35",
      "cs45",
      "cs75",
      "cs85",
      "sauvana",
      "tunland",
    ],
    Gac: [
      "aion",
      "aionlx",
      "enpulse",
      "gn6",
      "gs3",
      "gs4",
      "gs5",
      "gs8",
      "i4",
      "ix4",
      "jax",
      "mbrave",
      "miniev",
      "shenbao",
      "trumpchi",
      "witstar",
    ],
    Gelly: [
      "ge3",
      "gc2",
      "gk5",
      "gs",
      "gs3",
      "gs4",
      "gs5",
      "gs7",
      "gx2",
      "gx5",
    ],
    Genesis: ["g70", "g80", "g90", "gv70", "gv80", "gv90"],
    GMC: [
      "acadia",
      "canyon",
      "sierra1500",
      "sierra2500hd",
      "sierra3500hd",
      "terrain",
      "yukon",
      "yukonxl",
    ],
    GoldenDragon: [
      "xml6117",
      "xml6796",
      "xml6956",
      "xml6129",
      "xml6750",
      "xml6901",
      "xml6950",
      "xml6127",
      "xml6799",
      "xml6958",
    ],
    GreatWall: [
      "c30",
      "c50",
      "coolbear",
      "cowry",
      "hover",
      "havalh1",
      "havalh2",
      "havalh5",
      "havalh6",
      "havalh9",
      "m4",
      "poer",
      "sailor",
      "voleexc10",
      "voleexc20",
      "voleexc30",
      "voleexc50",
      "wingle",
      "wingle5",
      "wingle6",
    ],
    Hino: ["155", "195", "258", "268", "338", "358", "500", "700"],
    Holden: [
      "acrado",
      "aper",
      "astra",
      "barina",
      "captiva",
      "colorado",
      "commodore",
      "equinox",
      "trailblazer",
      "trax",
    ],
    Honda: [
      "accord",
      "amaze",
      "ballade",
      "brio",
      "brv",
      "civic",
      "crv",
      "crz",
      "fitta",
      "fit",
      "grace",
      "hrv",
      "insight",
      "jazz",
      "mobilio",
      "odyssey",
      "pilot",
      "prelude",
      "ridgeline",
      "s2000",
    ],
    Hummer: ["h1", "h2", "h3"],
    Hyundai: [
      "accent",
      "atlas",
      "azera",
      "creta",
      "elana",
      "entourage",
      "equus",
      "genesis",
      "i10",
      "i20",
      "i30",
      "ioniq",
      "kona",
      "palisade",
      "santa fe",
      "sonata",
      "tucson",
      "veloster",
      "venue",
      "veracruz",
    ],
    Infiniti: [
      "qx50",
      "qx60",
      "qx70",
      "qx80",
      "q50",
      "q60",
      "q70",
      "q70l",
      "q30",
      "q40",
    ],
    Iveco: ["daily", "eurocargo", "stralis", "trakker"],
    Jac: [
      "ievan",
      "iex7",
      "seavan",
      "shuailing",
      "refine",
      "refinei",
      "refineiev",
      "ievan",
      "shuailing",
      "seavan",
      "ievan",
      "ievan5",
      "ievan6",
      "ievan7",
      "ievan8",
      "ievan9",
      "ievanplus",
      "ievan7",
      "ievan8",
    ],
    Jaguar: [
      "e-pace",
      "f-pace",
      "f-type",
      "i-pace",
      "s-type",
      "x-type",
      "xe",
      "xf",
      "xj",
      "xk",
    ],
    Jeep: [
      "cherokee",
      "commander",
      "compass",
      "gladiator",
      "grandcherokee",
      "liberty",
      "patriot",
      "renegade",
      "wagoneer",
      "wrangler",
    ],
    Kia: [
      "carens",
      "carnival",
      "ceed",
      "cerato",
      "forte",
      "k5",
      "k900",
      "niro",
      "optima",
      "picanto",
      "quoris",
      "rio",
      "sedona",
      "seltos",
      "sorento",
      "soul",
      "sportage",
      "stinger",
      "stonic",
      "telluride",
    ],
    Kinglong: [
      "c10",
      "c9",
      "c9pl1",
      "c9pl2",
      "c9pl3",
      "c9pl4",
      "c9pl5",
      "c9pl6",
      "c9pl7",
      "c9pl8",
    ],
    Lamborghini: [
      "aventador",
      "countach",
      "diablo",
      "gallardo",
      "huracan",
      "miura",
      "murcielago",
      "sesto",
      "urus",
      "veneno",
    ],
    Lancia: [
      "delta",
      "flaminia",
      "fulvia",
      "gamma",
      "kappa",
      "lybra",
      "musa",
      "phedra",
      "stratos",
      "themav6",
    ],
    LandRover: [
      "defender",
      "discovery",
      "discovery sport",
      "range rover",
      "range rover evoque",
      "range rover sport",
      "range rover velar",
      "series i",
      "series ii",
      "series iii",
      "freelander",
      "lr2",
      "lr3",
      "lr4",
      "range rover classic",
      "range rover phev",
      "range rover sport phev",
      "series iia",
      "series iib",
      "series iic",
    ],
    LeadingIdeal: ["lx", "one", "su1"],
    Lexus: [
      "ct",
      "es",
      "gs",
      "gx",
      "is",
      "lc",
      "ls",
      "lx",
      "nx",
      "rc",
      "rx",
      "ux",
    ],
    Lincoln: [
      "aviator",
      "continental",
      "corsair",
      "marklt",
      "mkc",
      "mks",
      "mkt",
      "mkx",
      "mkz",
      "nautilus",
    ],
    Lotus: ["elan", "elise", "esprit", "evora", "exige"],
    Mg: [
      "3",
      "5",
      "6",
      "7",
      "ezs",
      "gs",
      "hs",
      "mg3",
      "mg5",
      "mg6",
      "mg7",
      "mg8",
      "mgzt",
      "tf",
      "xpower",
      "zr",
      "zs",
      "zsedan",
      "zt",
    ],
    Maserati: ["ghibli", "granturismo", "levante", "quattroporte"],
    Mazda: [
      "2",
      "3",
      "5",
      "6",
      "axela",
      "biante",
      "bt50",
      "cx3",
      "cx4",
      "cx5",
      "cx7",
      "cx8",
      "demio",
      "mazda3",
      "mazda5",
      "mazda6",
      "mx30",
      "mx5",
      "mx6",
      "premacy",
    ],
    Mercedes: [
      "aclass",
      "bclass",
      "cclass",
      "eclass",
      "sclass",
      "gle",
      "glc",
      "gla",
      "glb",
      "gls",
      "cla",
      "classe",
      "sclassmaybach",
      "eqc",
      "slc",
      "sl",
      "gclass",
      "xclass",
      "vclass",
      "marcopolo",
    ],
    Mini: [
      "clubman",
      "convertible",
      "cooper",
      "countryman",
      "coupe",
      "electric",
      "hardtop",
      "jcw",
      "johncooperworks",
      "paceman",
    ],
    Mitsubishi: [
      "3000gt",
      "asx",
      "diamante",
      "eclipsecross",
      "endeavor",
      "evo",
      "fuso",
      "galant",
      "gto",
      "i-miev",
      "l200",
      "lancer",
      "mirage",
      "montero",
      "outlander",
      "pajero",
      "raider",
      "ralliart",
      "spacestar",
      "starion",
    ],
    Mitsuoka: [
      "galue",
      "himiko",
      "le-seyde",
      "like-t3",
      "oroche",
      "rockstar",
      "ryugi",
      "viewt",
    ],
    Morgan: [
      "3wheeler",
      "4",
      "4/4",
      "aero8",
      "plus4",
      "plus6",
      "plus8",
      "roadster",
      "v6",
      "v8",
    ],
    Nio: ["ep7", "es8", "et7", "es6"],
    Nissan: [
      "240sx",
      "370z",
      "altima",
      "armada",
      "frontier",
      "gt-r",
      "juke",
      "kicks",
      "leaf",
      "maxima",
      "murano",
      "nv200",
      "pathfinder",
      "quest",
      "rogue",
      "roguesport",
      "sentra",
      "titan",
      "versa",
      "xtrail",
    ],
    Opel: [
      "adam",
      "amperae",
      "antara",
      "astra",
      "cascada",
      "combo",
      "corsa",
      "crosslandx",
      "grandlandx",
      "gt",
    ],

    Pontiac: [
      "bonneville",
      "firebird",
      "g3",
      "g5",
      "g6",
      "g8",
      "grandam",
      "grandprix",
      "gto",
      "montana",
    ],
    Porsche: [
      "718",
      "911",
      "918",
      "boxster",
      "cayenne",
      "cayman",
      "macan",
      "panamera",
      "taycan",
    ],
    Proton: [
      "exora",
      "inspira",
      "iriz",
      "persona",
      "preve",
      "saga",
      "suprima",
      "x70",
    ],
    Puch: ["mercedesbenzgd", "pinzgauer", "steyr", "v300"],
    Ranger: ["everest", "ranger"],
    Renault: [
      "captur",
      "clio",
      "duster",
      "espace",
      "floride",
      "kadjar",
      "kangoo",
      "koleos",
      "megane",
      "pulse",
      "sandero",
      "scenic",
      "talisman",
      "twingo",
      "zoe",
    ],
    RollsRoyce: ["cullinan", "dawn", "ghost", "phantom", "wraith"],
    Rover: [
      "defender",
      "discovery",
      "discovery sport",
      "freelander",
      "range rover",
      "range rover evoque",
      "range rover sport",
      "velar",
    ],
    Saab: [
      "9-2x",
      "9-3",
      "9-4x",
      "9-5",
      "900",
      "9000",
      "sonett",
      "v4",
      "96",
      "99",
    ],
    Samsung: [
      "sm3",
      "sm5",
      "sm6",
      "sm7",
      "qmx",
      "qm6",
      "qm5",
      "qm3",
      "equate",
      "renaultscala",
    ],
    Saic: [
      "mg3",
      "mg5",
      "mg6",
      "mg7",
      "mg8",
      "mgzt",
      "eroe",
      "maxusd60",
      "maxusd90",
      "maxusev80",
    ],
    Scania: [
      "a30",
      "g440",
      "k124",
      "k230",
      "k270",
      "k280",
      "k310",
      "k320",
      "k360",
      "k370",
      "k380",
      "k400",
      "k410",
      "k420",
      "k440",
      "k450",
      "k460",
      "k470",
      "k480",
      "k490",
    ],
    Seat: ["alhambra", "arona", "ateca", "ibiza", "leon", "mii", "tarraco"],
    Sera: ["sera"],
    Shuanghuan: ["bubble", "ceo", "sceo"],
    SinoTruck: ["howo", "steed"],
    Smart: ["eqfortwo", "eqforfour", "fortwo", "roadster"],
    Ssangyong: [
      "actyon",
      "chairman",
      "korando",
      "kyron",
      "musso",
      "rexton",
      "rodius",
      "tivoli",
      "xlv",
    ],
    Subaru: [
      "ascent",
      "baja",
      "brz",
      "chiffon",
      "crosstrek",
      "dex",
      "forester",
      "impreza",
      "justy",
      "legacy",
      "lucra",
      "outback",
      "r1",
      "r2",
      "sambar",
      "stella",
      "svx",
      "tribeca",
      "wrx",
      "xt",
    ],
    Suzuki: [
      "alto",
      "apv",
      "baleno",
      "carry",
      "celerio",
      "ciaz",
      "dzire",
      "ertiga",
      "escudo",
      "every",
      "grandvitara",
      "ignis",
      "jimny",
      "karimun",
      "kizashi",
      "lapin",
      "liana",
      "mrwagon",
      "palette",
      "solio",
    ],
    Tesla: [
      "model s",
      "model 3",
      "model x",
      "model y",
      "cybertruck",
      "roadster",
      "model 3 long range",
      "model s plaid",
      "model x plaid",
      "model s long range",
      "model y long range",
      "model 3 standard range plus",
      "model 3 performance",
      "model s performance",
      "model x long range",
      "model x performance",
      "model y performance",
      "model y standard range plus",
    ],
    Toyota: [
      "4runner",
      "86",
      "allex",
      "allion",
      "alphard",
      "avalon",
      "camry",
      "corolla",
      "highlander",
      "landcruiser",
      "prius",
      "rav4",
      "sienna",
      "tacoma",
      "tundra",
    ],
    Ud: ["condor", "quester", "quon"],
    Venucia: ["d50", "r50", "t60", "t70", "vx25", "xing", "zhang"],
    Voyah: [
      "espresso1",
      "espresso2",
      "espresso3",
      "espresso4",
      "espresso5",
      "im8",
      "im9",
      "m100",
      "m200",
      "m300",
    ],
    Volkswagen: [
      "amarok",
      "arteon",
      "beetle",
      "corrado",
      "golf",
      "id4",
      "jetta",
      "kombi",
      "passat",
      "phaeton",
      "polo",
      "scirocco",
      "sharan",
      "teramont",
      "tiguan",
      "touran",
      "touareg",
      "troc",
      "up",
      "golf",
    ],
    Volvo: [
      "s60",
      "s90",
      "v60",
      "v90",
      "xc40",
      "xc60",
      "xc90",
      "c30",
      "v40",
      "v50",
      "v70",
      "xc70",
      "s40",
      "xc50",
      "s40",
      "v40crosscountry",
      "v60crosscountry",
      "v90crosscountry",
      "xc60hybrid",
      "xc90hybrid",
    ],
  };

  const handleMakeChange = (e) => {
    setMake(e.target.value);
    setModel("");
  };

  return (
    <div className="max-w-6xl mx-auto px[120px] text-center  mt-11 px-3 py-4">
      <div className="rounded-lg grid grid-cols-2 lg:grid-cols-6 max-w-6xl mx-auto justify-center gap-3 items-center">
        <div className="text-[#d1d6d8]  flex flex-col justify-start items-start  w-full gap-2">
          <select
            className="select select-bordered w-full border-2 rounded-lg py-3 px-2"
            style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
            name="condition"
            value={searchCriteria.condition}
            onChange={handleSearchCriteriaChange}
          >
            <option value="" disabled selected>
              Conditon
            </option>
            <option value="new">New</option>
            <option value="used">Used</option>
            <option value="recondition">Recondition</option>
          </select>
        </div>

        <div className="text-[#d1d6d8] flex flex-col justify-start items-start w-full gap-2">
          <select
            className="select select-bordered w-full border-2 rounded-lg py-3 px-2"
            style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
            value={make}
            onChange={handleMakeChange}
          >
            <option value="" disabled defaultValue>
              Select Make
            </option>
            <option value="Abarth">Abarth</option>
            <option value="Aston Martin">Aston Martin</option>
            <option value="Audi">Audi</option>
            <option value="Autobianchi">Autobianchi</option>
            <option value="Baic">Baic</option>
            <option value="Bentley">Bentley</option>
            <option value="Bmw">BMW</option>
            <option value="Bmw Alpina">Bmw Alpina</option>
            <option value="Buick">Buick</option>
            <option value="Cadillac">Cadillac</option>
            <option value="Changan">Changan</option>
            <option value="Chery">Chery</option>
            <option value="Chevrolet">Chevrolet</option>
            <option value="Chrysler">Chrysler</option>
            <option value="Chrysler Jeep">Chrysler Jeep</option>
            <option value="Citroen">Citroen</option>
            <option value="Daf">Daf</option>
            <option value="Daimler">Daimler</option>
            <option value="Daihatsu">Daihatsu</option>
            <option value="Dodge">Dodge</option>
            <option value="Dong Feng">Dong Feng</option>
            <option value="Europe Ford">Europe Ford</option>
            <option value="Faw">Faw</option>
            <option value="Ferrari">Ferrari</option>
            <option value="Fiat">Fiat</option>
            <option value="Ford">Ford</option>
            <option value="Foton">Foton</option>
            <option value="Gac">Gac</option>
            <option value="Gelly">Gelly</option>
            <option value="Genesis">Genesis</option>
            <option value="Gmc">Gmc</option>
            <option value="Golden Dragon">Golden Dragon</option>
            <option value="Great Wall">Great Wall</option>
            <option value="Hino">Hino</option>
            <option value="Honda">Honda</option>
            <option value="Hummer">Hummer</option>
            <option value="Hyundai">Hyundai</option>
            <option value="Infiniti">Infiniti</option>
            <option value="Iveco">Iveco</option>
            <option value="Jac">Jac</option>
            <option value="Jaguar">Jaguar</option>
            <option value="Jeep">Jeep</option>
            <option value="Kia">Kia</option>
            <option value="Kinglong">Kinglong</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="Lancia">Lancia</option>
            <option value="Land Rover">Land Rover</option>
            <option value="Leapmotor">Leapmotor</option>
            <option value="Lexus">Lexus</option>
            <option value="Lincoln">Lincoln</option>
            <option value="Lotus">Lotus</option>
            <option value="Maserati">Maserati</option>
            <option value="Mazda">Mazda</option>
            <option value="Mercedes">Mercedes</option>
            <option value="Mini">Mini</option>
            <option value="Mitsuoka">Mitsuoka</option>
            <option value="Mitsubishi">Mitsubishi</option>
            <option value="Morgan">Morgan</option>
            <option value="Nio">Nio</option>
            <option value="Nissan">Nissan</option>
            <option value="Opel">Opel</option>
            <option value="Peugeot">Peugeot</option>
            <option value="Pontiac">Pontiac</option>
            <option value="Porsche">Porsche</option>
            <option value="Renault">Renault</option>
            <option value="Rolls Royce">Rolls Royce</option>
            <option value="Rover">Rover</option>
            <option value="Saab">Saab</option>
            <option value="Saic">Saic</option>
            <option value="Samsung">Samsung</option>
            <option value="Ssangyong">Ssangyong</option>
            <option value="Scania">Scania</option>
            <option value="Smart">Smart</option>
            <option value="Sino Truck">Sino Truck</option>
            <option value="Subaru">Subaru</option>
            <option value="Suzuki">Suzuki</option>
            <option value="Tesla">Tesla</option>
            <option value="Toyota">Toyota</option>
            <option value="Ud">Ud</option>
            <option value="Venucia">Venucia</option>
            <option value="Volkswagen">Volkswagen</option>
            <option value="Volvo">Volvo</option>
            <option value="Voyah">Voyah</option>
            <option value="Xpeng">Xpeng</option>

            {/* Add other makes here */}
          </select>
        </div>

        <div className="text-[#d1d6d8] flex flex-col justify-start items-start w-full gap-2">
          <select
            className="select select-bordered w-full border-2 rounded-lg py-3 px-2"
            style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
            value={model}
            onChange={(e) => setModel(e.target.value)}
            disabled={!make}
          >
            <option value="" disabled defaultValue>
              {make ? `Select ${make}'s Models` : "Select Models"}
            </option>
            {make &&
              modelsByMake[make].map((carModel) => (
                <option key={carModel} value={carModel}>
                  {carModel}
                </option>
              ))}
          </select>
        </div>

        <div className="text-[#d1d6d8]  flex flex-col justify-start items-start w-full  gap-2">
          <input
            className="border-2 rounded-lg py-3 px-2 w-full"
            style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
            type="text"
            placeholder="Enter Model Code"
            value={modelCode}
            onChange={handleModelCodeChange}
          />
        </div>

        <div className="flex flex-col justify-start items-start w-full gap-2">
          <div className="flex flex-row lg:flex-row items-center text-black w-full gap-4">
            <div className="flex items-center text-[#aec1cc]">
              <div
                onClick={toggleAdvancedSettings}
                className="flex cursor-pointer"
              >
                <CiSettings className="text-5xl" /> Advanced <br /> Search
              </div>
            </div>
            <button
              onClick={handleSearchClick}
              className="p-3 bg-[#dee5ec79] text-white rounded-lg px-7 flex flex-row justify-between gap-3 items-center"
            >
              <FaSearch />
              Search
            </button>
          </div>
        </div>
      </div>
      {/* advanced setting  */}
      {showAdvancedSettings && (
        <div className="rounded-lg grid grid-cols-2 lg:grid-cols-5  max-w-[980px]  justify-start gap-2 items-center mt-4">
          {/* Category */}
          <div className="text-[#d1d6d8] flex flex-col justify-start items-start w-full gap-2">
            <select
              className="select select-bordered w-full border-2 rounded-lg py-3 px-2"
              style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
              name="category" // Match the input name to the state property
              value={searchCriteria.category} // Set value from state
              onChange={handleSearchCriteriaChange}
            >
              <option value="" disabled selected>
                Category
              </option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Compact">Compact</option> {/* Updated category */}
              <option value="Truck">Truck</option> {/* Updated category */}
              <option value="Coupe">Coupe</option>
              <option value="Convertible">Convertible</option>{" "}
              {/* New category */}
              <option value="Hatchback">Hatchback</option> {/* New category */}
              {/* Include additional categories as necessary */}
            </select>
          </div>

          {/* Drive Type */}
          <div className="text-[#d1d6d8] flex flex-col justify-start items-start w-full gap-2">
            <select
              className="select select-bordered w-full border-2 rounded-lg py-3 px-2"
              style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
              name="driveType" // Match the input name to the state property
              value={searchCriteria.driveType} // Set value from state
              onChange={handleSearchCriteriaChange}
            >
              <option value="" disabled selected>
                Drive Type
              </option>
              <option value="4WD">4-Wheel Drive (4WD)</option>
              <option value="AWD">All-Wheel Drive (AWD)</option>
              <option value="FWD">Front-Wheel Drive (FWD)</option>
              <option value="RWD">Rear-Wheel Drive (RWD)</option>
              <option value="6WD">6-Wheel Drive (6WD)</option>{" "}
              {/* New drive type */}
              <option value="Part-Time 4WD">Part-Time 4WD</option>{" "}
              {/* New drive type */}
              {/* You can continue adding more options as needed */}
            </select>
          </div>

          <div className="mr-2">
            <input
              className="border-2 w-full lg:w-[188px] rounded-lg px-2 text-[#aec1cc] py-3"
              style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
              type="number"
              name="minPrice"
              value={minPrice}
              placeholder="Min Price"
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
          <div className="ml-2">
            <input
              className="border-2 w-full lg:w-[178px] rounded-lg px-2 text-[#aec1cc] py-3"
              style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
              type="number"
              name="maxPrice"
              value={maxPrice}
              placeholder="Max Price"
              onChange={(e) => setMaxPrice(e.target.value)}
            />
          </div>
          {/* Fuel Type */}
          <div className="text-[#d1d6d8] flex flex-col justify-start items-start w-full gap-2">
            <select
              className="select select-bordered w-full border-2 rounded-lg py-3 px-2"
              style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
              name="fuelType" // Match the input name to the state property
              value={searchCriteria.fuelType} // Set value from state
              onChange={handleSearchCriteriaChange}
            >
              <option value="" disabled selected>
                Fuel-Type:
              </option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="lpg">LPG</option>
              <option value="cng">CNG</option>
              <option value="electric-vehicles">Electric Vehicles</option>
              <option value="hybrid-petrol">Hybrid(petrol)</option>
              <option value="hybrid-diesel">Hybrid(diesel)</option>
              <option value="plugin-hybrid-petrol">
                Plug-in Hybrid(petrol)
              </option>
              <option value="plugin-hybrid-diesel">
                Plug-in Hybrid(diesel)
              </option>
              <option value="fuel_cell_hydrogen">Fuel Cell (hydrogen)</option>
              <option value="lng">LNG</option>
            </select>
          </div>

          {/* Cylinder */}
          <div className="text-[#d1d6d8] flex flex-col justify-start items-start w-full gap-2">
            <select
              className="select select-bordered w-full border-2 rounded-lg py-3 px-2"
              style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
              name="cylinder" // Match the input name to the state property
              value={searchCriteria.cylinder} // Set value from state
              onChange={handleSearchCriteriaChange}
            >
              <option value="" disabled selected>
                Cylinder
              </option>
              <option value="4">1 Cylinder</option>
              <option value="4">2 Cylinder</option>
              <option value="4">3 Cylinder</option>
              <option value="4">4 Cylinder</option>
              <option value="4">5 Cylinder</option>
              <option value="6">6 Cylinder</option>
              <option value="6">7 Cylinder</option>
              <option value="8">8 Cylinder</option>
              {/* Add other cylinder type options if needed */}
            </select>
          </div>

          {/* Transmission */}
          <div className="text-[#d1d6d8] flex flex-col justify-start items-start w-full gap-2">
            <select
              className="select select-bordered w-full border-2 rounded-lg py-3 px-2"
              style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
              name="transmission" // Match the input name to the state property
              value={searchCriteria.transmission} // Set value from state
              onChange={handleSearchCriteriaChange}
            >
              <option value="" disabled selected>
                Transmission:
              </option>
              <option value="6">Automatic</option>
              <option value="7">Manual</option>
              <option value="64">Smoother</option>
              <option value="65">Semi AT</option>
              <option value="66">Inomat</option>
              <option value="67">Duonic</option>
              <option value="68">Escot</option>
              <option value="69">Proshift</option>
            </select>
          </div>

          {/* Door */}
          <div className="text-[#d1d6d8] flex flex-col justify-start items-start w-full gap-2">
            <select
              className="select select-bordered w-full border-2 rounded-lg py-3 px-2"
              style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
              name="doorCount" // Match the input name to the state property
              value={searchCriteria.doorCount} // Set value from state
              onChange={handleSearchCriteriaChange}
            >
              <option value="" disabled selected>
                Door Count
              </option>
              <option value="2">2 Doors</option>
              <option value="4">4 Doors</option>
              <option value="other">Other</option>
              <option value="3">3 Doors</option> {/* New door count */}
              <option value="5">5 Doors</option> {/* New door count */}
              {/* You can continue adding more options as needed */}
            </select>
          </div>

          {/* Color */}
          <div className="text-[#d1d6d8] flex flex-col justify-start items-start w-full gap-2">
            <select
              className="select select-bordered w-full border-2 rounded-lg py-3 px-2"
              style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
              name="color" // Match the input name to the state property
              value={searchCriteria.color} // Set value from state
              onChange={handleSearchCriteriaChange}
            >
              <option value="" disabled selected>
                Exterior Color
              </option>
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="silver">Silver</option>
              <option value="green">Green</option>{" "}
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
              <option value="purple">Purple</option>
              <option value="gray">Gray</option>{" "}
              {/* Add more color options as needed */}
            </select>
          </div>

          <div className="text-[#d1d6d8] flex flex-col justify-start items-start w-full gap-2">
            <input
              type="text"
              id="engineSize"
              style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
              className="w-full border border-gray-300 rounded px-3 py-2"
              placeholder="Engine Size"
              value={selectedEngineSize}
              onChange={(e) => setSelectedEngineSize(e.target.value)}
            />
          </div>
          <div className="text-[#d1d6d8] flex flex-col justify-start items-start w-full gap-2">
            <input
              className="border-2 w-full lg:w-[190px] rounded-lg px-2 text-[#d1d6d8] py-3"
              style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
              type="text"
              name="ccFrom"
              value={ccFrom}
              placeholder="CC From"
              onChange={(e) => setCcFrom(e.target.value)}
            />
          </div>
          <div className="text-[#d1d6d8]  flex flex-col justify-start items-start  w-full gap-2">
            <select
              className="select select-bordered w-full border-2 rounded-lg py-3 px-2"
              style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
              name="selectedEngineType"
              value={searchCriteria.selectedEngineType}
              onChange={handleSearchCriteriaChange}
            >
              <option value="" disabled selected>
                Engine Type:
              </option>
              <option value="*">*</option>
              <option value="02978539N55B30A">02978539n55b30a</option>
              <option value="05569152N55B30A">05569152n55b30a</option>
              <option value="060913001424204PT">060913001424204pt</option>
              <option value="07758697N55B30A">07758697n55b30a</option>
              <option value="080913002103204PT">080913002103204pt</option>
              <option value="09788221N55B30A">09788221n55b30a</option>
              <option value="098884B80N52B30AF">098884b80n52b30af</option>
              <option value="10JBEB0055143">10jbeb0055143</option>
              <option value="10JBEB0055144">10jbeb0055144</option>
              <option value="10JBEM0187878">10jbem0187878</option>
              <option value="10JBHF3009357">10jbhf3009357</option>
              <option value="112">112</option>
              <option value="112M26">112m26</option>
              <option value="113">113</option>
              <option value="113M55">113m55</option>
              <option value="11418974N55B30A">11418974n55b30a</option>
              <option value="11B">11b</option>
              <option value="12A">12a</option>
              <option value="130913164520204PT">130913164520204pt</option>
              <option value="13B">13b</option>
              <option value="13B-MSP">13b-msp</option>
              <option value="13B-REW">13b-rew</option>
              <option value="14B">14b</option>
              <option value="15B">15b</option>
              <option value="169A3">169a3</option>
              <option value="169A4">169a4</option>
              <option value="177">177</option>
              <option value="181013200537204PT">181013200537204pt</option>
              <option value="198A30006875480">198a30006875480</option>
              <option value="199A20003252721">199a20003252721</option>
              <option value="1A30">1a30</option>
              <option value="1AR1248826">1ar1248826</option>
              <option value="1AZ">1az</option>
              <option value="1AZE267037">1aze267037</option>
              <option value="1AZE277418">1aze277418</option>
              <option value="1AZE280607">1aze280607</option>
              <option value="1AZE282893">1aze282893</option>
              <option value="1AZ-FSE">1az-fse</option>
              <option value="1G">1g</option>
              <option value="1GD">1gd</option>
              <option value="1GD-FTV">1gd-ftv</option>
              <option value="1G-FE">1g-fe</option>
              <option value="1G-GE">1g-ge</option>
              <option value="1GR">1gr</option>
              <option value="1GR-FE">1gr-fe</option>
              <option value="1GZ-FE">1gz-fe</option>
              <option value="1HD">1hd</option>
              <option value="1HZ">1hz</option>
              <option value="1JZ">1jz</option>
              <option value="1JZ-GE">1jz-ge</option>
              <option value="1JZ-GTE">1jz-gte</option>
              <option value="1KD">1kd</option>
              <option value="1KD1694036">1kd1694036</option>
              <option value="1KD1742138">1kd1742138</option>
              <option value="1KD1826207">1kd1826207</option>
              <option value="1KD1829607">1kd1829607</option>
              <option value="1KD1830576">1kd1830576</option>
              <option value="1KD1856301">1kd1856301</option>
              <option value="1KD1860141">1kd1860141</option>
              <option value="1KD1871882">1kd1871882</option>
              <option value="1KD1880272">1kd1880272</option>
              <option value="1KD1920769">1kd1920769</option>
              <option value="1KD1951256">1kd1951256</option>
              <option value="1KD2200144">1kd2200144</option>
              <option value="1KD2275684">1kd2275684</option>
              <option value="1KD2295062">1kd2295062</option>
              <option value="1KD2301115">1kd2301115</option>
              <option value="1KD2305146">1kd2305146</option>
              <option value="1KD2305831">1kd2305831</option>
              <option value="1KD2316409">1kd2316409</option>
              <option value="1KD2337909">1kd2337909</option>
              <option value="1KD2394213">1kd2394213</option>
              <option value="1KD-FTV">1kd-ftv</option>
              <option value="1KR">1kr</option>
              <option value="1KR-FE">1kr-fe</option>
              <option value="1KR-VET">1kr-vet</option>
              <option value="1KZ">1kz</option>
              <option value="1KZ-TE">1kz-te</option>
              <option value="1MZ">1mz</option>
              <option value="1MZ-FE">1mz-fe</option>
              <option value="1NR">1nr</option>
              <option value="1NR-FE">1nr-fe</option>
              <option value="1NR-FKE">1nr-fke</option>
              <option value="1NZ">1nz</option>
              <option value="1NZ-1LM">1nz-1lm</option>
              <option value="1NZ-2LM">1nz-2lm</option>
              <option value="1NZ-3CM">1nz-3cm</option>
              <option value="1NZC910500">1nzc910500</option>
              <option value="1NZD164415">1nzd164415</option>
              <option value="1NZD182260">1nzd182260</option>
              <option value="1NZD184343">1nzd184343</option>
              <option value="1NZ-FE">1nz-fe</option>
              <option value="1NZ-FXE">1nz-fxe</option>
              <option value="1NZX816569">1nzx816569</option>
              <option value="1RZ">1rz</option>
              <option value="1SZ">1sz</option>
              <option value="1TR">1tr</option>
              <option value="1TR-FE">1tr-fe</option>
              <option value="1UR">1ur</option>
              <option value="1UR-FE">1ur-fe</option>
              <option value="1UZ-FE">1uz-fe</option>
              <option value="1ZZ">1zz</option>
              <option value="1ZZ3153170">1zz3153170</option>
              <option value="1ZZ-FE">1zz-fe</option>
              <option value="204PT">204pt</option>
              <option value="226S">226s</option>
              <option value="256S">256s</option>
              <option value="266">266</option>
              <option value="270">270</option>
              <option value="27091030233630">27091030233630</option>
              <option value="27091030242989">27091030242989</option>
              <option value="27091030273293">27091030273293</option>
              <option value="27091030357454">27091030357454</option>
              <option value="271">271</option>
              <option value="272M25">272m25</option>
              <option value="272M30">272m30</option>
              <option value="273">273</option>
              <option value="274">274</option>
              <option value="27491030104174">27491030104174</option>
              <option value="27491030126942">27491030126942</option>
              <option value="27491030129201">27491030129201</option>
              <option value="27491030236890">27491030236890</option>
              <option value="27492030062149">27492030062149</option>
              <option value="27492030063477">27492030063477</option>
              <option value="27492030066756">27492030066756</option>
              <option value="27492030070420">27492030070420</option>
              <option value="27492030072570">27492030072570</option>
              <option value="27492030079011">27492030079011</option>
              <option value="27492030079687">27492030079687</option>
              <option value="27492030084362">27492030084362</option>
              <option value="27492030084897">27492030084897</option>
              <option value="27492030085740">27492030085740</option>
              <option value="27492030093903">27492030093903</option>
              <option value="27492030097077">27492030097077</option>
              <option value="27492030103006">27492030103006</option>
              <option value="27492030106260">27492030106260</option>
              <option value="27492030113665">27492030113665</option>
              <option value="27492030116427">27492030116427</option>
              <option value="27492030119230">27492030119230</option>
              <option value="27492030119317">27492030119317</option>
              <option value="27492030120805">27492030120805</option>
              <option value="27492030121784">27492030121784</option>
              <option value="27492030131765">27492030131765</option>
              <option value="27492030147448">27492030147448</option>
              <option value="274M16">274m16</option>
              <option value="276">276</option>
              <option value="27682030166947">27682030166947</option>
              <option value="27682130042430">27682130042430</option>
              <option value="27696030581745">27696030581745</option>
              <option value="27696930629054">27696930629054</option>
              <option value="276M30">276m30</option>
              <option value="2A">2a</option>
              <option value="2AR">2ar</option>
              <option value="2AR0973640">2ar0973640</option>
              <option value="2AR-1KM">2ar-1km</option>
              <option value="2AR-2JM">2ar-2jm</option>
              <option value="2AR-2JM-2FM">2ar-2jm-2fm</option>
              <option value="2ARE730758">2are730758</option>
              <option value="2ARE735287">2are735287</option>
              <option value="2AR-FE">2ar-fe</option>
              <option value="2AR-FSE">2ar-fse</option>
              <option value="2AR-FXE">2ar-fxe</option>
              <option value="2ARU031398">2aru031398</option>
              <option value="2ARU091314">2aru091314</option>
              <option value="2ARU184771">2aru184771</option>
              <option value="2ARU270323">2aru270323</option>
              <option value="2AZ">2az</option>
              <option value="2AZ5809487">2az5809487</option>
              <option value="2AZC338178">2azc338178</option>
              <option value="2AZF985349">2azf985349</option>
              <option value="2AZ-FE">2az-fe</option>
              <option value="2AZ-FXE">2az-fxe</option>
              <option value="2AZG237923">2azg237923</option>
              <option value="2AZG240925">2azg240925</option>
              <option value="2AZG386124">2azg386124</option>
              <option value="2AZH985296">2azh985296</option>
              <option value="2AZH987839">2azh987839</option>
              <option value="2AZH992797">2azh992797</option>
              <option value="2AZJ002165">2azj002165</option>
              <option value="2AZJ015001">2azj015001</option>
              <option value="2AZJ016239">2azj016239</option>
              <option value="2AZJ016418">2azj016418</option>
              <option value="2AZJ020300">2azj020300</option>
              <option value="2AZJ020909">2azj020909</option>
              <option value="2AZJ022838">2azj022838</option>
              <option value="2AZJ025509">2azj025509</option>
              <option value="2AZJ027870">2azj027870</option>
              <option value="2AZJ029789">2azj029789</option>
              <option value="2AZJ030251">2azj030251</option>
              <option value="2AZJ031493">2azj031493</option>
              <option value="2AZJ031557">2azj031557</option>
              <option value="2AZJ034811">2azj034811</option>
              <option value="2AZJ042893">2azj042893</option>
              <option value="2GD">2gd</option>
              <option value="2GD-FTV">2gd-ftv</option>
              <option value="2GR">2gr</option>
              <option value="2GR-FE">2gr-fe</option>
              <option value="2GR-FSE">2gr-fse</option>
              <option value="2GR-FXE">2gr-fxe</option>
              <option value="2GR-FXS">2gr-fxs</option>
              <option value="2JZ-GE">2jz-ge</option>
              <option value="2JZ-GTE">2jz-gte</option>
              <option value="2KD">2kd</option>
              <option value="2KD5538041">2kd5538041</option>
              <option value="2KD-FTV">2kd-ftv</option>
              <option value="2L">2l</option>
              <option value="2NR">2nr</option>
              <option value="2NR-FKE">2nr-fke</option>
              <option value="2NZ">2nz</option>
              <option value="2NZ-FE">2nz-fe</option>
              <option value="2RZ">2rz</option>
              <option value="2RZ-E">2rz-e</option>
              <option value="2SZ">2sz</option>
              <option value="2SZ-FE">2sz-fe</option>
              <option value="2TR">2tr</option>
              <option value="2TR6687888">2tr6687888</option>
              <option value="2TR-FE">2tr-fe</option>
              <option value="2UR-GSE">2ur-gse</option>
              <option value="2UZ">2uz</option>
              <option value="2UZ-FE">2uz-fe</option>
              <option value="2Y">2y</option>
              <option value="2ZR">2zr</option>
              <option value="2ZR-1NM">2zr-1nm</option>
              <option value="2ZR-3JM">2zr-3jm</option>
              <option value="2ZR5886262">2zr5886262</option>
              <option value="2ZR-5JM">2zr-5jm</option>
              <option value="2ZR-FAE">2zr-fae</option>
              <option value="2ZR-FE">2zr-fe</option>
              <option value="2ZR-FXE">2zr-fxe</option>
              <option value="2ZZ">2zz</option>
              <option value="312A2">312a2</option>
              <option value="3A90">3a90</option>
              <option value="3A92">3a92</option>
              <option value="3B">3b</option>
              <option value="3B20">3b20</option>
              <option value="3C">3c</option>
              <option value="3C3979748">3c3979748</option>
              <option value="3C3982409">3c3982409</option>
              <option value="3C3984020">3c3984020</option>
              <option value="3C3984433">3c3984433</option>
              <option value="3G83">3g83</option>
              <option value="3GR">3gr</option>
              <option value="3GR0254600">3gr0254600</option>
              <option value="3L">3l</option>
              <option value="3RZ">3rz</option>
              <option value="3RZ-FE">3rz-fe</option>
              <option value="3S">3s</option>
              <option value="3S-FE">3s-fe</option>
              <option value="3S-GE">3s-ge</option>
              <option value="3S-GTE">3s-gte</option>
              <option value="3SZ">3sz</option>
              <option value="3SZ2059863">3sz2059863</option>
              <option value="3SZ2145223">3sz2145223</option>
              <option value="3SZ2170387">3sz2170387</option>
              <option value="3SZ2211990">3sz2211990</option>
              <option value="3SZ-VE">3sz-ve</option>
              <option value="3UR-FE">3ur-fe</option>
              <option value="3UZ-FE">3uz-fe</option>
              <option value="3Y">3y</option>
              <option value="3Y-E">3y-e</option>
              <option value="3ZR">3zr</option>
              <option value="3ZR4159649">3zr4159649</option>
              <option value="3ZRB425815">3zrb425815</option>
              <option value="3ZR-FAE">3zr-fae</option>
              <option value="3ZR-FE">3zr-fe</option>
              <option value="4031853224DT">4031853224dt</option>
              <option value="4041195224DT">4041195224dt</option>
              <option value="4A30">4a30</option>
              <option value="4A31">4a31</option>
              <option value="4A90">4a90</option>
              <option value="4A-FE">4a-fe</option>
              <option value="4A-GE">4a-ge</option>
              <option value="4A-GZELU">4a-gzelu</option>
              <option value="4B">4b</option>
              <option value="4B10">4b10</option>
              <option value="4B11">4b11</option>
              <option value="4B11-S61-Y61">4b11-s61-y61</option>
              <option value="4B12">4b12</option>
              <option value="4B40">4b40</option>
              <option value="4BC2">4bc2</option>
              <option value="4BE1">4be1</option>
              <option value="4D31">4d31</option>
              <option value="4D32">4d32</option>
              <option value="4D33">4d33</option>
              <option value="4D34">4d34</option>
              <option value="4D35">4d35</option>
              <option value="4D36">4d36</option>
              <option value="4D56">4d56</option>
              <option value="4D56UCFU5730">4d56ucfu5730</option>
              <option value="4DR5">4dr5</option>
              <option value="4DR7">4dr7</option>
              <option value="4E">4e</option>
              <option value="4E-FE">4e-fe</option>
              <option value="4G63">4g63</option>
              <option value="4G69">4g69</option>
              <option value="4G93">4g93</option>
              <option value="4G94">4g94</option>
              <option value="4GR">4gr</option>
              <option value="4GR0446827">4gr0446827</option>
              <option value="4GR0529731">4gr0529731</option>
              <option value="4GR0862472">4gr0862472</option>
              <option value="4GR0975676">4gr0975676</option>
              <option value="4GR0984759">4gr0984759</option>
              <option value="4GR-FSE">4gr-fse</option>
              <option value="4GRO0933617">4gro0933617</option>
              <option value="4HF1">4hf1</option>
              <option value="4HG1">4hg1</option>
              <option value="4HK1">4hk1</option>
              <option value="4HK1100444">4hk1100444</option>
              <option value="4HL1">4hl1</option>
              <option value="4J10">4j10</option>
              <option value="4J11">4j11</option>
              <option value="4J12">4j12</option>
              <option value="4JG2">4jg2</option>
              <option value="4JJ1">4jj1</option>
              <option value="4JJ1391767">4jj1391767</option>
              <option value="4JJ1580652">4jj1580652</option>
              <option value="4JJ1746972">4jj1746972</option>
              <option value="4JJ1797258">4jj1797258</option>
              <option value="4JJ1806321">4jj1806321</option>
              <option value="4JM">4jm</option>
              <option value="4JZ1">4jz1</option>
              <option value="4M40">4m40</option>
              <option value="4M41">4m41</option>
              <option value="4M42">4m42</option>
              <option value="4M42A47018">4m42a47018</option>
              <option value="4M42A60335">4m42a60335</option>
              <option value="4M42A91074">4m42a91074</option>
              <option value="4M50">4m50</option>
              <option value="4M51">4m51</option>
              <option value="4M5O">4m5o</option>
              <option value="4N14">4n14</option>
              <option value="4P10">4p10</option>
              <option value="4P10A84598">4p10a84598</option>
              <option value="4P10A95232">4p10a95232</option>
              <option value="4P10A96716">4p10a96716</option>
              <option value="4P10A99923">4p10a99923</option>
              <option value="4P10B00123">4p10b00123</option>
              <option value="5A">5a</option>
              <option value="5A-FE">5a-fe</option>
              <option value="5E">5e</option>
              <option value="5E-FE">5e-fe</option>
              <option value="5E-FHE">5e-fhe</option>
              <option value="5F01">5f01</option>
              <option value="5F02">5f02</option>
              <option value="5K">5k</option>
              <option value="5L">5l</option>
              <option value="5L5332595">5l5332595</option>
              <option value="5L5344249">5l5344249</option>
              <option value="5L5361809">5l5361809</option>
              <option value="5L5367513">5l5367513</option>
              <option value="5L5389421">5l5389421</option>
              <option value="5L5393602">5l5393602</option>
              <option value="5L5431259">5l5431259</option>
              <option value="5L5456339">5l5456339</option>
              <option value="5L5468830">5l5468830</option>
              <option value="5L5522365">5l5522365</option>
              <option value="5L5536267">5l5536267</option>
              <option value="5L5582115">5l5582115</option>
              <option value="5VZ">5vz</option>
              <option value="5VZ-FE">5vz-fe</option>
              <option value="63828447">63828447</option>
              <option value="642">642</option>
              <option value="651">651</option>
              <option value="65195531276355">65195531276355</option>
              <option value="6B31">6b31</option>
              <option value="6D16">6d16</option>
              <option value="6D17">6d17</option>
              <option value="6G72">6g72</option>
              <option value="6G74">6g74</option>
              <option value="6G75">6g75</option>
              <option value="6HE1">6he1</option>
              <option value="6HL1">6hl1</option>
              <option value="6M60">6m60</option>
              <option value="6M61">6m61</option>
              <option value="6M70">6m70</option>
              <option value="6M70430841">6m70430841</option>
              <option value="6R10">6r10</option>
              <option value="6VE1">6ve1</option>
              <option value="6WG1417178">6wg1417178</option>
              <option value="6WG1419891">6wg1419891</option>
              <option value="7492030242392">7492030242392</option>
              <option value="7A">7a</option>
              <option value="7K">7k</option>
              <option value="7M-GE">7m-ge</option>
              <option value="8AR">8ar</option>
              <option value="8AR-FTS">8ar-fts</option>
              <option value="8DC11">8dc11</option>
              <option value="8DC9">8dc9</option>
              <option value="8GR-FXS">8gr-fxs</option>
              <option value="8NR">8nr</option>
              <option value="A">A</option>
              <option value="A12">A12</option>
              <option value="A25A-3NM">A25a-3nm</option>
              <option value="A25A-FXS">A25a-fxs</option>
              <option value="A4820688N20B20A">A4820688n20b20a</option>
              <option value="A5320600N20B20A">A5320600n20b20a</option>
              <option value="A8140661N20B20A">A8140661n20b20a</option>
              <option value="A8310767N20B20A">A8310767n20b20a</option>
              <option value="A9850614N20B20A">A9850614n20b20a</option>
              <option value="ANH100185702">Anh100185702</option>
              <option value="AWU">Awu</option>
              <option value="B">B</option>
              <option value="B0120456N20B20B">B0120456n20b20b</option>
              <option value="B16A">B16a</option>
              <option value="B18C">B18c</option>
              <option value="B20B">B20b</option>
              <option value="B312J527N13B16A">B312j527n13b16a</option>
              <option value="B38A15A">B38a15a</option>
              <option value="B38B15A">B38b15a</option>
              <option value="B4164T">B4164t</option>
              <option value="B4164T1146684">B4164t1146684</option>
              <option value="B4164T4134427">B4164t4134427</option>
              <option value="B420">B420</option>
              <option value="B4204T">B4204t</option>
              <option value="B4204T110006869">B4204t110006869</option>
              <option value="B4204T111077823">B4204t111077823</option>
              <option value="B47D20A">B47d20a</option>
              <option value="B48A20A">B48a20a</option>
              <option value="B48A20B">B48a20b</option>
              <option value="B48B20A">B48b20a</option>
              <option value="B48B20B">B48b20b</option>
              <option value="B6">B6</option>
              <option value="B6324">B6324</option>
              <option value="B6324S">B6324s</option>
              <option value="B6430586N20B20A">B6430586n20b20a</option>
              <option value="B6740665N20B20A">B6740665n20b20a</option>
              <option value="B6960665N20B20B">B6960665n20b20b</option>
              <option value="B6-ZE[RS]">B6-ze[rs]</option>
              <option value="B8360588N20B20B">B8360588n20b20b</option>
              <option value="BBY">Bby</option>
              <option value="BD30">Bd30</option>
              <option value="BDV">Bdv</option>
              <option value="BHK">Bhk</option>
              <option value="BLF">Blf</option>
              <option value="BLG">Blg</option>
              <option value="BLP">Blp</option>
              <option value="BLX">Blx</option>
              <option value="BMY">Bmy</option>
              <option value="BTS">Bts</option>
              <option value="BUB">Bub</option>
              <option value="BUD">Bud</option>
              <option value="BVY">Bvy</option>
              <option value="BWA">Bwa</option>
              <option value="BWA206100">Bwa206100</option>
              <option value="BYD487ZQA">Byd487zqa</option>
              <option value="CAD">Cad</option>
              <option value="CAF483Q0">Caf483q0</option>
              <option value="CAV">Cav</option>
              <option value="CAW">Caw</option>
              <option value="CAX">Cax</option>
              <option value="CAXB46945">Caxb46945</option>
              <option value="CAYE59113">Caye59113</option>
              <option value="CAYZ21421">Cayz21421</option>
              <option value="CAYZ21539">Cayz21539</option>
              <option value="CBZ">Cbz</option>
              <option value="CCZ">Ccz</option>
              <option value="CCZ369065">Ccz369065</option>
              <option value="CCZ438024">Ccz438024</option>
              <option value="CDH">Cdh</option>
              <option value="CDN">Cdn</option>
              <option value="CDN358672">Cdn358672</option>
              <option value="CDN362544">Cdn362544</option>
              <option value="CDN364484">Cdn364484</option>
              <option value="CDN378024">Cdn378024</option>
              <option value="CFS">Cfs</option>
              <option value="CG13">Cg13</option>
              <option value="CG13DE">Cg13de</option>
              <option value="CGG">Cgg</option>
              <option value="CGR033637">Cgr033637</option>
              <option value="CHH">Chh</option>
              <option value="CHH003212">Chh003212</option>
              <option value="CHH015327">Chh015327</option>
              <option value="CHP">Chp</option>
              <option value="CHP013809">Chp013809</option>
              <option value="CHY">Chy</option>
              <option value="CJT">Cjt</option>
              <option value="CJT143373">Cjt143373</option>
              <option value="CJZ">Cjz</option>
              <option value="CNC">Cnc</option>
              <option value="CPS">Cps</option>
              <option value="CPT">Cpt</option>
              <option value="CR12">Cr12</option>
              <option value="CR12DE">Cr12de</option>
              <option value="CTH">Cth</option>
              <option value="CTH093589">Cth093589</option>
              <option value="CTH102131">Cth102131</option>
              <option value="CX5015347">Cx5015347</option>
              <option value="CXS">Cxs</option>
              <option value="CXS037797">Cxs037797</option>
              <option value="CXS038872">Cxs038872</option>
              <option value="CYP">Cyp</option>
              <option value="D15B">D15b</option>
              <option value="D16A">D16a</option>
              <option value="D4162T2695752">D4162t2695752</option>
              <option value="D4162T2776318">D4162t2776318</option>
              <option value="D4CB9518868">D4cb9518868</option>
              <option value="D4CBD286582">D4cbd286582</option>
              <option value="D4CBD389975">D4cbd389975</option>
              <option value="D4HBGH281980">D4hbgh281980</option>
              <option value="D5">D5</option>
              <option value="DAX">Dax</option>
              <option value="DT306">Dt306</option>
              <option value="E07A">E07a</option>
              <option value="E07Z">E07z</option>
              <option value="E13C">E13c</option>
              <option value="EF">Ef</option>
              <option value="EF-DET">Ef-det</option>
              <option value="EF-NS">Ef-ns</option>
              <option value="EF-SE">Ef-se</option>
              <option value="EF-VE">Ef-ve</option>
              <option value="EJ15">Ej15</option>
              <option value="EJ20">Ej20</option>
              <option value="EJ25">Ej25</option>
              <option value="EL15">El15</option>
              <option value="Electric">Electric</option>
              <option value="EM57">Em57</option>
              <option value="EN07">En07</option>
              <option value="EV">Ev</option>
              <option value="F16D3">F16d3</option>
              <option value="F21C">F21c</option>
              <option value="F22B">F22b</option>
              <option value="F33A-FTV">F33a-ftv</option>
              <option value="F6A">F6a</option>
              <option value="F8">F8</option>
              <option value="FA20">Fa20</option>
              <option value="FA20G821395">Fa20g821395</option>
              <option value="FA20G904282">Fa20g904282</option>
              <option value="FA20G993769">Fa20g993769</option>
              <option value="FA20H827694">Fa20h827694</option>
              <option value="FA20H914884">Fa20h914884</option>
              <option value="FB16">Fb16</option>
              <option value="FB161255931">Fb161255931</option>
              <option value="FB161257633">Fb161257633</option>
              <option value="FB20">Fb20</option>
              <option value="FB20-MA1">Fb20-ma1</option>
              <option value="FB25">Fb25</option>
              <option value="FE">Fe</option>
              <option value="G13B">G13b</option>
              <option value="G4FDCU399701">G4fdcu399701</option>
              <option value="G4GC">G4gc</option>
              <option value="G4NADA266720">G4nada266720</option>
              <option value="G4NAEU310004">G4naeu310004</option>
              <option value="GA15DE">Ga15de</option>
              <option value="gasoline">Gasoline</option>
              <option value="GH11715367">Gh11715367</option>
              <option value="GH5">Gh5</option>
              <option value="GH7203108">Gh7203108</option>
              <option value="H06C">H06c</option>
              <option value="H27A">H27a</option>
              <option value="HA">Ha</option>
              <option value="HE12DE">He12de</option>
              <option value="HM01">Hm01</option>
              <option value="HN01">Hn01</option>
              <option value="HN05">Hn05</option>
              <option value="HR12">Hr12</option>
              <option value="HR12DDR">Hr12ddr</option>
              <option value="HR12DE">Hr12de</option>
              <option value="HR12-EM47-MM48">Hr12-em47-mm48</option>
              <option value="HR12-EM57">Hr12-em57</option>
              <option value="HR15">Hr15</option>
              <option value="HR15240121A">Hr15240121a</option>
              <option value="HR15DE">Hr15de</option>
              <option value="HR16">Hr16</option>
              <option value="HR16904196B">Hr16904196b</option>
              <option value="HR16907271B">Hr16907271b</option>
              <option value="HR16948406B">Hr16948406b</option>
              <option value="HR16DE">Hr16de</option>
              <option value="HRA2078969A">Hra2078969a</option>
              <option value="HRA2125733A">Hra2125733a</option>
              <option value="HRA2240158A">Hra2240158a</option>
              <option value="Hybrid">Hybrid</option>
              <option value="J05D">J05d</option>
              <option value="J05E">J05e</option>
              <option value="J07C">J07c</option>
              <option value="J07E">J07e</option>
              <option value="J08C">J08c</option>
              <option value="J20A">J20a</option>
              <option value="J24B">J24b</option>
              <option value="J38280610">J38280610</option>
              <option value="J38284064">J38284064</option>
              <option value="JB-JL">Jb-jl</option>
              <option value="K12B">K12b</option>
              <option value="K12C">K12c</option>
              <option value="K12C-WA05A">K12c-wa05a</option>
              <option value="K14C">K14c</option>
              <option value="K20A">K20a</option>
              <option value="K20A2781418">K20a2781418</option>
              <option value="K24A">K24a</option>
              <option value="K24W">K24w</option>
              <option value="K24Z12762176">K24z12762176</option>
              <option value="K24Z12764639">K24z12764639</option>
              <option value="K24Z98501760">K24z98501760</option>
              <option value="K3">K3</option>
              <option value="K6A">K6a</option>
              <option value="K6A7328525">K6a7328525</option>
              <option value="K9KC400D052932">K9kc400d052932</option>
              <option value="K9KF27">K9kf27</option>
              <option value="K9KF276D099474">K9kf276d099474</option>
              <option value="K9KF276D127177">K9kf276d127177</option>
              <option value="K9KF276D127206">K9kf276d127206</option>
              <option value="K9KF276D127219">K9kf276d127219</option>
              <option value="K9KF276D127247">K9kf276d127247</option>
              <option value="K9KF276D127253">K9kf276d127253</option>
              <option value="K9KF276D127277">K9kf276d127277</option>
              <option value="K9KF276D127287">K9kf276d127287</option>
              <option value="K9KF276D127303">K9kf276d127303</option>
              <option value="K9KF276D127322">K9kf276d127322</option>
              <option value="KA20">Ka20</option>
              <option value="KA24">Ka24</option>
              <option value="KF">Kf</option>
              <option value="KF-DET">Kf-det</option>
              <option value="KF-VE">Kf-ve</option>
              <option value="KY0520">Ky0520</option>
              <option value="L">L</option>
              <option value="L13A">L13a</option>
              <option value="L13A4074490">L13a4074490</option>
              <option value="L13A4129391">L13a4129391</option>
              <option value="L13A4142785">L13a4142785</option>
              <option value="L13A4155229">L13a4155229</option>
              <option value="L13B">L13b</option>
              <option value="L13Z11009373">L13z11009373</option>
              <option value="L15A">L15a</option>
              <option value="L15A71000771">L15a71000771</option>
              <option value="L15A71002039">L15a71002039</option>
              <option value="L15B">L15b</option>
              <option value="L15B3505017">L15b3505017</option>
              <option value="L15C">L15c</option>
              <option value="L15Z">L15z</option>
              <option value="L20">L20</option>
              <option value="L3">L3</option>
              <option value="L8">L8</option>
              <option value="L92">L92</option>
              <option value="LA20">La20</option>
              <option value="LDA23038798">Lda23038798</option>
              <option value="LDA33003139">Lda33003139</option>
              <option value="LDA33009920">Lda33009920</option>
              <option value="LDA-MF">Lda-mf</option>
              <option value="LDA-MF6">Lda-mf6</option>
              <option value="LEA">Lea</option>
              <option value="LEA-MF6">Lea-mf6</option>
              <option value="LEB">Leb</option>
              <option value="LEB-H1">Leb-h1</option>
              <option value="LEB-H4">Leb-h4</option>
              <option value="LEB-H5">Leb-h5</option>
              <option value="LEC">Lec</option>
              <option value="LEC-H5">Lec-h5</option>
              <option value="LF">Lf</option>
              <option value="LF1">Lf1</option>
              <option value="LFA-MF8">Lfa-mf8</option>
              <option value="LFB-H4">Lfb-h4</option>
              <option value="LFC-H4">Lfc-h4</option>
              <option value="LFV">Lfv</option>
              <option value="LF-VDS">Lf-vds</option>
              <option value="LFW">Lfw</option>
              <option value="M13A">M13a</option>
              <option value="M15A">M15a</option>
              <option value="M15A-1NM">M15a-1nm</option>
              <option value="M15A-FXE">M15a-fxe</option>
              <option value="M16A">M16a</option>
              <option value="M16A1398147">M16a1398147</option>
              <option value="M16A1432444">M16a1432444</option>
              <option value="M20A">M20a</option>
              <option value="M20A-3NM">M20a-3nm</option>
              <option value="M20A-FKS">M20a-fks</option>
              <option value="M20A-FXS">M20a-fxs</option>
              <option value="M278">M278</option>
              <option value="M5501">M5501</option>
              <option value="M5M">M5m</option>
              <option value="M9R">M9r</option>
              <option value="MH">Mh</option>
              <option value="MR16">Mr16</option>
              <option value="MR16DDT">Mr16ddt</option>
              <option value="MR20">Mr20</option>
              <option value="MR20033139R">Mr20033139r</option>
              <option value="MR20034045R">Mr20034045r</option>
              <option value="MR20038517R">Mr20038517r</option>
              <option value="MR20326580W">Mr20326580w</option>
              <option value="MR20329439W">Mr20329439w</option>
              <option value="MR20725607B">Mr20725607b</option>
              <option value="MR20DD">Mr20dd</option>
              <option value="MR20DE">Mr20de</option>
              <option value="MR20-RM31">Mr20-rm31</option>
              <option value="MR20-SM23">Mr20-sm23</option>
              <option value="MR20-SM24">Mr20-sm24</option>
              <option value="MRA8">Mra8</option>
              <option value="MRE8">Mre8</option>
              <option value="N040">N040</option>
              <option value="N04C">N04c</option>
              <option value="N04C-H1">N04c-h1</option>
              <option value="N12B14A">N12b14a</option>
              <option value="N12B16A">N12b16a</option>
              <option value="N13B16A">N13b16a</option>
              <option value="N14B16A">N14b16a</option>
              <option value="N16B16A">N16b16a</option>
              <option value="N20B20A">N20b20a</option>
              <option value="N20B20B">N20b20b</option>
              <option value="N43B16A">N43b16a</option>
              <option value="N43B20A">N43b20a</option>
              <option value="N45B16A">N45b16a</option>
              <option value="N46B20A">N46b20a</option>
              <option value="N46B20B">N46b20b</option>
              <option value="N47D20C">N47d20c</option>
              <option value="N52B25A">N52b25a</option>
              <option value="N52B30A">N52b30a</option>
              <option value="N54B30A">N54b30a</option>
              <option value="N55B30A">N55b30a</option>
              <option value="N57D30A">N57d30a</option>
              <option value="NA20">Na20</option>
              <option value="P3">P3</option>
              <option value="P5">P5</option>
              <option value="P520228703">P520228703</option>
              <option value="P530210382">P530210382</option>
              <option value="P5-VP">P5-vp</option>
              <option value="P5-VPS">P5-vps</option>
              <option value="PE">Pe</option>
              <option value="PE20361853">Pe20361853</option>
              <option value="PE-MG">Pe-mg</option>
              <option value="PE-VPS">Pe-vps</option>
              <option value="PHEV">Phev</option>
              <option value="PMSM">Pmsm</option>
              <option value="PT204">Pt204</option>
              <option value="pure electric">Pure Electric</option>
              <option value="PY">Py</option>
              <option value="PY20250901">Py20250901</option>
              <option value="PY-VPR">Py-vpr</option>
              <option value="PY-VPS">Py-vps</option>
              <option value="QD32">Qd32</option>
              <option value="QD32175990">Qd32175990</option>
              <option value="QD32177106">Qd32177106</option>
              <option value="QD32188327">Qd32188327</option>
              <option value="QD32224420">Qd32224420</option>
              <option value="QD32225131">Qd32225131</option>
              <option value="QD32226039">Qd32226039</option>
              <option value="QR20">Qr20</option>
              <option value="QR20DE">Qr20de</option>
              <option value="QR25">Qr25</option>
              <option value="QR25730286B">Qr25730286b</option>
              <option value="QR25954078Q">Qr25954078q</option>
              <option value="QR25970788Q">Qr25970788q</option>
              <option value="QR25DE">Qr25de</option>
              <option value="QR2O">Qr2o</option>
              <option value="R">R</option>
              <option value="R06A">R06a</option>
              <option value="R06A-WA04A">R06a-wa04a</option>
              <option value="R06A-WA05A">R06a-wa05a</option>
              <option value="R07A">R07a</option>
              <option value="R16B11001422">R16b11001422</option>
              <option value="R18A">R18a</option>
              <option value="R18A13890563">R18a13890563</option>
              <option value="R18A3010854">R18a3010854</option>
              <option value="R2">R2</option>
              <option value="R20A">R20a</option>
              <option value="R20A12702118">R20a12702118</option>
              <option value="RB20DE">Rb20de</option>
              <option value="RB26DETT">Rb26dett</option>
              <option value="RF">Rf</option>
              <option value="RG8">Rg8</option>
              <option value="S05C">S05c</option>
              <option value="S05D">S05d</option>
              <option value="S07A">S07a</option>
              <option value="S07B">S07b</option>
              <option value="S5">S5</option>
              <option value="S55B30A">S55b30a</option>
              <option value="S5-DPTS">S5-dpts</option>
              <option value="S63B44A">S63b44a</option>
              <option value="S8-DPTS">S8-dpts</option>
              <option value="SH">Sh</option>
              <option value="SH-VPTR">Sh-vptr</option>
              <option value="SH-VPTS">Sh-vpts</option>
              <option value="SL">Sl</option>
              <option value="SQRE4G16">Sqre4g16</option>
              <option value="SR18DE">Sr18de</option>
              <option value="T24A">T24a</option>
              <option value="T3-VPTS">T3-vpts</option>
              <option value="TB42">Tb42</option>
              <option value="TB45">Tb45</option>
              <option value="TD23">Td23</option>
              <option value="TD25">Td25</option>
              <option value="TD27">Td27</option>
              <option value="TD42">Td42</option>
              <option value="TF">Tf</option>
              <option value="V35A-FTS">V35a-fts</option>
              <option value="VG30DETT">Vg30dett</option>
              <option value="VH45DE">Vh45de</option>
              <option value="VQ25">Vq25</option>
              <option value="VQ35">Vq35</option>
              <option value="VR38DETT">Vr38dett</option>
              <option value="VS">Vs</option>
              <option value="W04D">W04d</option>
              <option value="W06E">W06e</option>
              <option value="W10B16A">W10b16a</option>
              <option value="WL-T">Wl-t</option>
              <option value="WP10.336">Wp10.336</option>
              <option value="XA">Xa</option>
              <option value="XFV">Xfv</option>
              <option value="XS">Xs</option>
              <option value="YD25">Yd25</option>
              <option value="YD25337578A">Yd25337578a</option>
              <option value="YD25356981A">Yd25356981a</option>
              <option value="YD25535259T">Yd25535259t</option>
              <option value="YD25DDTi">Yd25ddti</option>
              <option value="YF">Yf</option>
              <option value="ZD30">Zd30</option>
              <option value="ZD30031001">Zd30031001</option>
              <option value="ZD30046895">Zd30046895</option>
              <option value="ZD30047937">Zd30047937</option>
              <option value="ZD30152697K">Zd30152697k</option>
              <option value="ZD30154808K">Zd30154808k</option>
              <option value="ZD30182626K">Zd30182626k</option>
              <option value="ZD30205321K">Zd30205321k</option>
              <option value="ZD30210989K">Zd30210989k</option>
              <option value="ZD30223405K">Zd30223405k</option>
              <option value="ZD30225075K">Zd30225075k</option>
              <option value="ZD30272462K">Zd30272462k</option>
              <option value="ZD30276303K">Zd30276303k</option>
              <option value="ZD30329855K">Zd30329855k</option>
              <option value="ZD30332417K">Zd30332417k</option>
              <option value="ZD30333413K">Zd30333413k</option>
              <option value="ZD30DDTi">Zd30ddti</option>
              <option value="ZJ">Zj</option>
              <option value="ZJ-VE">Zj-ve</option>
              <option value="ZY">Zy</option>
              <option value="ZY-VE">Zy-ve</option>
              {/* Add more engine types as needed */}
            </select>
          </div>

          {/* CC To */}
          <div className="text-[#d1d6d8] flex flex-col justify-start items-start w-full gap-2">
            <input
              className="border-2 w-full lg:w-[190px] rounded-lg px-2 text-[#d1d6d8] py-3"
              style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
              type="text"
              name="ccTo"
              value={ccTo}
              placeholder="CC To"
              onChange={(e) => setCcTo(e.target.value)}
            />
          </div>

          {/* Year From */}
          <div className="text-[#d1d6d8] flex flex-col justify-start items-start w-full gap-2">
            <input
              className="border-2 w-full lg:w-[190px] rounded-lg px-2 text-[#d1d6d8] py-3"
              style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
              type="text"
              name="yearFrom"
              value={yearFrom}
              placeholder="Year From"
              onChange={(e) => setYearFrom(e.target.value)}
            />
          </div>

          {/* Year To */}
          <div className="text-[#d1d6d8] flex flex-col justify-start items-start w-full gap-2">
            <input
              className="border-2 w-full lg:w-[190px] rounded-lg px-2 text-[#d1d6d8] py-3"
              style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
              type="text"
              name="yearTo"
              value={yearTo}
              placeholder="Year To"
              onChange={(e) => setYearTo(e.target.value)}
            />
          </div>
          <div className=" w-full">
            <div className="text-[#d1d6d8] flex flex-col justify-start items-start w-full gap-2">
              <input
                type="text"
                id="mileage"
                style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
                placeholder="Mileage"
                className="w-full border-2 text-[#d1d6d8] rounded px-3 py-2.5"
                value={selectedMileage}
                onChange={(e) => setSelectedMileage(e.target.value)}
              />
            </div>
          </div>

          {/* Max Loading Capacity */}

          <div className="text-[#d1d6d8] flex flex-col justify-start items-start w-full gap-2">
            <input
              className="border-2 w-full lg:w-[190px] rounded-lg px-2 text-[#d1d6d8] py-3"
              style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
              type="text"
              name="maxLoadingCapacity"
              value={maxLoadingCapacity}
              placeholder="Max Loading Capacity"
              onChange={(e) => setMaxLoadingCapacity(e.target.value)}
            />
          </div>

          {/* Body Type */}
          <div className="text-[#d1d6d8] flex flex-col justify-start items-start w-full gap-2">
            <select
              className="select select-bordered w-full border-2 rounded-lg py-3 px-2"
              style={{ backgroundColor: "hsl(244, 20%, 14%)" }}
              name="bodyType"
              value={searchCriteria.bodyType}
              onChange={handleSearchCriteriaChange}
            >
              <option value="" disabled selected>
                Body Type:
              </option>
              <option value="sedan">Sedan</option>
              <option value="coupe">Coupe</option>
              <option value="hatchback">Hatchback</option>
              <option value="station-wagon">Station Wagon</option>
              <option value="suv">SUV</option>
              <option value="pick-up">Pick up</option>
              <option value="van">Van</option>
              <option value="mini-van">Mini Van</option>
              <option value="wagon">Wagon</option>
              <option value="convertible">Convertible</option>
              <option value="bus">Bus</option>
              <option value="truck">Truck</option>
              <option value="heavy-equipment">Heavy Equipment</option>
            </select>
          </div>

          {/* Checkbox for Air Lock */}
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="airlock"
              name="airlock"
              checked={airLock} // Ensure the checkbox reflects the state
              onChange={(e) => setAirLock(e.target.checked)} // Update the state based on the checkbox value
            />
            <label htmlFor="airlock" className="text-[#d1d6d8]">
              Air Lock
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="power-steering"
              name="powerSteering"
              checked={powerSteering}
              onChange={(e) => setPowerSteering(e.target.checked)}
            />
            <label htmlFor="power-steering" className="text-[#d1d6d8]">
              Power Steering
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="air-conditioner"
              name="airConditioner"
              checked={airConditioner}
              onChange={(e) => setAirConditioner(e.target.checked)}
            />
            <label htmlFor="air-conditioner" className="text-[#d1d6d8]">
              Air Conditioner
            </label>
          </div>

          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="navigation"
              name="navigation"
              checked={navigation}
              onChange={(e) => setNavigation(e.target.checked)}
            />
            <label htmlFor="navigationg" className="text-[#d1d6d8]">
              Navigation
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="anti-lock-brake-system"
              name="antiLockBrakes"
              checked={antiLockBrakes}
              onChange={(e) => setAntiLockBrakes(e.target.checked)}
            />
            <label htmlFor="anti-lock-brake-system" className="text-[#d1d6d8]">
              Anti Lock Brakes
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="leather-seats"
              name="leatherSeats"
              checked={leatherSeats}
              onChange={(e) => setLeatherSeats(e.target.checked)}
            />
            <label htmlFor="leather-seats" className="text-[#d1d6d8]">
              Leather Seats
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="tv"
              name="tv"
              checked={tv}
              onChange={(e) => setTv(e.target.checked)}
            />
            <label htmlFor="tv" className="text-[#d1d6d8]">
              TV
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="fog-lights"
              name="fogLights"
              checked={fogLights}
              onChange={(e) => setFogLights(e.target.checked)}
            />
            <label htmlFor="fog-lights" className="text-[#d1d6d8]">
              Fog Lights
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="alloy-wheels"
              name="alloyWheels"
              checked={alloyWheels}
              onChange={(e) => setAlloyWheels(e.target.checked)}
            />
            <label htmlFor="alloy-wheels" className="text-[#d1d6d8]">
              Alloy Wheels
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="grill-guard"
              name="grillGuard"
              checked={grillGuard}
              onChange={(e) => setGrillGuard(e.target.checked)}
            />
            <label htmlFor="grill-guard" className="text-[#d1d6d8]">
              Grill Guard
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="power-windows"
              name="powerWindows"
              checked={powerWindow}
              onChange={(e) => setPowerWindows(e.target.checked)}
            />
            <label htmlFor="power-windows" className="text-[#d1d6d8]">
              Power Windows
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="roof-rails"
              name="roofRails"
              checked={roofRails}
              onChange={(e) => setRoofRails(e.target.checked)}
            />
            <label htmlFor="roof-rails" className="text-[#d1d6d8]">
              Roof Rails
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="dual-air-bugs"
              name="dualAirBags"
              checked={dualAirBags}
              onChange={(e) => setDualAirBags(e.target.checked)}
            />
            <label htmlFor="dual-air-bugs" className="text-[#d1d6d8]">
              Dual Air Bugs
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="sun-roof"
              name="sunRoof"
              checked={sunRoof}
              onChange={(e) => setSunRoof(e.target.checked)}
            />
            <label htmlFor="sun-roof" className="text-[#d1d6d8]">
              Sun Roof
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="rear-spoilers"
              name="rearSpoilers"
              checked={rearSpoilers}
              onChange={(e) => setRearSpoiler(e.target.checked)}
            />
            <label htmlFor="rear-spoilers" className="text-[#d1d6d8]">
              Rear Spoilers
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="black-tire"
              name="blackTire"
              checked={blackTire}
              onChange={(e) => setBlackTire(e.target.checked)}
            />
            <label htmlFor="black-tire" className="text-[#d1d6d8]">
              Black Tire
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="key-less-entry"
              name="keylessEntry"
              checked={keylessEntry}
              onChange={(e) => setKeylessEntry(e.target.checked)}
            />
            <label htmlFor="key-less-entry" className="text-[#d1d6d8]">
              Keyless Entry
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="central-locking"
              name="centralLocking"
              checked={centralLocking}
              onChange={(e) => setCentralLocking(e.target.checked)}
            />
            <label htmlFor="central-locking" className="text-[#d1d6d8]">
              Central Locking
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="cd-player"
              name="cdPlayer"
              checked={cdPlayer}
              onChange={(e) => setCDPlayer(e.target.checked)}
            />
            <label htmlFor="cd-player" className="text-[#d1d6d8]">
              CD Player
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="abs"
              name="abs"
              checked={abs}
              onChange={(e) => setABS(e.target.checked)}
            />
            <label htmlFor="abs" className="text-[#d1d6d8]">
              ABS
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="ac-front"
              name={acFront}
              checked={acFront}
              onChange={(e) => setACFront(e.target.checked)}
            />
            <label htmlFor="ac-front" className="text-[#d1d6d8]">
              A/C Front
            </label>
          </div>
          <div className="flex items-center gap-2">
            <input
              className="rounded border-gray-300 text-[#d1d6d8]"
              type="checkbox"
              id="ac-rear"
              name="acRear"
              checked={acRear}
              onChange={(e) => setACRear(e.target.checked)}
            />
            <label htmlFor="ac-rear" className="text-[#d1d6d8]">
              A/C Rear
            </label>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarSearch;
