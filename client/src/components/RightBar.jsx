import React from 'react'
import useStyles from './ComponentsStyle'

function RightBar() {
    const classes = useStyles();

    return (
        <div className={classes.rightbar}>
            <div className={classes.rightbarWrapper}>
                hello
            </div>
        </div>
    )
}

export default RightBar
