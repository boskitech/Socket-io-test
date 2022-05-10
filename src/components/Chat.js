import * as React from 'react';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import avatar4 from '../assets/avatar/4.png'

const Chat = () => {
  return (
    <Box sx={{width:'97%', borderRadius:'12px', float:'left', height:'100vh', backgroundColor:'#fff', overflow:'auto'}}>
        <Box>
            <List sx={{width:'100%'}}>
                <ListItem alignItems="flex-right" sx={{ width: 'auto', maxWidth: 360}}>
                    <ListItemAvatar>
                    <Avatar alt="Jamal" src={avatar4} />
                    </ListItemAvatar>
                    <ListItemText sx={{backgroundColor:'#efefef', padding:'10px', borderRadius:'0px 10px 10px 10px' }}
                    primary={
                        <React.Fragment>
                        <Typography
                            sx={{ color:'#333333', display: 'inline' }}
                            component="span"
                            variant="body6"
                        >
                            Hello my boy I'm still working
                        </Typography>
                        </React.Fragment>
                    }
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ color:'#555555', display: 'inline', float:'right' }}
                            component="span"
                            variant="body2"
                        >
                            3:30pm
                        </Typography>
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <ListItem alignItems="flex-end" sx={{ width: '100%', maxWidth: 360}}>
                    <ListItemAvatar>
                    <Avatar alt="Jamal" src={avatar4}/>
                    </ListItemAvatar>
                    <ListItemText sx={{backgroundColor:'#efefef', padding:'10px', borderRadius:'0px 10px 10px 10px' }}
                    primary={
                        <React.Fragment>
                        <Typography
                            sx={{ color:'#333333', display: 'inline' }}
                            component="span"
                            variant="body6"
                        >
                            Hello my boy I'm still working
                        </Typography>
                        </React.Fragment>
                    }
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ color:'#555555', display: 'inline', float:'right' }}
                            component="span"
                            variant="body2"
                        >
                            3:30pm
                        </Typography>
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <ListItem alignItems="flex-right" sx={{width:"100%", maxWidth:360, float:'right' }}>
                    <ListItemText sx={{backgroundColor:'#601c66', color:'white', width:'auto', padding:'10px', borderRadius:'10px 0px 10px 10px' }}
                    primary={
                        <React.Fragment>
                        <Typography
                            sx={{ color:'white', display: 'inline' }}
                            component="span"
                            variant="body6"
                        >
                            Hello my boy I'm still working
                        </Typography>
                        </React.Fragment>
                    }
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ color:'white', display: 'inline', float:'left' }}
                            component="span"
                            variant="body2"
                        >
                            3:30pm
                        </Typography>
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <ListItem alignItems="flex-right" sx={{ width: '100%', maxWidth: 360}}>
                    <ListItemAvatar>
                    <Avatar alt="Jamal" src={avatar4} />
                    </ListItemAvatar>
                    <ListItemText sx={{backgroundColor:'#efefef', width:'auto', padding:'10px', borderRadius:'0px 10px 10px 10px' }}
                    primary={
                        <React.Fragment>
                        <Typography
                            sx={{ color:'#333333', display: 'inline' }}
                            component="span"
                            variant="body6"
                        >
                            Hello my boy I'm still working
                        </Typography>
                        </React.Fragment>
                    }
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ color:'#555555', display: 'inline', float:'right' }}
                            component="span"
                            variant="body2"
                        >
                            3:30pm
                        </Typography>
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <ListItem alignItems="flex-right" sx={{width:"100%", maxWidth:360, float:'right' }}>
                    <ListItemText sx={{backgroundColor:'#601c66', color:'white', width:'auto', padding:'10px', borderRadius:'10px 0px 10px 10px' }}
                    primary={
                        <React.Fragment>
                        <Typography
                            sx={{ color:'white', display: 'inline' }}
                            component="span"
                            variant="body6"
                        >
                            Hello my boy I'm still working
                        </Typography>
                        </React.Fragment>
                    }
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ color:'white', display: 'inline', float:'left' }}
                            component="span"
                            variant="body2"
                        >
                            3:30pm
                        </Typography>
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <ListItem alignItems="flex-right" sx={{width:"100%", maxWidth:360, float:'right' }}>
                    <ListItemText sx={{backgroundColor:'#601c66', color:'white', width:'auto', padding:'10px', borderRadius:'10px 0px 10px 10px' }}
                    primary={
                        <React.Fragment>
                        <Typography
                            sx={{ color:'white', display: 'inline' }}
                            component="span"
                            variant="body6"
                        >
                            Hello my boy I'm still working
                        </Typography>
                        </React.Fragment>
                    }
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ color:'white', display: 'inline', float:'left' }}
                            component="span"
                            variant="body2"
                        >
                            3:30pm
                        </Typography>
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <ListItem alignItems="flex-right" sx={{width:"100%", maxWidth:360, float:'right' }}>
                    <ListItemText sx={{backgroundColor:'#601c66', color:'white', width:'auto', padding:'10px', borderRadius:'10px 0px 10px 10px' }}
                    primary={
                        <React.Fragment>
                        <Typography
                            sx={{ color:'white', display: 'inline' }}
                            component="span"
                            variant="body6"
                        >
                            Hello my boy I'm still working
                        </Typography>
                        </React.Fragment>
                    }
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ color:'white', display: 'inline', float:'left' }}
                            component="span"
                            variant="body2"
                        >
                            3:30pm
                        </Typography>
                        </React.Fragment>
                    }
                    />
                </ListItem>
            </List>
        </Box>
        <Box sx={{position:'fixed', bottom:'0',}}>
            <input type="text" placeholder="Type a message" style={{width:'480px', marginLeft:'10px', padding:'10px 0px 10px 20px', backgroundColor:'#efefef',  fontSize:'15px', borderRadius:'25px', height:'30px', border:'none', marginBottom:'20px'}}/>
            <button align="right" style={{width:'50px', cursor:'pointer', padding:'7px', float:'right', marginLeft:'10px', position:'relative', display:'block', fontSize:'12px', backgroundColor:'green', color:'white', alignContent:'right', borderRadius:'50px', height:'50px', border:'none'}}>         
                <SendIcon/>
            </button>
            
        </Box>
    </Box>
  )
}

export default Chat