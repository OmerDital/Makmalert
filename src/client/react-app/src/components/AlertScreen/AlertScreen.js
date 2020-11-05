import React from 'react';
import Grid from '@material-ui/core/Grid';
import pigeon from '../assets/pigeon.png';

function AlertScreen() {
    return (
        <Grid class="alert-screen" container direction="column">
            <Grid container spacing={0}>
                <Grid item>
                <div class="speach-bubble left-side">יש לי התראה מעומר דיטל: הכנסתי את הPR, אפשר לבדוק :)</div>
                </Grid>
                <Grid item>
                <img class="pigeon" src={pigeon}></img>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default AlertScreen