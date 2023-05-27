import { styled, Container, Typography } from '@mui/material';

const ContentWrapper = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  marginTop: theme.spacing(15), 
  marginBottom: theme.spacing(0),

}));

const Label = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(0),
  paddingBottom: theme.spacing(0),
  fontFamily: 'Parisienne, cursive',
  fontSize: '6rem',
  fontWeight: 'light',
}));

export default function MenuLegend() {
  return (
    <ContentWrapper maxWidth="xlg">
      <Label variant="h6" component="label">
        Menú
      </Label>
      <Typography variant="body1" component="h3" style={{fontFamily: 'open-sans, sans-serif', fontSize:"1.5rem", width:"65%"}}>
      Nuestro menú resalta la diversidad de sabores y técnicas tradicionales de la región, utilizando ingredientes frescos y auténticos para ofrecerte una experiencia gastronómica única.
      </Typography>
    </ContentWrapper>
  );
}