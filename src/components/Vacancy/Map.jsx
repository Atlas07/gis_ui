import React from 'react';
import { shape, string } from 'prop-types';
import {
  Map, Marker, GoogleApiWrapper,
} from 'google-maps-react';

const MapContainer = (props) => {
  const { google, coords } = props;

  return (
    <Map google={google} zoom={12} initialCenter={coords}>
      <Marker
        title="Test"
        name="Soma"
        position={coords}
      />
    </Map>
  );
};


MapContainer.propTypes = {
  google: shape({}).isRequired,
  coords: shape({
    lat: string.isRequired,
    lng: string.isRequired,
  }).isRequired,
}

export default GoogleApiWrapper({
  apiKey: '',
})(MapContainer);
