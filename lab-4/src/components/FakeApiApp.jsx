import { useEffect, useState } from "react";
import PostsContainer from "./PostsContainer";
import PostForm from "./PostForm";

export default function FakeApiApp() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const response = await fetch(URL);
    const json = await response.json();
    setData(json);
    setLoading(false);
  };

  const handleChange = (e) => {
    setNewPost({
      ...newPost,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = newPost.title.trim();
    const body = newPost.body.trim();
    if (!title || !body) return;
    const localPost = { id: Date.now(), title, body };
    setData([localPost, ...data]);
    setNewPost({ title: "", body: "" });
  };

  return (
    <div>
      <h1>Fake API App</h1>
      <PostForm
        newPost={newPost}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {loading ? <h3>Loading...</h3> : <PostsContainer posts={data} />}
    </div>
  );
}

