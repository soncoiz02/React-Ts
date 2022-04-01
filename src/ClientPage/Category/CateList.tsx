import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteCate, getAllCate } from "../../api/cate";

export type CATE_TYPE = {
  id: number;
  name: string;
};

const CateList = () => {
  const [categories, setCategories] = useState<CATE_TYPE[]>([]);

  useEffect(() => {
    handleGetCategories();
  }, []);

  const handleGetCategories = async () => {
    const { data } = await getAllCate();
    if (data) setCategories(data);
  };

  const handleDelete = async (id: string | number) => {
    const response = await deleteCate(id);
    if (response.status === 200) {
      handleGetCategories();
    }
  };

  return (
    <div>
      <h2>Book List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories &&
            categories.map((cate) => (
              <tr key={cate.id}>
                <td>{cate.id}</td>
                <td>{cate.name}</td>
                <td>
                  <Link to={`/cate/edit/${cate.id}`}>Edit</Link>
                  <button onClick={() => handleDelete(cate.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Link to={"/cate/create"}>
        <button>Add new</button>
      </Link>
    </div>
  );
};

export default CateList;
