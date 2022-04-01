import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct, getProducts } from "../../api/product";

export type PRODUCT_TYPE = {
  id: number;
  name: string;
  price: number;
};

const ProductList = () => {
  const [products, setProducts] = useState<PRODUCT_TYPE[]>([]);

  const handleGetProducts = async () => {
    const { data } = await getProducts();
    setProducts(data);
  };

  useEffect(() => {
    handleGetProducts();
  }, [products.length]);

  const handleDelete = async (id: number | string) => {
    const response = await deleteProduct(id);
    if (response.status === 200) {
      handleGetProducts();
    }
  };

  return (
    <div>
      <div>
        <Link to={"/product/create"}> Add</Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.price}</td>
              <td>
                <Link to={`/product/${e.id}`}>Detail</Link>
                <button>Edit</button>
                <button onClick={() => handleDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
