import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import Geocode from "react-geocode";
import { Input} from 'antd';

class MapView extends React.Component {
constructor(props) {
	super(props);

    this.state = {
        zoom: 15,
         userLocation: null,
         address:'',
        currentLatLng: {
        latitude: 0,
        longitude: 0
      },
    }

    
}
getAddress=(lat,lng)=>{
     Geocode.fromLatLng(lat, lng).then(
  response => {
    const address = response.results[0].formatted_address;
    this.setState({address:address});
    this.props.receiveaddr(address);
    console.log(address);
  },
  error => {
    console.error(error);
  }
);
}


// componentWillMount(){
//   }
getCurrentPosition=()=>{
    var self=this;
    navigator.geolocation.getCurrentPosition(position => {
        console.log("currentLocationHandler",position);
      this.setState({
        currentLatLng: {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
          coords:position.coords
        }
      });
      console.log("latitude",position.coords.latitude);
      Geocode.setApiKey("AIzaSyCWz6j4QkvLgAJlTmvFxbrI-sH1sVx9Bgc");
    Geocode.enableDebug();
    this.getAddress(position.coords.latitude,position.coords.longitude);
   
  });
}
onMouseoverMarker(props, marker, e) {
  // ..
}
centerMoved =(mapProps, map,coords)=> {
  // ...
 var latitude=coords.latLng.lat() ;
 var longitude=coords.latLng.lng() ;
  this.setState({
        currentLatLng: {latitude:latitude,longitude:longitude}
    });
 this.getAddress(latitude,longitude);
}
  handleChange=()=>{

}
   componentDidMount() {
    this.getCurrentPosition();
    
  }

 
render() {
    const {google} = this.props;
console.log(this.state);
    
    return (
        <div>
        
        <Map
                  google={this.props.google}
                   onClick={this.getCurrentPosition}
                  style={{
                    width: "100%",
                    height: "100%"
                  }}
                  // center={{lat:13.084481199999999,lng:80.2209871}}
                
                  // initialCenter={this.state.fields.location}
                  center={{lat: parseFloat(this.state.currentLatLng.latitude),
            lng: parseFloat(this.state.currentLatLng.longitude)}}
                  zoom={14}
                >
                 <Marker draggable={true} onMouseover={this.onMouseoverMarker}
                onDragend={this.centerMoved}
          name={'Current location'} position={{lat: parseFloat(this.state.currentLatLng.latitude),
            lng: parseFloat(this.state.currentLatLng.longitude)}} />
                </Map>
               {/* <Input value={this.state.address} type="text" />*/}
                </div>
        );
    }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyB-P0ODJAU1SVpNNkcuv1m3FDLuqc90oR8")
})(MapView)