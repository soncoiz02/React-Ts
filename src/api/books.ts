import instance from "./axiosClient";

type ID = string | number | undefined;

export const getBooks = () => {
  return instance.get("/books?_expand=cateBook");
};

export const deleteBook = (id: ID) => {
  return instance.delete(`/books/${id}`);
};

export const updateBook = (id: ID, data: any) => {
  return instance.put(`/books/${id}`, data);
};

export const createBook = (data: any) => {
  return instance.post("/books", data);
};

export const getBook = (id: ID) => {
  return instance.get(`/books/${id}`);
};
