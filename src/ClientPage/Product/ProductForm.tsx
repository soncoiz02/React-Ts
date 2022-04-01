import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createProduct } from "../../api/product";

const ProductForm = () => {
  const [nameVal, setNameVal] = useState<string>("");
  const [priceVal, setPriceVal] = useState<string>("");
  const [messages, setMessages] = useState<string[]>([]);

  const navigate = useNavigate();

  const onValidate = (data: { name: string; price: number }) => {
    const validateMessages = [];
    console.log(data, data.name, data.name.length);
    if (!data.name) {
      validateMessages.push("Tên không được để trống");
    } else if (data.name.length < 6) {
      validateMessages.push("Tên >= 6 ký tự");
    }

    if (!data.price) {
      console.log(data.price);
      validateMessages.push("Giá không được để trống hoặc < 1");
    }

    return validateMessages;
  };

  const handleSubmit = async () => {
    const data = {
      name: nameVal,
      price: +priceVal,
    };

    const validate = onValidate(data);

    if (validate.length === 0) {
      messages.length && setMessages([]);
      const response = await createProduct(data);
      if (response.status === 201) {
        navigate("/products");
      }
    } else {
      setMessages(validate);
    }

    console.log(data);
  };
  return (
    <div>
      <h1>Add product</h1>
      <form action="">
        <div>
          <label htmlFor="name">Product name</label>
          <input
            type="text"
            value={nameVal}
            onChange={(e) => setNameVal(e.target.value)}
            id="name"
          />
        </div>
        <div>
          <label htmlFor="price">Product price</label>
          <input
            type="text"
            value={priceVal}
            onChange={(e) => setPriceVal(e.target.value)}
            id="price"
          />
        </div>
        <button type="button" onClick={() => handleSubmit()}>
          Submit
        </button>
      </form>
      {messages.length > 0 ? (
        <ul>
          {messages.map((message, index) => (
            <li key={index}>{message}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default ProductForm;
