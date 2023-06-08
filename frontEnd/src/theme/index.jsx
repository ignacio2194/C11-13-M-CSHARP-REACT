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
        // saddleBrown: "#472C1B",
        sienna: "#835C44",
        text: "#060407",
        murlywood: "#E5B89B",
        peachPuff: "rgba(255, 215, 189, 0.8)",
        yellow: "#FBE19D",
        muted: "#797979",
      }
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "initial",
            padding: "18px 48px",
            height: '63px',
            borderRadius: "6px",
            lineHeight: '27px',
            fontWeight: '700',
            fontSize: '18px',
            backgroundColor: "#835C44",
            color: "#fff",
            "&:hover": {
              backgroundColor: "primary.main",
            }
          },
        },
        variants: [
          {
            props: {
              size: 'small',
            },
            style: {
              padding: "18px 36px",
              height: '63px',
              borderRadius: "6px",
              lineHeight: '27px',
              fontWeight: '700',
              fontSize: '18px',
            },
          },
          {
            props: {
              size: 'large',
            },
            style: {
              padding: "18px 54px",
              height: '63px',
              borderRadius: "6px",
              lineHeight: '27px',
              fontWeight: '700',
              fontSize: '18px',
            },
          },
          {
            props: {
              variant: 'outlined',
            },
            style: {
              backgroundColor: "transparent",
              border: "3px solid #835C44",
              borderRadius: "6px",
            },
          },
          {
            props: {
              variant: 'yellow',
            },
            style: {
              backgroundColor: "#FBE19D",
              color: "#060407",
              "&:hover": {
                backgroundColor: "#F0C553",
              }
            },
          },

        ],
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