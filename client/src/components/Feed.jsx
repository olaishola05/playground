import React from 'react'
import useStyles from './ComponentsStyle'
import Post from './Post'
import Share from './Share'

import { Posts } from '../utils/mockData'

function Feed() {
    const classes = useStyles()
    return (
        <div className={classes.feed}>
            <div className={classes.feedWrapper}>
                <Share/>
                {Posts.map((post) => (
                    <Post key={post.id} post={post}/>
                ))}
            </div>
        </div>
    )
}

export default Feed
