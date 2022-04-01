import instance from "./axiosClient";

type ID = string | number | undefined;

export const getAllCate = () => {
  return instance.get("/cateBooks");
};

export const getCate = (id: ID) => {
  return instance.get(`/cateBooks/${id}`);
};

export const createCate = (data: any) => {
  return instance.post("/cateBooks", data);
};

export const deleteCate = (id: ID) => {
  return instance.delete(`/cateBooks/${id}`);
};

export const updateCate = (id: ID, data: any) => {
  return instance.put(`/cateBooks/${id}`, data);
};
