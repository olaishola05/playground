import React, { useContext, useRef, useState } from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";
import useStyles from "./ComponentsStyle";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

function Share({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const desc = useRef();
  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };

    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("file", file);
      data.append("name", filename);
      newPost.img = filename;

      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }

    try {
      await axios.post("/posts", newPost);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.share}>
      <div className={classes.shareWrapper}>
        <div className={classes.shareTop}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "noAvatar.jpg"
            }
            alt=""
            className={classes.shareImg}
          />
          <input
            type="text"
            placeholder={`share your coding experience ${user.username}`}
            className={classes.shareInput}
            ref={desc}
          />
        </div>
        <hr className={classes.shareHr} />
        <div className={classes.shareBottom}>
          <form className={classes.shareOptions} onSubmit={handleSubmit}>
            <label htmlFor="file" className={classes.shareOption}>
              <PermMedia htmlColor="tomato" className={classes.shareIcon} />
              <span className={classes.shareOptionText}>Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png, .jpeg, .jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>

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
            <button className={classes.shareBtn} type="submit">
              Share
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Share;
