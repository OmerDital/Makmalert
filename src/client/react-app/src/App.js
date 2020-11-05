import React, { Suspense, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { ThemeProvider, StylesProvider, jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import theme from './providers/theme.provider';
import socketIOClient from 'socket.io-client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { auth } from './hooks';
import './App.css';
import UsersScreen from './components/UsersScreen';
import DistributeAlertScreen from './components/DistributeAlertScreen';

const ENDPOINT = "http://127.0.0.1:8080";

const onLoad = () => {
  const socket = socketIOClient(ENDPOINT, {
    query: {
      ...auth()
    }
  });

  socket.on("FromAPI", data => {
    debugger;
    console.log(`from server - ${data.name} is connected`);
  });
};

const App = () => {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

  useEffect(onLoad, []);

  return (
    <Router>
      <StylesProvider jss={jss}>
        <ThemeProvider theme={theme}>
          <Grid class='root'>
            <Suspense fallback={<div>loading...</div>}>
              <Switch>
                <Route exact path='/'>
                  <UsersScreen />
                </Route>
                <Route path='/distributeAlert'>
                  <DistributeAlertScreen />
                </Route>
              </Switch>
            </Suspense>
          </Grid>
        </ThemeProvider>
      </StylesProvider>
    </Router>
  );
};

export default App;
