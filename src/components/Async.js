import { useState, useEffect } from "react";
const Acync = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((responce) => responce.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div>
      <ul>{posts.map(post => (<li key={post.id}>{post.title}</li>))}</ul>
    </div>
  );
};

export default Acync;
