import { createTheme } from '@mui/material/styles';
import { brown } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: brown[800],
    },
    secondary: {
      main: '#f44336',
    },
  },
});
