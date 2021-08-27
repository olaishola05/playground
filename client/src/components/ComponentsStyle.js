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
        top: 0,
        
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
        marginRight: '30px',


    },

    // LeftBar component
    leftbar:{
        flex: 3,
        height: 'calc(100vh - 50px)',
        overflowY: 'scroll',

        '&::-webkit-scrollbar':{
            width: '5px'
        },
    
        '&::-webkit-scrollbar-track':{
            backgroundColor: '#f1f1f1'
        },
        '&::-webkit-scrollbar-thumb':{
            backgroundColor: 'rgb(179, 179, 179)'
        }
    },

    leftbarWrapper:{
        padding: '20px',
    },

    Lists:{
        padding: 0,
        margin: 0,
        listStyle: 'none'
    },

    leftbarListItem:{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px'
    },

    leftbarIcon:{
        marginRight: '15px'
    },

    leftbarBtn:{
        width: '150px',
        border: 'none',
        borderRadius: '5px',
        fontWeight: '500',
        padding: '10px',
        backgroundColor: '#7869EB',
        color: 'white'
    },

    leftbarHr:{
        margin: '20px 0'
    },

    leftbarFriend:{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px'
    },

    leftbarFriendImg:{
        width: '32px',
        height: '32px',
        borderRadius: "50%",
        objectFit: 'cover',
        cursor: 'pointer',
        marginRight: '10px'
    },


    // Feed
    feed:{
        flex: 5.5,
    },

    feedWrapper:{
        padding: '20px'
    },

    // Share
    share:{
        width:'100%',
        height: '170px',
        borderRadius: '10px',
        webkitBoxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
        boxShadow: '0px 0px 16px -8px rgba(0, 0, 0, 0.68)',
    },

    shareWrapper:{
        padding: '10px',
    },

    shareTop:{
        display: 'flex',
        alignItems: 'center'
    },

    shareInput:{
        border: 'none',
        width: '80%',

        '&:focus':{
            outline: 'none'
        }
    },

    shareImg:{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginRight: '10px'
    },
    
    shareHr:{
        margin: '20px'
    },

    shareBottom:{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'space-between'
    },

    shareOptions:{
        display: 'flex',
        marginLeft: '20px'
    },

    shareOption:{
        display: 'flex',
        alignItems: 'center',
        marginRight: '15px',
        cursor: 'pointer'
    },
    
    shareIcon: {
        fontSize: '18px',
        marginRight: '10px'
    },

    shareOptionText:{
        fontSize: '14px',
        fontWeight: 500
    },

    shareBtn:{
        border: 'none',
        padding: '7px',
        borderRadius: '5px',
        backgroundColor: 'green',
        color: 'white',
        fontWeight: 500,
        marginRight: '20px',
        cursor: 'pointer'
    },

    // RightBar 
    rightbar: {
        flex: 3.5,
        margin: '1px solid red',
        backgroundColor: 'maroon'
    },

    rightbarWrapper:{
        padding: '20px 20px 0 0'
    },
}))

export default useStyles