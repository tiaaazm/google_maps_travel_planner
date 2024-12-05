import React, { useState } from 'react';

export interface Location {
  id: string;
  position: { lat: number; lng: number };
  date: string;
  notes: string;
}

const LocationForm: React.FC<{
  selectedLocation: Location | null;
  onSave: (updatedLocation: Location) => void;
}> = ({ selectedLocation, onSave }) => {
  const [date, setDate] = useState(selectedLocation?.date || '');
  const [notes, setNotes] = useState(selectedLocation?.notes || '');

  if (!selectedLocation) return null;

  const handleSave = () => {
    onSave({ ...selectedLocation, date, notes });
  };

  return (
    <div>
      <h3>Location Details</h3>
      <p>Latitude: {selectedLocation.position.lat}</p>
      <p>Longitude: {selectedLocation.position.lng}</p>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default LocationForm;
