import { styled } from '@mui/system';
import { Container, Typography } from '@mui/material';

const ContentWrapper = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
}));

const Label = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontFamily: 'Parisienne, cursive',
  fontSize: '3rem', // Dos veces más grande que antes
  fontWeight: 'bold',
}));

export default function MenuLegend() {
  return (
    <ContentWrapper maxWidth="xlg">
      <Label variant="h6" component="label">
        Menú
      </Label>
      <Typography variant="body1" component="p">
        Our menu highlights the diversity of flavors and traditional techniques
        of the region, using fresh and authentic ingredients to offer you a
        unique gastronomic experience.
      </Typography>
    </ContentWrapper>
  );
}
