import React from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import useStyles from "./ComponentsStyle";

function Share({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const classes = useStyles();

  return (
    <div className={classes.share}>
      <div className={classes.shareWrapper}>
        <div className={classes.shareTop}>
          <img
            src={
              user.profilePicture
                ? user.profilePicture
                : PF + "img/noAvatar.jpg"
            }
            alt=""
            className={classes.shareImg}
          />
          <input
            placeholder={`share your coding experience ${user.username}`}
            className={classes.shareInput}
          />
        </div>
        <hr className={classes.shareHr} />
        <div className={classes.shareBottom}>
          <div className={classes.shareOptions}>
            <div className={classes.shareOption}>
              <PermMedia htmlColor="tomato" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Photo or Video</span>
            </div>

            <div className={classes.shareOption}>
              <Label htmlColor="blue" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Tags</span>
            </div>

            <div className={classes.shareOption}>
              <Room htmlColor="green" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Location</span>
            </div>

            <div className={classes.shareOption}>
              <EmojiEmotions
                htmlColor="goldenrod"
                className={classes.shareIcon}
              />
              <span className={classes.shareOptionText}>Feelings</span>
            </div>
          </div>
          <button className={classes.shareBtn}>Share</button>
        </div>
      </div>
    </div>
  );
}

export default Share;
