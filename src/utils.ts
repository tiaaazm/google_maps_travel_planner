import { Location } from './components/LocationForm';

export const encodeLocations = (locations: Location[]) => {
  return encodeURIComponent(JSON.stringify(locations));
};

export const decodeLocations = (query: string) => {
  try {
    return JSON.parse(decodeURIComponent(query));
  } catch {
    return [];
  }
};
