import React, { useContext, useEffect, useState } from "react";
import useStyles from "./ComponentsStyle";
import { MoreVert } from "@material-ui/icons";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const { user: currUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currUser._id));
  }, [currUser._id, post.likes]);

  const likeHandler = async () => {
    // setLike(isLiked ? like - 1 : like + 1);
    // setIsLiked(!isLiked);
    try {
      await axios.put(`posts/${post._id}/like`, { userId: currUser._id });
    } catch (err) {
      console.log(err);
    }
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const classes = useStyles();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postContainer}>
          <div className={classes.postImageContainer}>
            <div className={classes.postTop}>
              <Link to={`profile/${user.username}`}>
                <img
                  src={
                    user.profilePicture
                      ? PF + user.profilePicture
                      : PF + "noAvatar.jpg"
                  }
                  alt=""
                  className={classes.userImg}
                />
              </Link>
              <span className={classes.PostName}>{user.username}</span>
              <span className={classes.PostDate}>{format(post.createdAt)}</span>
            </div>
            <div className="postTopRight">
              <MoreVert className={classes.postMoreIcon} />
            </div>
          </div>
          <div className={classes.postCenter}>
            <span className={classes.postText}>{post?.desc}</span>
            <img
              src={post.img ? PF + post.img : null}
              alt=""
              className={classes.postImg}
            />
          </div>

          <div className={classes.postBottom}>
            <div className={classes.postLike}>
              <img
                src={`${PF}heart.png`}
                alt=""
                className={classes.postLikeIcons}
                onClick={likeHandler}
              />
              <img
                src={`${PF}like.png`}
                alt=""
                className={classes.postLikeIcons}
                onClick={likeHandler}
              />
              <span className={classes.postLikes}>
                {like} people liked this posts
              </span>
            </div>

            <div className={classes.postComment}>
              <span className={classes.postComments}>
                {post.comment} comments
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
