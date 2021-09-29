import React, { useContext, useEffect, useState } from "react";
import useStyles from "./ComponentsStyle";
import { Users } from "../utils/mockData";
import OnlineFriends from "./OnlineFriends";
import AdsFeeds from "./AdsFeeds";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

function RightBar({ users }) {
  const classes = useStyles();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user } = useContext(AuthContext);
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user._id]);

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
            {friends.map((friend) => (
              <Link
                to={"/profile/" + friend.username}
                style={{ textDecoration: "none" }}
              >
                <div className={classes.rightbarFollowing} key={friend.id}>
                  <img
                    src={
                      friend.profilePicture
                        ? PF + friend.profilePicture
                        : PF + "noAvatar.jpg"
                    }
                    alt=""
                    className={classes.rightbarFollwingImg}
                  />
                  <span className={classes.rightbarfollowingName}>
                    {friend.username}
                  </span>
                </div>
              </Link>
            ))}
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
