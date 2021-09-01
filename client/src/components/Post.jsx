import React from "react";
import useStyles from "./ComponentsStyle";
import { MoreVert } from "@material-ui/icons";

function Post({ post }) {
  const { desc, photo, date, like, comment } = post;
  const classes = useStyles();
  return (
    <div className={classes.post}>
      <div className={classes.postWrapper}>
        <div className={classes.postContainer}>
          <div className={classes.postImageContainer}>
            <div className={classes.postTop}>
              <img
                src="./assets/img/gee.jpeg"
                alt=""
                className={classes.userImg}
              />
              <span className={classes.PostName}>Ola Ishola</span>
              <span className={classes.PostDate}>{date}</span>
            </div>
            <div className="postTopRight">
              <MoreVert className={classes.postMoreIcon} />
            </div>
          </div>

          <div className={classes.postCenter}>
            <span className={classes.postText}>{desc}</span>
            <img src={photo} alt="" className={classes.postImg} />
          </div>

          <div className={classes.postBottom}>
            <div className={classes.postLike}>
              <img
                src="./assets/img/heart.png"
                alt=""
                className={classes.postLikeIcons}
              />
              <img
                src="./assets/img/like.png"
                alt=""
                className={classes.postLikeIcons}
              />
              <span className={classes.postLikes}>
                {like} people liked this posts
              </span>
            </div>

            <div className={classes.postComment}>
              <span className={classes.postComments}>{comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
