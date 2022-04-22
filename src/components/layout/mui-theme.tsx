import { createTheme, ThemeProvider } from '@mui/material';
import { ReactNode } from 'react';

const theme = createTheme({
  palette: {
    primary: { main: 'rgb(107,124,118)', light: 'rgb(209,213,219)', dark: 'rgb(55,65,81)' },
  },
});

export const MuiTheme = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
