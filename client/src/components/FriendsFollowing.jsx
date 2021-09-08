import React from "react";
import useStyles from "./ComponentsStyle";

function FriendsFollowing({ user }) {
  const classes = useStyles();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const FrienList = () => {
    return (
      <>
        <li className={classes.leftbarFriend}>
          <img
            src={PF + user.profilePicture}
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
