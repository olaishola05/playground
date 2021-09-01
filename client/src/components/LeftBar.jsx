import React from "react";
import useStyles from "./ComponentsStyle";
import {
  WorkOutline,
  Event,
  School,
  ChatBubble,
  GroupAdd,
} from "@material-ui/icons";
import FriendsFollowing from "./FriendsFollowing";
import { Users } from "../utils/mockData";

function LeftBar() {
  const classes = useStyles();
  return (
    <div className={classes.leftbar}>
      <div className={classes.leftbarWrapper}>
        <ul className={classes.Lists}>
          <li className={classes.leftbarListItem}>
            <School className={classes.leftbarIcon} />
            <span className={classes.leftbarListItemText}>Free Course</span>
          </li>

          <li className={classes.leftbarListItem}>
            <Event className={classes.leftbarIcon} />
            <span className={classes.leftbarListItemText}>Events</span>
          </li>

          <li className={classes.leftbarListItem}>
            <GroupAdd className={classes.leftbarIcon} />
            <span className={classes.leftbarListItemText}>Meetups</span>
          </li>

          <li className={classes.leftbarListItem}>
            <WorkOutline className={classes.leftbarIcon} />
            <span className={classes.leftbarListItemText}>
              Jobs and Internships
            </span>
          </li>

          <li className={classes.leftbarListItem}>
            <ChatBubble className={classes.leftbarIcon} />
            <span className={classes.leftbarListItemText}>Chat</span>
          </li>
        </ul>

        <button className={classes.leftbarBtn}>Show More</button>
        <hr className={classes.leftbarHr} />

        <ul className={classes.Lists}>
          {Users.map((user) => (
            <FriendsFollowing key={user.id} user={user} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LeftBar;
