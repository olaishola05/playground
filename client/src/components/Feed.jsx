import React, { useEffect, useState } from "react";
import useStyles from "./ComponentsStyle";
import Post from "./Post";
import Share from "./Share";
import axios from "axios";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get("posts/timeline/61275d4bfc8dcc18388d34ae");
      setPosts(res.data);
    };
    getPosts();
  }, []);

  useEffect(() => {
    const userdigit = "61275d4bfc8dcc18388d34ae";
    const fetchUser = async () => {
      const res = await axios.get(`users/${userdigit}`);
      console.log(res.data);
      setUser(res.data);
    };
    fetchUser();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.feed}>
      <div className={classes.feedWrapper}>
        <Share user={user} />
        {posts.map((post, setPost) => (
          <Post key={post._id} post={post} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
