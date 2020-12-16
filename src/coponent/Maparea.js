import React,{ useState, useEffect } from 'react';
import './css/map.css';
import GoogleMapReact from 'google-map-react';

const APIKEY ="";

function Maparea(){

  const [center, setCenter] = useState({
    lat: 35,
    lng: 135
  });
  
  const [zoom, setZoom] = useState(10);

  return(
    <div className= "map">
      <h1 className="title-log">mapApp</h1>
      <GoogleMapReact
        bootstrapURLKeys={{key:APIKEY}}
        center={center}
        defaultZoom={zoom}
        ></GoogleMapReact>
    </div>
  );
}
// Maparea()
export default Maparea;