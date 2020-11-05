import React from 'react';
import { Grid, makeStyles, createStyles, Button } from '@material-ui/core';
import AppHeader from '../AppHeader';
import ButtonList from '../UsersScreen/componenets/ButtonList';
import {Route} from 'react-router-dom';

const DistributeAlertScreen = () => {
  const classes = useStyles();
  const alerts = ['תעברו לי על הPR ', 'הכנסתי את הPR, אפשר לבדוק'];
  return (
    <Grid container direction='column' className={classes.root}>
      <AppHeader headline='שלום, עומר דיטל' />
      <br></br>
      <Grid container direction='row' justify='space-between'>
        <ButtonList items={alerts} />
        <Button variant='outlined' color='primary' className={classes.alertButton}>
          <h1>הפץ התראה</h1>
        </Button>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '50px',
    },
    alertButton: {
      marginRight: '30px',
      width: '400px'
    },
  })
);

export default DistributeAlertScreen;
