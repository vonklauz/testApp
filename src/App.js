import './App.scss';
import Header from './components/header/Header';
import MainPage from './components/MainPage';
import { CssBaseline, StylesProvider } from '@material-ui/core';
import { createMuiTheme, ThemeProvider  } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        fontFamily: 'Inter, sans-serif',
      },
    },
  },
});

function App() {
  return (
    <>
    <StylesProvider injectFirst>
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <div className="App">
      <Header/>
      <MainPage/>
    </div>
    </ThemeProvider>
    </StylesProvider>
    </>
  );
}

export default App;
