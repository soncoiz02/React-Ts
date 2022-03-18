import React, { useState } from "react";
import FormAdd from "./components/FormAdd/FormAdd";
import Login from "./page/login";
import StudentList from "./page/student";

const headCell = [
  {
    label: "Name",
    key: "name",
  },
  {
    label: "Age",
    key: "age",
  },
  {
    label: "Address",
    key: "address",
  },
  {
    label: "Phone",
    key: "phone",
  },
];

type dataType = {
  name: string;
  age: number;
  phone: string;
  address: string;
}[];
function App() {
  const [data, setData] = useState<dataType>([
    {
      name: "Son",
      age: 20,
      phone: "0392192838",
      address: "Cau Giay, Ha Noi",
    },
    {
      name: "Ha",
      age: 20,
      phone: "0392192838",
      address: "Cau Giay, Ha Noi",
    },
    {
      name: "Nam",
      age: 20,
      phone: "0392192838",
      address: "Cau Giay, Ha Noi",
    },
  ]);
  return (
    <div className="App">
      <Login />
      <FormAdd addData={setData} data={data} />
      <StudentList data={data} headCell={headCell} />
    </div>
  );
}

export default App;
