import instance from "./axiosClient";

export const getProducts = () => {
  const url = "/products";
  return instance.get(url);
};

export const getProduct = (id: undefined | string) => {
  const url = `/products/${id}`;
  return instance.get(url);
};

export const createProduct = (data: any) => {
  const url = "/products";
  return instance.post(url, data);
};

export const deleteProduct = (id: number | string) => {
  const url = `/products/${id}`;
  return instance.delete(url);
};
