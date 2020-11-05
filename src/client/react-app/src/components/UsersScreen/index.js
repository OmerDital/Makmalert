import React from 'react';
import { Grid, Button, makeStyles, createStyles } from '@material-ui/core';
import logo from '../../assets/icon.png';
import ButtonList from './componenets/ButtonList';

const users = ['נגה לבן', 'ספיר מועלם', 'עידן שוסטר'];
const groups = ['תוכניתנים', 'בודקים', 'PM'];

const UsersScreen = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.userScreen} container direction='column'>
        <Grid container spacing={4} alignItems='center'>
          <Grid item>
            <img className={classes.logo} src={logo}></img>
          </Grid>
          <Grid>
            <h2 className={classes.userHeader}>שלום עומר דיטל, למי תרצה לשלוח התראה?</h2>
          </Grid>
        </Grid>
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
      <Button className={classes.alertButton} variant='outlined' color='primary'>
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
    userHeader: {
      color: '#ffc107',
      textAlign: 'right',
    },
    logo: {
      height: '100px',
      width: '100px',
    },
    alertButton: {
      position: 'absolute',
      right: '30px',
      bottom: '30px'
    }
  })
);

export default UsersScreen;
