import React from 'react'
import useStyles from './ComponentsStyle'
import { WorkOutline, Event, School, ChatBubble, GroupAdd } from '@material-ui/icons'


function LeftBar() {

    const classes = useStyles()
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
                        <span className={classes.leftbarListItemText}>Jobs and Internships</span>
                    </li>

                    <li className={classes.leftbarListItem}>
                        <ChatBubble className={classes.leftbarIcon} />
                        <span className={classes.leftbarListItemText}>Chat</span>
                    </li>
                </ul>

                <button className={classes.leftbarBtn}>
                    Show More
                </button>
                <hr className={classes.leftbarHr} />

                <ul className={classes.Lists}>
                    <li className={classes.leftbarFriend}>
                        <img src="./assets/img/hoody.jpeg" alt="" className={classes.leftbarFriendImg} />
                        <span className={classes.leftbarFriendName}>Sarah Angelina</span>
                    </li>

                    <li className={classes.leftbarFriend}>
                        <img src="./assets/img/ayo.jpeg" alt="" className={classes.leftbarFriendImg} />
                        <span className={classes.leftbarFriendName}>Ayomide A.</span>
                    </li>

                    <li className={classes.leftbarFriend}>
                        <img src="./assets/img/mrcool.jpeg" alt="" className={classes.leftbarFriendImg} />
                        <span className={classes.leftbarFriendName}>Angel Karma </span>
                    </li>

                    <li className={classes.leftbarFriend}>
                        <img src="./assets/img/solo.jpeg" alt="" className={classes.leftbarFriendImg} />
                        <span className={classes.leftbarFriendName}>Kay Martial</span>
                    </li>
                    <li className={classes.leftbarFriend}>
                        <img src="./assets/img/hacker.jpeg" alt="" className={classes.leftbarFriendImg} />
                        <span className={classes.leftbarFriendName}>Night Owl</span>
                    </li>

                    <li className={classes.leftbarFriend}>
                        <img src="./assets/img/mrcool.jpeg" alt="" className={classes.leftbarFriendImg} />
                        <span className={classes.leftbarFriendName}>Mailaka Tyrone</span>
                    </li>

                    <li className={classes.leftbarFriend}>
                        <img src="./assets/img/micon.jpeg" alt="" className={classes.leftbarFriendImg} />
                        <span className={classes.leftbarFriendName}>Jimmy Singh</span>
                    </li>

                    <li className={classes.leftbarFriend}>
                        <img src="./assets/img/micon.jpeg" alt="" className={classes.leftbarFriendImg} />
                        <span className={classes.leftbarFriendName}>Jimmy Singh</span>
                    </li>

                    <li className={classes.leftbarFriend}>
                        <img src="./assets/img/micon.jpeg" alt="" className={classes.leftbarFriendImg} />
                        <span className={classes.leftbarFriendName}>Jimmy Singh</span>
                    </li>

                    <li className={classes.leftbarFriend}>
                        <img src="./assets/img/micon.jpeg" alt="" className={classes.leftbarFriendImg} />
                        <span className={classes.leftbarFriendName}>Jimmy Singh</span>
                    </li>

                    <li className={classes.leftbarFriend}>
                        <img src="./assets/img/micon.jpeg" alt="" className={classes.leftbarFriendImg} />
                        <span className={classes.leftbarFriendName}>Jimmy Singh</span>
                    </li>

                    <li className={classes.leftbarFriend}>
                        <img src="./assets/img/micon.jpeg" alt="" className={classes.leftbarFriendImg} />
                        <span className={classes.leftbarFriendName}>Jimmy Singh</span>
                    </li>

                    <li className={classes.leftbarFriend}>
                        <img src="./assets/img/micon.jpeg" alt="" className={classes.leftbarFriendImg} />
                        <span className={classes.leftbarFriendName}>Jimmy Singh</span>
                    </li>
                    
                </ul>
            </div>
        </div>
    )
}

export default LeftBar
