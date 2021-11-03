// Settings for the map goes inside this file
import mapStyles from "./mapStyle";

export const containerStyle = {
  width: '100%',
  height: '100vh'
};

// Center on Kalmar
export const center = {
  lat: 10.844748403366491,
  lng: 106.78945623384644,
};

// Disable default UI
export const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true
};