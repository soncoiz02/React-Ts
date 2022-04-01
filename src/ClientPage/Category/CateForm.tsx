import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createCate, getCate, updateCate } from "../../api/cate";
import { CATE_TYPE } from "./CateList";

const CateForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    if (id) {
      handleGetCate(id);
    }
  }, [id]);

  const handleGetCate = async (id: string | number) => {
    const { data } = await getCate(id);
    if (data) reset({ ...data });
  };

  const handleCreateCate = async (data: any) => {
    const response = await createCate(data);
    if (response.status === 201) {
      navigate("/cate");
    }
  };

  const handleUpdateCate = async (id: string | number, data: any) => {
    const response = await updateCate(id, data);
    if (response.status === 200) {
      navigate("/cate");
    }
  };

  const handleSubmitData: SubmitHandler<{ name: string }> = (data) => {
    if (id) {
      return handleUpdateCate(id, data);
    }

    handleCreateCate(data);
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
              minLength: {
                value: 6,
                message: "Name have least 6 character",
              },
            })}
          />
          <div>{errors?.name?.message}</div>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CateForm;
