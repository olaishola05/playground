import React from 'react'
import TopBar from './TopBar'
import useStyles from '../components/ComponentsStyle'

function Home() {
    const classes = useStyles()
    return (
        <div className={classes.homeContainer}>
            <TopBar /> 
        </div>
    )
}

export default Home
