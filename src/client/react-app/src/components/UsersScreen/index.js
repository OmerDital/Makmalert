import React from 'react';
import { Grid, Button, makeStyles, createStyles } from '@material-ui/core';
import {NavLink} from 'react-router-dom';

import ButtonList from './componenets/ButtonList';
import AppHeader from '../AppHeader';

const users = ['נגה לבן', 'ספיר מועלם', 'עידן שוסטר'];
const groups = ['תוכניתנים', 'בודקים', 'PM'];

const UsersScreen = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.userScreen} container direction='column'>
        <AppHeader headline='שלום עומר דיטל, למי תרצה לשלוח התראה?'/>
        <br></br>
        <Grid container direction='row' justify='space-around'>
          <Grid item direction='column'>
            <h3>החברים שלי</h3>
            <ButtonList items={users} />
          </Grid>
          <Grid item direction='column'>
            <h3>קבוצות</h3>
            <ButtonList items={groups} />
          </Grid>
        </Grid>
      </Grid>
      <Button className={classes.alertButton} variant='outlined' color='primary' component={NavLink} to="/distributeAlert">
        שלח התראה
      </Button>
    </>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    userScreen: {
      padding: '50px',
      flexGrow: 1,
    },
    alertButton: {
      position: 'absolute',
      right: '30px',
      bottom: '30px',
    },
  })
);

export default UsersScreen;
