import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundColor: '#FFFFFF'
    },

    homeContainer:{
        display: 'flex',
        width: '100%',
        backgroundColor: '#FFFFFF'
    },
    // Topbar
    topbarContainer:{
        height: '50px',
        width: '100%',
        backgroundColor:'#7869EB',
        display: 'flex',
        alignItems: 'center',
        position: 'sticky',
        top: 0
    },

    logo:{
        fontSize: '24px',
        marginLeft: '20px',
        fontWeight: 'bold',
        color: 'white',
        cursor: 'pointer'
    },
    
    topbarLeft:{
        flex: 3,
    },

    topbarCenter:{
        flex: 4,
    },

    searchBar:{
        width: '100%',
        height: '30px',
        backgroundColor: 'white',
        borderRadius: '30px',
        display: 'flex',
        alignItems: 'center',
    },

    searchIcon: {
        fontSize: '20px !important',
        marginLeft: '10px'
    },

    searchInput:{
        border: 'none',
        width: '70%',

        '&:focus':{
            outline: 'none'
        },
    },

    topbarRight:{
        flex: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        color: 'white',
    },

    topbarLink: {
        marginRight: '10px',
        fontSize: '14px',
        cursor: 'pointer'
    },

    topbarIcons:{
        display: 'flex'
    },

    topbarIconItem: {
        marginRight: '15px',
        cursor: 'pointer',
        position: 'relative'
    },

    topbarIconBadge:{
        width: '15px',
        height: '15px',
        backgroundColor: 'red',
        borderRadius: '50%',
        color: 'white',
        position: 'absolute',
        top: '-5px',
        right: '-5px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '12px'
    },

    topbarImg:{
        width: '32px',
        height: '32px',
        borderRadius: "50%",
        objectFit: 'cover',
        cursor: 'pointer',
        marginRight: '30px'

    },

    // Share
    
    
}))

export default useStyles