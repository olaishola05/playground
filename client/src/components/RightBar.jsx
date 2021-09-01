import React from "react";
import useStyles from "./ComponentsStyle";
import { Users } from "../utils/mockData";
import OnlineFriends from "./OnlineFriends";
import AdsFeeds from "./AdsFeeds";

function RightBar() {
  const classes = useStyles();
  return (
    <div className={classes.rightbar}>
      <div className={classes.rightbarWrapper}>
        <AdsFeeds />
        <h4 className={classes.rightbarTitle}>Online Friends</h4>
        <ul className={classes.rightbarFriendList}>
          {Users.map((user) => (
            <OnlineFriends key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RightBar;
