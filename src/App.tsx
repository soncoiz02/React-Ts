import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import FormAdd from "./components/FormAdd/FormAdd";
import AdminHomePage from "./page/Admin/AdminHomePage";
import HomePage from "./page/home/HomePage";
import AdminLayout from "./page/layout/AdminLayout";
import ClientLayout from "./page/layout/ClientLayout";
import Login from "./page/login";
import Product from "./page/product/Product";
import ProductDetail from "./page/product/ProductDetail";
import ProductForm from "./page/product/ProductForm";
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
    <BrowserRouter>
      <div className="App">
        {/* <Login />
        <FormAdd addData={setData} data={data} />
        <StudentList data={data} headCell={headCell} /> */}

        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/product"}>Client Product</Link>
          </li>
          <li>
            <Link to={"/admin"}>Admin </Link>
          </li>
          <li>
            <Link to={"/admin/product"}>Admin Product</Link>
          </li>
          <li>
            <Link to={"/admin/product/1000"}>Admin Detail</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" element={<ClientLayout />}>
            <Route index element={<HomePage />} />
            <Route path="product" element={<Product />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminHomePage />} />
            <Route path="product">
              <Route index element={<Product />} />
              <Route path=":id" element={<ProductDetail />} />
              <Route path=":id/edit" element={<ProductForm />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
