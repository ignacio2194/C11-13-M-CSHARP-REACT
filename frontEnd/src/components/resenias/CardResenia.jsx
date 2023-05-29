import { Paper, Box, Typography, Rating } from '@mui/material';

const CardResenia = ({ resenia }) => {
  return (
    <Paper elevation={3} sx={{ padding: "16px", maxWidth: "350px", height: "270px", cursor: "pointer", backgroundColor: "#FFD7BD", borderRadius: "8px", border: "6px solid #855D44", margin: "0 16px" }}>
      <Box sx={{ display: "flex", height: "100%", flexDirection: "column", justifyContent: "space-between", alignItems: "center", borderRadius: "6px" }}>
        <Rating name="read-only" value={resenia.value} readOnly precision={0.5} sx={{ margin: "0 auto" }} size="small" />
        <Typography variant="body1" sx={{ height: "200px", whiteSpace: "wrap", overflow: "hidden", textOverflow: "ellipsis", fontSize: "18px", textAlign: "left" }}>{resenia.description}</Typography>
        <Typography variant="h6" sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", textAlign: "center" }}>{resenia.name}</Typography>
      </Box>
    </Paper>
  )
}

export default CardResenia;