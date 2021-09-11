import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import useStyles from "../components/ComponentsStyle";
import Feed from "./Feed";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import { useParams } from "react-router";
import axios from "axios";

function Profile() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [user, setUser] = useState({});
  const username = useParams().username;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);
  const classes = useStyles();
  return (
    <>
      <TopBar />
      <div className={classes.profile}>
        <LeftBar />
        <div className={classes.ProfileRight}>
          <div className={classes.profileRightTop}>
            <div className={classes.profileCover}>
              <img
                src={
                  user.coverPicture
                    ? user.coverPicture
                    : PF + "img/coverPicture.jpeg"
                }
                alt=""
                className={classes.profileCoverImg}
              />

              <img
                src={
                  user.profilePicture
                    ? user.profilePicture
                    : PF + "img/noAvatar.jpg"
                }
                alt=""
                className={classes.profileUserImg}
              />
            </div>

            <div className={classes.profileInfo}>
              <h4 className={classes.profileInfoName}>{user.username}</h4>
              <span className={classes.profileInfoDesc}>{user.desc}</span>
            </div>
          </div>
          <div className={classes.profileRightBottom}>
            <Feed username={username} />
            <RightBar users />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
