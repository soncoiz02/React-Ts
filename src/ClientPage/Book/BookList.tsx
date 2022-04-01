import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteBook, getBooks } from "../../api/books";

export type BOOK_TYPE = {
  id: number;
  name: string;
  price: number;
  cateBook: {
    id: number;
    name: string;
  };
};

const BookList = () => {
  const [books, setBooks] = useState<BOOK_TYPE[]>([]);

  useEffect(() => {
    handleGetBooks();
  }, []);

  const handleGetBooks = async () => {
    const { data } = await getBooks();
    if (data) setBooks(data);
  };

  const handleDelete = async (id: string | number) => {
    const response = await deleteBook(id);
    if (response.status === 200) {
      handleGetBooks();
    }
  };
  return (
    <div>
      <h2>Book List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => (
              <tr key={book.id}>
                <td>{book.name}</td>
                <td>{book.price}</td>
                <td>{book.cateBook.name}</td>
                <td>
                  <Link to={`/books/edit/${book.id}`}>Edit</Link>
                  <button onClick={() => handleDelete(book.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Link to={"/books/create"}>
        <button>Add new</button>
      </Link>
    </div>
  );
};

export default BookList;
