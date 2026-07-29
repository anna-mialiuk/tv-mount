import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function ChangeView({ center, zoom }) {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);

  return null;
}

function ServiceMap({ center, zoom, cities }) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <ChangeView center={center} zoom={zoom} />

      <TileLayer
        attribution="&copy; OpenStreetMap"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {cities.map((city) => (
        <Marker key={city.name} position={city.coords} />
      ))}
    </MapContainer>
  );
}

export default ServiceMap;
