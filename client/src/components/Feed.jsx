import React, { useContext, useEffect, useState } from "react";
import useStyles from "./ComponentsStyle";
import Post from "./Post";
import Share from "./Share";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const getPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(res.data);
    };
    getPosts();
  }, [user._id, username]);

  const classes = useStyles();

  return (
    <div className={classes.feed}>
      <div className={classes.feedWrapper}>
        <Share user={user} />
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
