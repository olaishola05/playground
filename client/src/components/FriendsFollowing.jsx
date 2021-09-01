import React from "react";
import useStyles from "./ComponentsStyle";

function FriendsFollowing({ user }) {
  const classes = useStyles();
  const FrienList = () => {
    return (
      <>
        <li className={classes.leftbarFriend}>
          <img
            src={user.profilePicture}
            alt=""
            className={classes.leftbarFriendImg}
          />
          <span className={classes.leftbarFriendName}>{user.username}</span>
        </li>
      </>
    );
  };
  return <>{user.id === 1 ? null : <FrienList />}</>;
}

export default FriendsFollowing;
