import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  DirectionsRenderer
} from "react-google-maps";

import "./ContactMap.css"

const ContactMap = compose(
  withProps({
    googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyCALQMfn1Qf33EjnHEA7QwrIYWh1JScMrU&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className="contact-map" />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap defaultZoom={14} defaultCenter={{ lat: 50.094737, lng: 19.992748 }}>
    {props.isMarkerShown && (
      <Marker
        position={{ lat: 50.094737, lng: 19.992748 }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

export default ContactMap;

