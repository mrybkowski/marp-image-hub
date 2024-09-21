'use client';

import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import { useTheme } from 'next-themes';

import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import 'leaflet-defaulticon-compatibility';

const ContactMap = () => {
  const position: LatLngExpression = [52.1031, 20.6265];

  const { theme, resolvedTheme } = useTheme();

  const isDarkMode = theme === 'dark' || resolvedTheme === 'dark';

  return (
    <MapContainer
      center={position}
      zoom={13}
      className="border-y border-section rounded-[40px] bg-white dark:bg-destructive/50 z-0"
      style={{ height: '100%', minHeight: '300px', width: '100%' }}>
      <TileLayer
        url={
          isDarkMode
            ? 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png'
            : 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        }
      />
      <Marker position={position}>
        <Popup>Office</Popup>
      </Marker>
    </MapContainer>
  );
};

export default ContactMap;
