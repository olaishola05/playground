import React from "react";
import TopBar from "./TopBar";
import useStyles from "../components/ComponentsStyle";
import Feed from "./Feed";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

function Profile() {
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
                src="./assets/img/flex.jpeg"
                alt=""
                className={classes.profileCoverImg}
              />

              <img
                src="./assets/img/gee.jpeg"
                alt=""
                className={classes.profileUserImg}
              />
            </div>

            <div className={classes.profileInfo}>
              <h4 className={classes.profileInfoName}>Ola Ishola</h4>
              {/* <ul>
                <li>JavaScript</li>
              </ul> */}
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
