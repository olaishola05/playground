import React, { useContext, useEffect, useState } from "react";
import TopBar from "./TopBar";
import useStyles from "../components/ComponentsStyle";
import Feed from "./Feed";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import axios from "axios";
import { useParams } from "react-router";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  // const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  // const username = useParams().username;
  const { user } = useContext(AuthContext);

  // console.log(params.username);

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`/users?username=${username}`);
  //     setUser(res.data);
  //   };
  //   fetchUser();
  // }, [username]);

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
                src={`${PF}img/coverPhoto.jpg`}
                // {
                //   user.coverPicture
                //     ? user.coverPicture
                //     : PF + "img/coverPhoto.jpg"
                // }
                alt=""
                className={classes.profileCoverImg}
              />

              <img
                src={`${PF}img/noAvatar.jpg`}
                // {
                //   user.profilePicture
                //     ? user.profilePicture
                //     : PF + "img/noAvatar.jpg"
                // }
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
            <Feed />
            <RightBar user={user} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
