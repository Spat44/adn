import './App.css';
import { Outlet, Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const theme = createTheme();

function App() {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
       <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            ADN - Il faut sauver Barack Obama!
          </Typography>
        </Toolbar>
      </AppBar>

      </ThemeProvider>
      <Outlet />
    </div>
  );
}

export default App;
