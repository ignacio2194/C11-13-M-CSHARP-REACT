import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import markerRestaurant from "../../assets/icons/restaurant_position.png";
import markerClient from "../../assets/icons/client_position.png";
import { Box, Typography } from "@mui/material";

const Map = () => {
  const customMarkerRestaurant = new icon({
    iconUrl: markerRestaurant,
    iconSize: [38, 38]
  });

  const customMarkerClient = new icon({
    iconUrl: markerClient,
    iconSize: [38, 38]
  });

  return (
    <Box sx={{ width: { lg: "600px", md: "90%", xs: "100%" }, height: { md: "250px" }, margin: "auto" }}>
      <MapContainer
        style={{ width: "100%", height: "250px" }}
        zoom={16}
        center={[19.413471, -99.175697]}
        scrollWheelZoom={false}
        fadeAnimation={true}
        markerZoomAnimation={true}
      >
        <TileLayer
          attribution="CyclOSM" // from http://leaflet-extras.github.io/leaflet-providers/preview/
          url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
        />
        <Marker position={[19.413471, -99.175697]} icon={customMarkerRestaurant}>
          <Popup>
            <Typography>Sabores De La Tierra</Typography>
          </Popup>
        </Marker>
        <Marker position={[19.411791, -99.171377]} icon={customMarkerClient}>
          <Popup>
            <Typography>Cliente con ganas de hacer una reserva</Typography>
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
}

export default Map;