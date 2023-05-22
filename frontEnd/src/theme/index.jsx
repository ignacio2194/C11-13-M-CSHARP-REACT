import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';

const MuiThemeProvider = ({ children }) => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#472C1B',
        contrastText: '#fff',
      },
      custom: {
        lightBrown: "#855D44",
        yellow: "#FBE19D",
      }
    },
    components: {
      // Name of the component
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            textTransform: "uppercase",
            borderRadius: "4.68px",
            padding: "11.71px 18.74px",
            fontWeight: "bold",
            fontSize: "14px"
          },
        },
      },
    },
  });

  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MuiThemeProvider;