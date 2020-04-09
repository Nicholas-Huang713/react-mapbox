import React, {Component} from 'react';
import ReactMapGl, {Marker, Popup} from 'react-map-gl';

const fishStyle = {
    width: "35px",
    height: "auto"
}

class Map extends Component {
    constructor(props){
        super(props);
        this.state = {
            viewport: {
               width: "100vw",
               height: "100vh",
               latitude: 42.430472,
               longitude: -123.334102,
               zoom: 16
             },
            userLocation: {},
            // marker: {
            //     latitude: 37.785164,
            //     longitude: -100
            //   },
            events: {},
            selectedLocation: null
        };
    }
    

    componentDidMount() {
        this.setUserLocation();
    }
    setUserLocation = () => {
        navigator.geolocation.getCurrentPosition(position => {
            let setUserLocation = {
                lat: position.coords.latitude,
                long: position.coords.longitude
                };
            let newViewport = {
                height: "100vh",
                width: "100vw",
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                zoom: 15
                };
                this.setState({
                viewport: newViewport,
                userLocation: setUserLocation
            });
        });
    };

    showPopUp = (e) => {
        e.preventDefault();
        this.setState({
            selectedLocation: "This is my location"
        })
    }
    // _updateViewport = viewport => {
    //     this.setState({viewport});
    // };
    
    _logDragEvent(name, event) {
        this.setState({
            events: {
            ...this.state.events,
            [name]: event.lngLat
            }
        });
    }

    _onMarkerDragStart = event => {
        this._logDragEvent('onDragStart', event);
    };

    _onMarkerDrag = event => {
        this._logDragEvent('onDrag', event);
    };

    _onMarkerDragEnd = event => {
        this._logDragEvent('onDragEnd', event);
        this.setState({
            userLocation: {
                long: event.lngLat[0],
                lat: event.lngLat[1]
            }
        });
    }

    render() {
        const {selectedLocation} = this.state;

        return (
            <div>
                
                <div>
                    <ReactMapGl
                    {...this.state.viewport}
                    onViewportChange={viewport => this.setState({ viewport })}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                    mapStyle="mapbox://styles/nhuang713/ck8s1ki8t08fc1iqj0yerkni8"
                    
                    >
                        <button onClick={this.setUserLocation}>My Location</button>
                        {Object.keys(this.state.userLocation).length !== 0 ? (
                            <Marker
                            latitude={this.state.userLocation.lat}
                            longitude={this.state.userLocation.long}
                            offsetTop={-20}
                            offsetLeft={-10}
                            draggable
                            onDragStart={this._onMarkerDragStart}
                            onDrag={this._onMarkerDrag}
                            onDragEnd={this._onMarkerDragEnd}
                            >
                                <button onClick={this.showPopUp}>
                                    <img style={fishStyle} src="https://img.icons8.com/color/48/000000/marker.png" alt="location marker"/>
                                </button>
                            </Marker>
                            
                        ) : (
                            <div></div>
                        )
                    }
                    {selectedLocation && 
                        <Popup
                        latitude={this.state.userLocation.lat}
                        longitude={this.state.userLocation.long}
                        >
                            <div>
                                {selectedLocation}
                            </div>
                        </Popup>
                    }
                    </ReactMapGl>
                </div>
            </div>
        )
    }
}

export default Map;