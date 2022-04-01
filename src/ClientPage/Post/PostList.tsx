import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../../api/post";

type POST = {
  id: number;
  title: string;
  desc: string;
  author: string;
  category: string;
  thumbnail: string;
  status: number;
};

const PostList = () => {
  const [posts, setPosts] = useState<POST[]>([]);

  const handleGetPosts = async () => {
    const response = await getPosts();
    setPosts(response.data);
  };

  useEffect(() => {
    handleGetPosts();
  }, []);

  return (
    <div>
      <div>
        <Link to={"/posts/create"}>
          <button>Tạo mới bài viết</button>
        </Link>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Title</td>
              <td>Desciption</td>
              <td>Author</td>
              <td>Category</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.desc}</td>
                <td>{post.author}</td>
                <td>{post.category}</td>
                <td>{post.status ? "Activated" : "Not activated"}</td>
                <td>
                  <Link to={`/posts/edit/${post.id}`}>Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostList;
