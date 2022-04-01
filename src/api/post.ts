import instance from "./axiosClient";

export const getPosts = () => {
  const url = "/posts";
  return instance.get(url);
};

export const getPost = (id: string | undefined) => {
  const url = `/posts/${id}`;
  return instance.get(url);
};

export const createPost = (data: any) => {
  const url = "/posts";
  return instance.post(url, data);
};

export const deletePost = (id: number | string) => {
  const url = `/posts/${id}`;
  return instance.delete(url);
};

export const updatePost = (id: string | undefined, data: any) => {
  const url = `/posts/${id}`;
  return instance.put(url, data);
};
