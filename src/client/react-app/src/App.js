import { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import UsersScreen from './components/UsersScreen';
import { ThemeProvider, StylesProvider, jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import theme from './providers/theme.provider';
import socketIOClient from 'socket.io-client';

import { auth } from './hooks';
import './App.css';

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
    <StylesProvider jss={jss}>
      <ThemeProvider theme={theme}>
        <Grid class='root'>
          <UsersScreen />
        </Grid>
      </ThemeProvider>
    </StylesProvider>
  );
};

export default App;
