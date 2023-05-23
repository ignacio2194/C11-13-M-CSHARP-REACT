import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Box, Paper, Stack } from '@mui/material';
import { useNavigate } from "react-router-dom"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const Ticket = ({ open, setOpen }) => {
  const navigate = useNavigate();

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
    navigate("/detalles-pedido")
  };

  return (
    <Box>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} textCenter sx={{ backgroundColor: "custom.yellow", textAlign: "center" }}>
          ¡Tu reservación fue exitosa!
        </BootstrapDialogTitle>
        <Paper sx={{ backgroundColor: "custom.yellow" }}>
          <DialogContent dividers>
            <Typography variant="h6" sx={{ textAlign: "center" }}>Sabores de la Tierra</Typography>
            <Box>
              <Typography gutterBottom>Nombre: Michael Kelso</Typography>
              <Typography gutterBottom>Fecha: Jueves 25 de Mayo de 2023</Typography>
              <Typography gutterBottom>Reservación: 2 personas</Typography>
              <Typography gutterBottom>Hora: 14:00hs</Typography>
            </Box>
            <Box>
              <Typography gutterBottom>Sucursal A</Typography>
              <Typography gutterBottom>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et.
              </Typography>
            </Box>
          </DialogContent>
        </Paper>
        <DialogActions sx={{ backgroundColor: "custom.yellow" }}>
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", p: "24px" }}>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              justifyContent="space-between"
              alignItems="center"
              spacing={4}
            >
              <Button variant="contained" autoFocus onClick={handleClose}>
                Enviar al Email
              </Button>
              <Button variant="contained" onClick={handleClose}>
                Google Calendar
              </Button>
            </Stack>
          </Box>
        </DialogActions>
      </BootstrapDialog>
    </Box>
  );
}

export default Ticket;