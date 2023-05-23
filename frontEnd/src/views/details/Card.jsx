import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MediaCard({ urlImage, namePlato }) {
  return (
    <Card sx={{ width: "345px" }}>
      <CardMedia
        sx={{ maxWidth: "345px", height: 140, objectFit: "contain" }}
        image={urlImage}
        title={namePlato}
      />
      <CardContent sx={{ textAlign: "center" }}>
        <Typography variant="h5" component="div">
          {namePlato}
        </Typography>
      </CardContent>
    </Card>
  );
}