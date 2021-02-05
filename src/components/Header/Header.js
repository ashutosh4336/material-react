import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Badge, Grid, InputBase } from '@material-ui/core';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
  },
  searchInput: {
    opacity: '0.6',
    padding: '5px 15px',
    fontSize: '0.8rem',

    '&:hover': {
      backgroundColor: '#f2f2f2',
    },
    '&:focus': {
      backgroundColor: '#f2f2f2',
    },
    '& .MuiSvgIcon-root': {
      marginRight: '8px',
    },
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static' className={classes.root}>
        <Toolbar>
          <Grid container alignItems='center'>
            <Grid item>
              <InputBase
                placeholder='Search Here...'
                className={classes.searchInput}
                startAdornment={<SearchIcon fontSize='small' />}
              />
            </Grid>

            <Grid item sm></Grid>

            <Grid item>
              <IconButton>
                <Badge badgeContent={4} color='secondary'>
                  <NotificationsNoneIcon fontSize='small' />
                </Badge>
              </IconButton>
              <IconButton>
                <Badge badgeContent={4} color='secondary'>
                  <ChatBubbleOutlineIcon fontSize='small' />
                </Badge>
              </IconButton>
              <IconButton>
                <PowerSettingsNewIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
