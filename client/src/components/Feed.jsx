import React from 'react'
import useStyles from './ComponentsStyle'
import Share from './Share'

function Feed() {
    const classes = useStyles()
    return (
        <div className={classes.feed}>
            <div className={classes.feedWrapper}>
                <Share/>
            </div>
        </div>
    )
}

export default Feed
