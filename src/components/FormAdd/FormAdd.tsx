import React, { useState } from "react";

type formType = {
  addData: any;
  data: {
    name: string;
    age: number;
    phone: string;
    address: string;
  }[];
};

const FormAdd = ({ addData, data }: formType) => {
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const handleAdd = (e: any): any => {
    e.preventDefault();
    const newData = [
      ...data,
      {
        name: name,
        phone: phone,
        address: address,
        age: Number(age),
      },
    ];

    addData(newData);
  };

  return (
    <form onSubmit={(e) => handleAdd(e)}>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone"
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        onChange={(e) => setAge(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default FormAdd;
