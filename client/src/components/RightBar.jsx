import React from "react";
import useStyles from "./ComponentsStyle";
import { Users } from "../utils/mockData";
import OnlineFriends from "./OnlineFriends";
import AdsFeeds from "./AdsFeeds";

function RightBar({ user }) {
  console.log(user);
  const classes = useStyles();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

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
              <span className={classes.profilerightbarInfoValue}>
                {user.city}
              </span>
            </div>
          </div>

          <div className={classes.profileRighbartInfo}>
            <div className={classes.profileRigthbarInfoItem}>
              <span className={classes.profilerightbarInfoKey}>From:</span>
              <span className={classes.profilerightbarInfoValue}>
                {user.from}
              </span>
            </div>
          </div>

          <div className={classes.profileRighbartInfo}>
            <div className={classes.profileRigthbarInfoItem}>
              <span className={classes.profilerightbarInfoKey}>
                Experience Level:
              </span>
              <span className={classes.profilerightbarInfoValue}>
                {user.experience ? user.experience : "Preferred not to say"}
              </span>
            </div>
          </div>
        </div>
        <hr className={classes.leftbarHr} />

        <div className={classes.profileRightBottoms}>
          <h4 className={classes.stackTitle}>Tech Stacks</h4>
          {user.stacks.map((stack) => (
            <>
              <div className={classes.profileStacks} key={stack}>
                <span className={classes.stacksItem}>{stack}</span>
              </div>
            </>
          ))}
        </div>

        <hr className={classes.leftbarHr} />

        <div>
          <h4 className={classes.stackTitle}>User Friends</h4>
          <div className={classes.rigthbarFollowings}>
            <div className={classes.rightbarFollowing}>
              <img
                src={PF + "img/smile.jpeg"}
                alt=""
                className={classes.rightbarFollwingImg}
              />
              <span className={classes.rightbarfollowingName}>
                Jeremy Clarkes
              </span>
            </div>

            <div className={classes.rightbarFollowing}>
              <img
                src={PF + "img/smile.jpeg"}
                alt=""
                className={classes.rightbarFollwingImg}
              />
              <span className={classes.rightbarfollowingName}>
                Jeremy Clarkes
              </span>
            </div>

            <div className={classes.rightbarFollowing}>
              <img
                src={PF + "img/smile.jpeg"}
                alt=""
                className={classes.rightbarFollwingImg}
              />
              <span className={classes.rightbarfollowingName}>
                Jeremy Clarkes
              </span>
            </div>

            <div className={classes.rightbarFollowing}>
              <img
                src={PF + "img/smile.jpeg"}
                alt=""
                className={classes.rightbarFollwingImg}
              />
              <span className={classes.rightbarfollowingName}>
                Jeremy Clarkes
              </span>
            </div>

            <div className={classes.rightbarFollowing}>
              <img
                src={PF + "img/smile.jpeg"}
                alt=""
                className={classes.rightbarFollwingImg}
              />
              <span className={classes.rightbarfollowingName}>
                Jeremy Clarkes
              </span>
            </div>

            <div className={classes.rightbarFollowing}>
              <img
                src={PF + "img/smile.jpeg"}
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
        {user ? (
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
