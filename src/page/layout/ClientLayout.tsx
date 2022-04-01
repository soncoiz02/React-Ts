import React from "react";
import { Link, Outlet } from "react-router-dom";

type PropsType = {};

const ClientLayout = (props: PropsType) => {
  return (
    <div>
      <header>HEADER</header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Product</Link>
          </li>
          <li>
            <Link to="/posts">Post</Link>
          </li>
          <li>
            <Link to="/books">Book</Link>
          </li>
          <li>
            <Link to="/cate">Category</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default ClientLayout;
