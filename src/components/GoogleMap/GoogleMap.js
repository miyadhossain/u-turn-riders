import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import React, { Component } from "react";

class GoogleMap extends Component {
  render() {
    return (
      <div>
        <Map className="mapStyle" google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBgNjfDX7yKsuYyHCagFS73aPoBh-8cP80",
})(GoogleMap);
