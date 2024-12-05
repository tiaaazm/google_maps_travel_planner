import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 12.9819, // Default center (San Francisco)
  lng: 79.1291,
};

interface Location {
  id: string;
  position: { lat: number; lng: number };
  date: string;
  notes: string;
}

const Map: React.FC<{
  locations: Location[];
  onAddLocation: (loc: Location) => void;
}> = ({ locations, onAddLocation }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_MAPS_API_KEY || '',
  });

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (!event.latLng) return;
    const newLocation = {
      id: Date.now().toString(),
      position: {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      },
      date: '',
      notes: '',
    };
    onAddLocation(newLocation);
  };

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onClick={handleMapClick}
    >
      {locations.map((loc) => (
        <Marker key={loc.id} position={loc.position} />
      ))}
    </GoogleMap>
  );
};

export default Map;
