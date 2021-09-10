import React, { useContext, useEffect, useState } from "react";
import useStyles from "./ComponentsStyle";
import Post from "./Post";
import Share from "./Share";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
function Feed() {
  const [posts, setPosts] = useState([]);
  // const [user, setUser] = useState({});
  // const username = useParams().username
  const { user } = useContext(AuthContext);
  const { username, _id } = user;

  useEffect(() => {
    const getPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + _id);
      setPosts(res.data);
    };
    getPosts();
  }, [_id, username]);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`/users?username=olaish`);
  //     setUser(res.data);
  //   };
  //   fetchUser();
  // }, [username]);

  const classes = useStyles();

  return (
    <div className={classes.feed}>
      <div className={classes.feedWrapper}>
        <Share user={user} />
        {posts.map((post) => (
          <Post key={post._id} post={post} user={user} />
        ))}
      </div>
    </div>
  );
}

export default Feed;
