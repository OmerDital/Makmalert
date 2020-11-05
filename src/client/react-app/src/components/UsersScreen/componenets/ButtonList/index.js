import React from 'react';
import { List, ListItemText, ListItem, makeStyles, Grid, createStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import clsx from 'clsx';

const ButtonList = ({ items }) => {
  const classes = useStyles();

  return (
    <List className={classes.list}>
      {items.map((item) => (
        <ListItem className={classes.listItem} button>
          <ListItemText primary={item} />
        </ListItem>
      ))}
      <ListItem className={clsx(classes.listItem, classes.newListItem)} button>
        <Grid container direction='row' justify='center'>
          <Grid item>
            <AddIcon />
          </Grid>
        </Grid>
      </ListItem>
    </List>
  );
};

const useStyles = makeStyles(() =>
  createStyles({
    list: {
      width: '400px',
    },
    listItem: {
      backgroundColor: 'rgb(40, 44, 52)',
      padding: '5px',
      marginBottom: '7px',
      '&:hover': {
        cursor: 'pointer',
        fontWeight: 'bold',
      },
    },
    newListItem: {
      color: 'rgb(143, 170, 220)',
      borderStyle: 'solid',
      borderColor: 'rgb(143, 170, 220',
    },
  })
);

export default ButtonList;
