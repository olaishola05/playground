import React, { useState } from "react";
import useStyles from "./ComponentsStyle";
import { MoreVert } from "@material-ui/icons";
// import axios from "axios";
import { format } from "timeago.js";
// import { Users } from "../utils/mockData";

function Post({ post, user }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  // const [user, setUser] = useState({});

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`users/${post.userId}`);
  //     console.log(res.data);
  //     setUser(res.data);
  //   };
  //   fetchUser();
  // }, [post.userId]);

  const classes = useStyles();

  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postContainer}>
          <div className={classes.postImageContainer}>
            <div className={classes.postTop}>
              <img
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : PF + "img/noAvatar.jpg"
                }
                alt=""
                className={classes.userImg}
              />
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
              src={post.img ? post.img : null}
              alt=""
              className={classes.postImg}
            />
          </div>

          <div className={classes.postBottom}>
            <div className={classes.postLike}>
              <img
                src={`${PF}img/heart.png`}
                alt=""
                className={classes.postLikeIcons}
                onClick={likeHandler}
              />
              <img
                src={`${PF}img/like.png`}
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
