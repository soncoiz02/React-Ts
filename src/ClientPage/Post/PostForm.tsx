import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createPost, getPost, updatePost } from "../../api/post";

export type POST_TYPE = {
  title: string;
  desc: string;
  author: string;
  category: string;
  thumbnail: string;
  status: number;
};

const PostForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleGetPost = async (id: string) => {
    const response = await getPost(id);
    if (response.status === 200) {
      reset({ ...response.data, status: `${response.data.status}` });
    }
    return null;
  };

  useEffect(() => {
    if (id) {
      handleGetPost(id);
    }
  }, [id]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      title: "",
      desc: "",
      author: "",
      category: "",
      thumbnail: "",
      status: 0,
    },
  });

  const handleSubmitPost = async (postData: POST_TYPE) => {
    const response = await createPost(postData);

    if (response.status === 201) {
      navigate("/posts");
    }
  };

  const handleUpdatePost = async (data: POST_TYPE) => {
    const response = await updatePost(id, data);
    if (response.status === 200) {
      navigate("/posts");
    }
  };

  const onSubmit: SubmitHandler<POST_TYPE> = (data) => {
    const submitData = {
      ...data,
      status: +data.status,
    };
    if (id) {
      return handleUpdatePost(submitData);
    }
    handleSubmitPost(submitData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Title</label>
          <input
            type="text"
            placeholder="Title"
            {...register("title", {
              required: { value: true, message: "Required" },
            })}
          />
          <div>{errors.title?.message}</div>
        </div>
        <div>
          <label htmlFor="">Description</label>
          <input type="text" placeholder="Description" {...register("desc")} />
        </div>
        <div>
          <label htmlFor="">Author</label>
          <input type="text" placeholder="Author" {...register("author")} />
        </div>
        <div>
          <label htmlFor="">Category</label>
          <input type="text" placeholder="Category" {...register("category")} />
        </div>
        <div>
          <label htmlFor="">Thumbnail</label>
          <input
            type="text"
            placeholder="Thumbnail"
            {...register("thumbnail")}
          />
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <input type="radio" value={0} {...register("status")} /> Not active
          <input type="radio" value={1} {...register("status")} /> Activated
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default PostForm;
