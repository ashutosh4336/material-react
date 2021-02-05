import { makeStyles, withStyles } from '@material-ui/core';
import React from 'react';
// import './sidemenu.css';

// widthStyle & makeStyle
const styles = {
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0px',
    width: '320px',
    height: '100vh',
    backgroundColor: '#253053',
  },
};

// const useStyles = makeStyles({
//   sideMenu: {
//     display: 'flex',
//     flexDirection: 'column',
//     position: 'absolute',
//     left: '0px',
//     width: '320px',
//     height: '100vh',
//     backgroundColor: '#253053',
//   },
// });

const SideMenu = (props) => {
  // const classes = useStyles();
  const { classes } = props;

  return (
    <div className={classes.sideMenu}>
      <p className='text-light'>Hi</p>
    </div>
  );
};

export default withStyles(styles)(SideMenu);
