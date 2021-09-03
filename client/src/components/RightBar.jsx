import React from "react";
import useStyles from "./ComponentsStyle";
import { Users } from "../utils/mockData";
import OnlineFriends from "./OnlineFriends";
import AdsFeeds from "./AdsFeeds";

function RightBar({ profile }) {
  const classes = useStyles();

  // online friends with ads
  const HomeRightBar = () => {
    return (
      <>
        <AdsFeeds />
        <h4 className={classes.rightbarTitle}>Online Friends</h4>
        <ul className={classes.rightbarFriendList}>
          {Users.map((user) => (
            <OnlineFriends key={user.id} user={user} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRight = () => {
    return (
      <>
        <div className={classes.profileRightTops}>
          <h4 className={classes.ProfileRightTitle}>User Information</h4>
          <div className={classes.profileRighbartInfo}>
            <div className={classes.profileRigthbarInfoItem}>
              <span className={classes.profilerightbarInfoKey}>City:</span>
              <span className={classes.profilerightbarInfoValue}>Toronto</span>
            </div>
          </div>

          <div className={classes.profileRighbartInfo}>
            <div className={classes.profileRigthbarInfoItem}>
              <span className={classes.profilerightbarInfoKey}>From:</span>
              <span className={classes.profilerightbarInfoValue}>
                British Island
              </span>
            </div>
          </div>

          <div className={classes.profileRighbartInfo}>
            <div className={classes.profileRigthbarInfoItem}>
              <span className={classes.profilerightbarInfoKey}>
                Experience:
              </span>
              <span className={classes.profilerightbarInfoValue}>
                Mid-Level
              </span>
            </div>
          </div>
        </div>
        <hr className={classes.leftbarHr} />

        <div className={classes.profileRightBottoms}>
          <h4 className={classes.stackTitle}>Tech Stacks</h4>
          <div className={classes.profileStacks}>
            <span className={classes.stacksItem}>JavaScript</span>
            <span className={classes.stacksItem}>ReactJS</span>
            <span className={classes.stacksItem}>NodeJS</span>
            <span className={classes.stacksItem}>MongoDB</span>
            <span className={classes.stacksItem}>Material UI</span>
            <span className={classes.stacksItem}>Bootstrap</span>
            <span className={classes.stacksItem}>CSS3</span>
            <span className={classes.stacksItem}>HTML5</span>
          </div>
        </div>

        <hr className={classes.leftbarHr} />

        <div>
          <h4 className={classes.stackTitle}>User Friends</h4>
          <div className={classes.rigthbarFollowings}>
            <div className={classes.rightbarFollowing}>
              <img
                src="./assets/img/smile.jpeg"
                alt=""
                className={classes.rightbarFollwingImg}
              />
              <span className={classes.rightbarfollowingName}>
                Jeremy Clarkes
              </span>
            </div>

            <div className={classes.rightbarFollowing}>
              <img
                src="./assets/img/smile.jpeg"
                alt=""
                className={classes.rightbarFollwingImg}
              />
              <span className={classes.rightbarfollowingName}>
                Jeremy Clarkes
              </span>
            </div>

            <div className={classes.rightbarFollowing}>
              <img
                src="./assets/img/smile.jpeg"
                alt=""
                className={classes.rightbarFollwingImg}
              />
              <span className={classes.rightbarfollowingName}>
                Jeremy Clarkes
              </span>
            </div>

            <div className={classes.rightbarFollowing}>
              <img
                src="./assets/img/smile.jpeg"
                alt=""
                className={classes.rightbarFollwingImg}
              />
              <span className={classes.rightbarfollowingName}>
                Jeremy Clarkes
              </span>
            </div>

            <div className={classes.rightbarFollowing}>
              <img
                src="./assets/img/smile.jpeg"
                alt=""
                className={classes.rightbarFollwingImg}
              />
              <span className={classes.rightbarfollowingName}>
                Jeremy Clarkes
              </span>
            </div>

            <div className={classes.rightbarFollowing}>
              <img
                src="./assets/img/smile.jpeg"
                alt=""
                className={classes.rightbarFollwingImg}
              />
              <span className={classes.rightbarfollowingName}>
                Jeremy Clarkes
              </span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className={classes.rightbar}>
      <div className={classes.rightbarWrapper}>
        {profile ? (
          <div>
            <ProfileRight />
            <hr className={classes.leftbarHr} />
            <AdsFeeds />
          </div>
        ) : (
          <HomeRightBar />
        )}
      </div>
    </div>
  );
}

export default RightBar;
