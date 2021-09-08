import React from "react";
import useStyles from "./ComponentsStyle";

function AdsFeeds() {
  const classes = useStyles();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <div className={classes.info}>
        <span>Some blog feeds about coding and jobs</span>

        <img src={PF + "img/ads.jpeg"} alt="" className={classes.rightbarAd} />
      </div>
    </>
  );
}

export default AdsFeeds;
