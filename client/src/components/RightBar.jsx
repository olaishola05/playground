import React from 'react'
import useStyles from './ComponentsStyle'

function RightBar() {
    const classes = useStyles();

    return (
        <div className={classes.rightbar}>
            <div className={classes.rightbarWrapper}>
                <div className={classes.info}>
                </div>

                <img src="./assets/img/ads.jpeg" alt="" className={classes.rightbarAd} />
                <h4 className={classes.rightbarTitle}>Online Friends</h4>
                <ul className={classes.rightbarFriendList}>
                    <li className={classes.rightbarFriend}>
                        <div className={classes.rightbarProfileImgContainer}>
                        <img
                            src="./assets/img/smile.jpeg"
                            alt=""
                            className={classes.rightProfileImg}
                        />
                        <span className={classes.rightbarOnline}></span>
                        </div>
                        <span className={classes.rightbarUsername}>J Carter</span>
                    </li>

                    <li className={classes.rightbarFriend}>
                        <div className={classes.rightbarProfileImgContainer}>
                        <img
                            src="./assets/img/solo.jpeg"
                            alt=""
                            className={classes.rightProfileImg}
                        />
                        <span className={classes.rightbarOnline}></span>
                        </div>
                        <span className={classes.rightbarUsername}>Nate Mosaic</span>
                    </li>

                    <li className={classes.rightbarFriend}>
                        <div className={classes.rightbarProfileImgContainer}>
                        <img
                            src="./assets/img/swag.jpeg"
                            alt=""
                            className={classes.rightProfileImg}
                        />
                        <span className={classes.rightbarOnline}></span>
                        </div>
                        <span className={classes.rightbarUsername}>Sean Carter</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default RightBar
