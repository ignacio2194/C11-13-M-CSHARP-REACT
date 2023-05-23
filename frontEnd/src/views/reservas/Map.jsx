import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { icon } from "leaflet";
import markerRestaurant from "../../assets/icons/restaurant_position.png";
import markerClient from "../../assets/icons/restaurant_position.png";
import { Typography } from "@mui/material";

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
    <>
      <MapContainer
        style={{ width: "100%", height: "100%" }}
        zoom={13}
        center={[-34.63529, -58.36271]}
        scrollWheelZoom={false}
        fadeAnimation={true}
        markerZoomAnimation={true}
      >
        <TileLayer
          attribution="CyclOSM" // from http://leaflet-extras.github.io/leaflet-providers/preview/
          url="https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"
        />
        <Marker position={[-34.63529, -58.36271]} icon={customMarkerRestaurant}>
          <Popup>
            <Typography>Acá queda el restaurante, loko</Typography>
          </Popup>
        </Marker>
        <Marker position={[-34.63169, -58.36980]} icon={customMarkerClient}>
          <Popup>
            <Typography>Acá está el cliente, supuestamente xd</Typography>
          </Popup>
        </Marker>
      </MapContainer>
    </>
  );
}

export default Map;