// edit item

import { axiosServices } from "./AxiosServices";

export const editElementServices = async (info, id, data) => {
  const response = await axiosServices.put(`/${info}/${id}`, data);
  return response.data;
};

// post item

export const postElementServices = async (info, data) => {
  const response = await axiosServices.post(`/${info}`, data);
  return response.data;
};

// Login post item

export const postIlementServices = async (info, data) => {
  const response = await axiosServices.post(`${info}`, data);
  console.log(response.data);
  return response.data;
};

// get elem
export const GetElementServices = async (info, setElement) => {
  const response = await axiosServices.get(`/${info}`);
  setElement(response.data);
  return response.data;
};

// delete elem
export const DeleteServices = async (info) => {
  const response = await axiosServices.delete(`${info}`);
  console.log(response.data);
  window.location.reload(false);
  return response.data;
};

// search elem
export const SearchServices = async (info, setData) => {
  const response = await axiosServices.get(`${info}`);
  setData(response.data);
  return response.data;
};
