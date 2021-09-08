import React, { useEffect, useState } from "react";
import TopBar from "./TopBar";
import useStyles from "../components/ComponentsStyle";
import Feed from "./Feed";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
import axios from "axios";

function Profile() {
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  // useEffect(() => {
  //   const fetchUser = async () => {
  //     const res = await axios.get(`users/61275d4bfc8dcc18388d34ae`);
  //     console.log(res.data);
  //     setUser(res.data);
  //   };
  //   fetchUser();
  // }, []);

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
                    : PF + "img/coverPhoto.jpg"
                }
                alt=""
                className={classes.profileCoverImg}
              />

              <img
                src={
                  user.profilePicture ? user.profilePr : PF + "img/noAvatar.jpg"
                }
                alt=""
                className={classes.profileUserImg}
              />
            </div>

            <div className={classes.profileInfo}>
              <h4 className={classes.profileInfoName}>
                {user.username || "Guest"}
              </h4>
              <span className={classes.profileInfoDesc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                nobis iusto accusantium aliquam tempore voluptatum vel minima
                dolor eius cupiditate.
              </span>
            </div>
          </div>
          <div className={classes.profileRightBottom}>
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
