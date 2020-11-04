import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import AddIcon from '@material-ui/icons/Add';
import logo from '../assets/icon.png';

const users = [
    "נגה לבן",
    "ספיר מועלם",
    "עידן שוסטר"
];

function UsersScreen() {
    return (
        <Grid class="user-screen" container direction="column">
            <Grid container spacing={4} alignItems="center">
                <Grid item>
                    <img class="logo" src={logo}></img>
                </Grid>
                <Grid>
                    <h2 class="user-header">שלום עומר דיטל, למי תרצה לשלוח התראה?</h2>
                </Grid>
            </Grid>
            <br></br>
            <Grid container xs={8} direction="row">
                <Grid item direction="column">
                    <h3>החברים שלי</h3>
                    <List class="list" component="nav" aria-label="secondary mailbox folders">
                        {users.map(user => (
                            <ListItem class="list-item" button>
                                <ListItemText primary={user} />
                            </ListItem>))}
                        <ListItem class="list-item new-list-item" button>
                            <AddIcon />
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default UsersScreen