import { styled, Container, Typography } from '@mui/material';

const ContentWrapper = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(1),
  marginBottom: theme.spacing(0),

}));

const Label = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(0),
  paddingBottom: theme.spacing(0),
  fontFamily: 'Parisienne, cursive',
  fontWeight: 'light',
}));

export default function MenuLegend() {
  return (
    <ContentWrapper maxWidth="xlg" sx={{ marginTop: { xs: "32px", lg: "89px" } }}>
      <Label variant="h6" component="label" sx={{ fontSize: "clamp(2rem, 5vw, 6rem)", marginBottom: { xs: "32px", lg: "59px" } }}>
        Menú
      </Label>
      <Typography variant="body1" component="h3" style={{ fontFamily: 'open-sans, sans-serif', fontSize: "1.5rem", width: "60%" }}>
        Nuestro menú resalta la diversidad de sabores y técnicas tradicionales de la región, utilizando ingredientes frescos y auténticos para ofrecerte una experiencia gastronómica única.
      </Typography>
    </ContentWrapper>
  );
}