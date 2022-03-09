import React from "react";
import "./student.css";

const data = [
  {
    name: "Son",
    age: 20,
    phone: "0392192838",
    email: "soncoiz3107@gmail.com",
    avt: "https://myshoppeos.com/wp-content/uploads/2019/12/footer-bg.jpg",
  },
  {
    name: "Ha",
    age: 20,
    phone: "0392192838",
    email: "soncoiz3107@gmail.com",
    avt: "https://myshoppeos.com/wp-content/uploads/2019/12/footer-bg.jpg",
  },
  {
    name: "Nam",
    age: 20,
    phone: "0392192838",
    email: "soncoiz3107@gmail.com",
    avt: "https://myshoppeos.com/wp-content/uploads/2019/12/footer-bg.jpg",
  },
];

const StudentList = () => {
  return (
    <div className="student-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Phone number</th>
            <th>Email</th>
            <th>Avatar</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e) => (
            <tr>
              <td>{e.name}</td>
              <td>{e.age}</td>
              <td>{e.phone}</td>
              <td>{e.email}</td>
              <td>
                <img src={e.avt} alt="" />
              </td>
              <td>
                <p className="btn-delete">Delete</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
