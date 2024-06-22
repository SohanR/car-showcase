import axios from "axios";
import { baseUrl } from "../utils/key";

//for car list
export const carList = async () =>
  await axios.get(`${baseUrl}/api/public/get-cars`);

export const reconditionCarList = async () =>
  await axios.get(`${baseUrl}/api/public/get-cars/recondition`);

export const newCarList = async () =>
  await axios.get(`${baseUrl}/api/public/get-cars/new`);

export const useedCarList = async () =>
  await axios.get(`${baseUrl}/api/public/get-cars/used`);

//for sing car details
export const singleCar = async (carId) =>
  await axios.get(`${baseUrl}/api/public/get-car-by-id/${carId}`, {
    withCredentials: true,
  });

//member car adding
export const memberCar = async (formData) =>
  await axios.post(`${baseUrl}/api/carupload`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: true,
  });

//my carlist
export const myCarList = async () =>
  await axios.get(`${baseUrl}/api/mycars`, {
    withCredentials: true,
  });

export const getSearch = async (info) => {
  try {
    const res = await axios.get(`${baseUrl}/api/public/car-search`, info, {
      withCredentials: true,
    });
    return res.data; // Return the response data
  } catch (error) {
    throw new Error(error.response?.data?.message || "Failed to get car");
  }
};

export const successGet = async () => {
  try {
    const res = await axios.get(`${baseUrl}/api/public/get-story`, {
      withCredentials: true,
    });
    return res.data; // Return the response data
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to get succesStory"
    );
  }
};
export const getSearchCar = async (searchForm) => {
  try {
    const res = await axios.get(
      `${baseUrl}/api/public/car-search`,
      searchForm,
      {
        withCredentials: true,
      }
    );
    return res.data; // Return the response data
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to get search car"
    );
  }
};

export const getMiniCarSearch = async (searchForm) => {
  try {
    const res = await axios.get(
      `${baseUrl}/api/public/car-minisearch`,
      searchForm,
      {
        withCredentials: true,
      }
    );
    return res.data; // Return the response data
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to get search car"
    );
  }
};
