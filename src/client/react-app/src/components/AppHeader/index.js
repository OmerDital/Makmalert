import React from 'react';
import { Grid, makeStyles, createStyles } from '@material-ui/core';
import logo from '../../assets/icon.png';

const AppHeader = ({headline}) => {
  const classes = useStyles();

  return (
    <Grid container spacing={4} alignItems='center'>
      <Grid item>
        <img className={classes.logo} src={logo}></img>
      </Grid>
      <Grid>
        <h2 className={classes.userHeader}>{headline}</h2>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    userHeader: {
      color: '#ffc107',
      textAlign: 'right',
    },
    logo: {
      height: '100px',
      width: '100px',
    },
  })
);

export default AppHeader;
