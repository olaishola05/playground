import React, { useContext } from "react";
import useStyles from "./ComponentsStyle";
import { Users } from "../utils/mockData";
import OnlineFriends from "./OnlineFriends";
import AdsFeeds from "./AdsFeeds";
import { AuthContext } from "../context/AuthContext";

function RightBar({ users }) {
  const classes = useStyles();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);

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
          <div className={classes.profileStacks}>
            {user.stacks.map((stack) => (
              <div key={stack} className={classes.stacksItem}>
                <span>{stack}</span>
              </div>
            ))}
          </div>
        </div>

        <hr className={classes.leftbarHr} />

        <div>
          <h4 className={classes.stackTitle}>User Friends</h4>
          <div className={classes.rigthbarFollowings}>
            <div className={classes.rightbarFollowing}>
              <img
                src={PF + "smile.jpeg"}
                alt=""
                className={classes.rightbarFollwingImg}
              />
              <span className={classes.rightbarfollowingName}>
                Jeremy Clarkes
              </span>
            </div>

            <div className={classes.rightbarFollowing}>
              <img
                src={PF + "smile.jpeg"}
                alt=""
                className={classes.rightbarFollwingImg}
              />
              <span className={classes.rightbarfollowingName}>
                Jeremy Clarkes
              </span>
            </div>

            <div className={classes.rightbarFollowing}>
              <img
                src={PF + "swag.jpeg"}
                alt=""
                className={classes.rightbarFollwingImg}
              />
              <span className={classes.rightbarfollowingName}>
                Jerry Clarkes
              </span>
            </div>

            <div className={classes.rightbarFollowing}>
              <img
                src={PF + "smile.jpeg"}
                alt=""
                className={classes.rightbarFollwingImg}
              />
              <span className={classes.rightbarfollowingName}>
                Jeremy Clarkes
              </span>
            </div>

            <div className={classes.rightbarFollowing}>
              <img
                src={PF + "smile.jpeg"}
                alt=""
                className={classes.rightbarFollwingImg}
              />
              <span className={classes.rightbarfollowingName}>
                Jeremy Clarkes
              </span>
            </div>

            <div className={classes.rightbarFollowing}>
              <img
                src={PF + "smile.jpeg"}
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
        {users ? (
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
