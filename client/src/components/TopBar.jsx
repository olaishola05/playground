import React from 'react'
import useStyles from './ComponentsStyle'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'

function TopBar() {
    const classes = useStyles()
    return (
        <div className={classes.topbarContainer}>
            <div className={classes.topbarLeft}>
                <span className={classes.logo}>PlayGround</span>
            </div>

            <div className={classes.topbarCenter}>
                <div className={classes.searchBar}>
                <Search className={classes.searchIcon} />
                <input placeholder='search fro friends, posts or videos' className={classes.searchInput} />
                </div>
            </div>

            <div className={classes.topbarRight}>
                <div className={classes.topbarLinks}>
                    <span className={classes.topbarLink}>Homepage</span>
                    <span className={classes.topbarLink}>Timeline</span>
               </div>

               <div className={classes.topbarIcons}>
                   <div className={classes.topbarIconItem}>
                        <Person />
                        <span className={classes.topbarIconBadge}>1</span>
                   </div>

                   <div className={classes.topbarIconItem}>
                        <Chat />
                        <span className={classes.topbarIconBadge}>2</span>
                   </div>

                   <div className={classes.topbarIconItem}>
                        <Notifications />
                        <span className={classes.topbarIconBadge}>10</span>
                   </div>    
               </div>
            </div>
            <img src="./assets/img/gee.jpeg" alt="" className={classes.topbarImg} />
        </div>
    )
}

export default TopBar
