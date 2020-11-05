import Grid from '@material-ui/core/Grid';
import UsersScreen from './components/UsersScreen';
import { ThemeProvider, StylesProvider, jssPreset } from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import theme from './providers/theme.provider';

import './App.css';

const App = () => {
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

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
