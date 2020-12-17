import React,{ useState, useEffect } from 'react';
import './css/map.css';
import GoogleMapReact from 'google-map-react';

const APIKEY ="";

function Maparea(){

  const [center, setCenter] = useState({
    lat: 34.673542,
    lng: 135.433338
  });
  
  const [zoom, setZoom] = useState(13);
  
  const [currentPosition, setCurrentposition] = useState();

  //　起動時の表示画面の中視点座標
  const current = data => {
    const currentPosition = {
      lat: data.coords.latitude,
      lng: data.coords.longitude
    };
    setCurrentposition(currentPosition);
    setCenter(currentPosition);
  };
  const unfind = data => {
    const currentPosition = {
      lat:34.673542,
      lng:135.433338
    };
    setCurrentposition(currentPosition);
    setCenter(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(current, unfind);
  }, []);

  return(
    <div className= "map">
      <h1 className="title-log">mapApp</h1>
      <GoogleMapReact
        bootstrapURLKeys={{key:APIKEY}}
        center={center}
        defaultZoom={zoom}
        >
      
        </GoogleMapReact>
    </div>
  );
}
export default Maparea;