import React from "react";
import useStyles from "./ComponentsStyle";

function AdsFeeds() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.info}>
        <span>Some blog feeds about coding and jobs</span>

        <img
          src="./assets/img/ads.jpeg"
          alt=""
          className={classes.rightbarAd}
        />
      </div>
    </>
  );
}

export default AdsFeeds;
