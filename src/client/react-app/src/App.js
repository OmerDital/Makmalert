import Grid from '@material-ui/core/Grid';
import UsersScreen from './users-screen';

import './App.css';

import { useEffect } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = "http://127.0.0.1:8080";

function App() {
  useEffect(() => {
    const socket = socketIOClient(ENDPOINT);
    socket.on("FromAPI", data => {
      console.log('from server ' + data);
    });
  }, []);

  return (
    <Grid class="root">
      <UsersScreen />
    </Grid>
  );
}

export default App;
