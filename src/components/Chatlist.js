import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import avatar1 from '../assets/avatar/1.png'
// import avatar2 from '../assets/avatar/2.png'
import avatar3 from '../assets/avatar/3.png'
import avatar4 from '../assets/avatar/4.png'

export default function AlignItemsList() {
  return (
    <List sx={{borderRadius:'10px', width: '100%',  bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Jamal" src={avatar4} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                sx={{ color:'#222222', display: 'inline' }}
                component="span"
                variant="body6"
              >
                Ibrahim Jamal
              </Typography>
              <Typography
                sx={{ float:'right', fontSize:'13px', color:'#222222', display: 'inline' }}
                component="span"
              >
                4:00pm
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ color:'#555555', display: 'inline' }}
                component="span"
                variant="body2"
              >
                It's nice working with you
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Kenneth" src={avatar1} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                sx={{ color:'#222222', display: 'inline' }}
                component="span"
                variant="body6"
              >
                Kenneth Audu
              </Typography>
              <Typography
                sx={{ float:'right', fontSize:'13px', color:'#222222', display: 'inline' }}
                component="span"
              >
                3:50pm
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ color:'#555555', display: 'inline' }}
                component="span"
                variant="body2"
              >
                When are you submitting the project?
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Bashir" src={avatar3} />
        </ListItemAvatar>
        <ListItemText
          primary={
            <React.Fragment>
              <Typography
                sx={{ color:'#222222', display: 'inline' }}
                component="span"
                variant="body6"
              >
                Bashir Ahmad
              </Typography>
              <Typography
                sx={{ float:'right', fontSize:'13px', color:'#222222', display: 'inline' }}
                component="span"
              >
                3:30pm
              </Typography>
            </React.Fragment>
          }
          secondary={
            <React.Fragment>
              <Typography
                sx={{ color:'#555555', display: 'inline' }}
                component="span"
                variant="body2"
              >
                Yeah I purchased the form yesterday
              </Typography>
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}