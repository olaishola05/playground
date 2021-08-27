import React from 'react'
import TopBar from './TopBar'
import useStyles from '../components/ComponentsStyle'
import Feed from './Feed'
import LeftBar from './LeftBar'
import RightBar from './RightBar'

function Home() {
    const classes = useStyles()
    return (
        <>
            <TopBar /> 
            <div className={classes.homeContainer}>
                <LeftBar />
                <Feed />
                <RightBar/>
            </div>
            
        </>
    )
}

export default Home
