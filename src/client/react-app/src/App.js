import { useEffect } from 'react';
import socketIOClient from 'socket.io-client';

import { auth } from './hooks';

import Grid from '@material-ui/core/Grid';
import UsersScreen from './users-screen';
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

function App() {
  useEffect(onLoad, []);

  return (
    <Grid class="root">
      <UsersScreen />
    </Grid>
  );
}

export default App;
