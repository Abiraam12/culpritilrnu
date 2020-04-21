import React from 'react';
import { Modal,Button } from 'antd';
import MapviewComp from '../MapViewComp/MapviewComp';
import './MapModel.css';


class MapModel extends React.Component{
    constructor(props) {
		super(props);
		console.log(props);
		this.state={
			coords:{latitude:0,longitude:0},
			lat:0,
			lng:0,
			 visible:false,popupvisible:false,left:'',top:'',height:'',width:'',loationobj:null,
			 address:'',
			 formArray:props.formArray,
			 requestLocation:props.requestLocation,
			 
		}
    }
    
    receiveaddr=(data,location)=>{
        console.log(data);
      this.setState({address:data});
      // this.props.receivetxt(data,'address');
      var obj={};
      obj.spec_det_id='idname2';
      this.props.inputChange(obj,data,location);
  //     var facilityDetails=this.state.facilityDetails;
  //     facilityDetails.address=data;
  // this.setState({facilityDetails})
    }

    render(){
        return(
            <Modal
            className="GoogleMapModal"
            toggle={this.toggle}
            title="Get Location"
            visible={this.props.visible}
     
    >   
            <MapviewComp receiveaddr={(data,location)=>this.receiveaddr(data,location)} APIKEY="AIzaSyDS9ePaBsFgdZt5v2wQrciYrLGhVJmvTWE" search coords={this.props.commonArray?(this.props.commonArray[1].spec_det_datavalue2!=""?{latitude:this.props.commonArray[1].spec_det_datavalue2.split(',')[0],longitude:this.props.commonArray[1].spec_det_datavalue2.split(',')[1]}:this.state.coords):this.state.coords} latlng={(data) => console.log('latlng',data)} sendSearchedData={(data)=>console.log("searchedAddress",data)}/>
    </Modal>
        )
    }
}

export default MapModel;