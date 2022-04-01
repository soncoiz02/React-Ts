import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createBook, getBook, updateBook } from "../../api/books";
import { getAllCate } from "../../api/cate";
import { CATE_TYPE } from "../Category/CateList";

type BOOK_TYPE = {
  name: string;
  price: string;
  cate: string;
};

const BookForm = () => {
  const [categories, setCategories] = useState<CATE_TYPE[]>([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      handleGetBook(id);
    }
    handleGetCate();
  }, [id]);

  const handleGetBook = async (id: string | number) => {
    const { data } = await getBook(id);
    if (data)
      reset({ ...data, cate: `${data.cateBookId}`, price: `${data.price}` });
  };

  const handleGetCate = async () => {
    const { data } = await getAllCate();
    if (data) setCategories(data);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      price: "",
      cate: "",
    },
  });

  const handleCreateBook = async (data: any) => {
    const response = await createBook(data);
    if (response.status === 201) {
      navigate("/books");
    }
  };

  const handleUpdateBook = async (id: string | number, data: any) => {
    const response = await updateBook(id, data);
    if (response.status === 200) {
      navigate("/books");
    }
  };

  const handleSubmitData: SubmitHandler<BOOK_TYPE> = (data) => {
    const bookData = {
      name: data.name,
      price: +data.price,
      cateBookId: +data.cate,
    };

    if (id) {
      return handleUpdateBook(id, bookData);
    }

    handleCreateBook(bookData);
  };

  return (
    <div>
      <h2>Form</h2>

      <form onSubmit={handleSubmit(handleSubmitData)}>
        <label htmlFor="">
          <p>Name</p>
          <input
            type="text"
            placeholder="Book name"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required",
              },
            })}
          />
          <div>{errors?.name?.message}</div>
        </label>
        <label htmlFor="">
          <p>Price</p>
          <input
            type="text"
            placeholder="Book price"
            {...register("price", {
              required: {
                value: true,
                message: "Price is required",
              },
            })}
          />
          <div>{errors?.price?.message}</div>
        </label>
        <label htmlFor="">
          <p>Categories</p>
          <select
            {...register("cate", {
              required: {
                value: true,
                message: "Category is required",
              },
            })}
          >
            <option value="">Cate</option>
            {categories &&
              categories.map((cate) => (
                <option key={cate.id} value={cate.id}>
                  {cate.name}
                </option>
              ))}
          </select>
          <div>{errors?.cate?.message}</div>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default BookForm;
