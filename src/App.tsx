import React, { useState, useEffect } from 'react';
import Map from './components/Map';
import LocationForm from './components/LocationForm';
import LocationList from './components/LocationList';
import { encodeLocations, decodeLocations } from './utils';

interface Location {
  id: string;
  position: { lat: number; lng: number };
  date: string;
  notes: string;
}

const App: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  // Load locations from the URL (if any)
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const locationsData = urlParams.get('locations');
    if (locationsData) {
      setLocations(decodeLocations(locationsData));
    }
  }, []);

  const handleAddLocation = (location: Location) => {
    setLocations((prev) => [...prev, location]);
    setSelectedLocation(location);
  };

  const handleSaveLocation = (updatedLocation: Location) => {
    setLocations((prev) =>
      prev.map((loc) => (loc.id === updatedLocation.id ? updatedLocation : loc))
    );
    setSelectedLocation(null);
  };

  const handleSelectLocation = (id: string) => {
    const location = locations.find((loc) => loc.id === id) || null;
    setSelectedLocation(location);
  };

  const shareableLink = `${window.location.origin}?locations=${encodeLocations(
    locations
  )}`;

  return (
    <div>
      <h1>Location Plotter</h1>
      <Map locations={locations} onAddLocation={handleAddLocation} />
      <LocationForm
        selectedLocation={selectedLocation}
        onSave={handleSaveLocation}
      />
      <LocationList locations={locations} onSelect={handleSelectLocation} />
      <div>
        <h3>Shareable Link</h3>
        <textarea value={shareableLink} readOnly />
        <p>Copy this link to share your locations!</p>
      </div>
    </div>
  );
};

export default App;
