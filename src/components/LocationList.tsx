import React from 'react';

interface Location {
  id: string;
  position: { lat: number; lng: number };
  date: string;
  notes: string;
}

const LocationList: React.FC<{
  locations: Location[];
  onSelect: (id: string) => void;
}> = ({ locations, onSelect }) => {
  return (
    <div>
      <h3>Saved Locations</h3>
      {locations.length === 0 ? (
        <p>No locations added yet!</p>
      ) : (
        <ul>
          {locations.map((location) => (
            <li key={location.id}>
              <strong>Lat:</strong> {location.position.lat},{' '}
              <strong>Lng:</strong> {location.position.lng}
              <br />
              <strong>Date:</strong> {location.date || 'Not set'}
              <br />
              <strong>Notes:</strong> {location.notes || 'No notes'}
              <br />
              <button onClick={() => onSelect(location.id)}>Edit</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocationList;
