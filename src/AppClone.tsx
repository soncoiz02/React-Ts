import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BookForm from "./ClientPage/Book/BookForm";
import BookList from "./ClientPage/Book/BookList";
import CateForm from "./ClientPage/Category/CateForm";
import CateList from "./ClientPage/Category/CateList";
import Dashboard from "./ClientPage/Dashboard";
import PostDetail from "./ClientPage/Post/PostDetail";
import PostForm from "./ClientPage/Post/PostForm";
import PostList from "./ClientPage/Post/PostList";
import ProductDetail from "./ClientPage/Product/ProductDetail";
import ProductForm from "./ClientPage/Product/ProductForm";
import ProductList from "./ClientPage/Product/ProductList";
import ClientLayout from "./page/layout/ClientLayout";

function AppClone() {
  return (
    <BrowserRouter>
      <div>
        <h1>App Clone</h1>
        <Routes>
          <Route path={"/"} element={<ClientLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="products">
              <Route index element={<ProductList />} />
              <Route path=":id" element={<ProductDetail />} />
              <Route path="create" element={<ProductForm />} />
              <Route path="edit:/id" element={<ProductForm />} />
            </Route>
            <Route path="posts">
              <Route index element={<PostList />} />
              <Route path=":id" element={<PostDetail />} />
              <Route path="create" element={<PostForm />} />
              <Route path="edit/:id" element={<PostForm />} />
            </Route>
            <Route path="books">
              <Route index element={<BookList />} />
              <Route path="create" element={<BookForm />} />
              <Route path="edit/:id" element={<BookForm />} />
            </Route>
            <Route path="cate">
              <Route index element={<CateList />} />
              <Route path="create" element={<CateForm />} />
              <Route path="edit/:id" element={<CateForm />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppClone;
