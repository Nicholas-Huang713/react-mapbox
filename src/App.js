import React, {useState} from 'react';
import './App.css';
import ReactMapGl, {GeolocateControl, Marker} from 'react-map-gl';
import Map from './Map';

const geolocateStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  margin: 10
};

const fishStyle = {
  width: "40px",
  height: "auto"
}

function App() {
  // const [viewport, setViewport] = useState({
  //   latitude: 33.985736,
  //   longitude: -117.818969,
  //   zoom: 10,
  //   width: "100vw",
  //   height: "100vh"
  // })
  // const [markers, setMarkers] = React.useState([])
  // const [draggable, setDraggable] = React.useState()
  // const [events, setEvents] = React.useState({})
  // const handleClick = (({lngLat: [longitude, latitude]}) => 
  //   setMarkers(markers => [{longitude, latitude}]));
  


  return (
    <div>
      <Map />
      {/* <ReactMapGl 
        onClick={handleClick}
        {...viewport} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        // mapStyle="mapbox://styles/nhuang713/ck8odjdwz0fav1il5mu5ue9jw"
          onViewportChange={viewport => {
            setViewport(viewport);
          }}
        
      >
      <GeolocateControl
        style={geolocateStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        showUserLocation={false}
      />
      
      {markers.length
        ? markers.map((m, i) => (
            <Marker {...m} key={i} 
              // draggable 
              // onDragStart={_onMarkerDragStart}
              // onDrag={_onMarkerDrag}
              // onDragEnd={_onMarkerDragEnd} 
            >
              <img style={fishStyle} src="https://cdn.iconscout.com/icon/premium/png-256-thumb/fish-1524088-1289766.png" alt="fish"/>
              {` ${m.longitude}, ${m.latitude}`}
            </Marker>
          ))
        : null}

      </ReactMapGl> */}
    </div>
  );
}

export default App;
