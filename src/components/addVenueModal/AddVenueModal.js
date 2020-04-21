import React from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import chat_svg from '../../images/classroom.svg'
import '../chooseVenueModal/ChooseVenueModal.css'
import { Menu, Dropdown, Icon } from 'antd';
import 'antd/dist/antd.css';
import close from '../../images/delete.svg'
import "./AddVenueModal.css";
import { Input } from 'antd';
import MapviewComp from '../MapViewComp/MapviewComp';
import PopupboxCorner from '../popupbox-corner/popupbox-corner';
import MapModel from '../MapModel/MapModel';
import { Modal,Button,ModalHeader,ModalFooter } from 'reactstrap'
import { MdClose } from 'react-icons/md';



export default class ChooseVenueModal extends React.Component {

    constructor(props){
        super(props);
        this.state={
            onClose:false,
            visible:false,
            coords:{latitude:0,longitude:0},
            lat:0,
            lng:0,
            address:'',
            requestLocation:props.requestLocation,
            left:'',top:'',height:'',width:'',loationobj:null,
            address:'',
            formArray:props.formArray,
		
           
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

    showModal = () => {
      
     this.setState({ visible: true })
      console.log("clicked!!")

    }
   
    onOk  = () => {
      this.setState({ visible: false })
    }

    onCancel = () => {
      this.setState({ visible: false })
    }
    componentDidMount() {
    
      navigator.geolocation.getCurrentPosition(position => {
        this.setState({coords:{latitude:position.coords.latitude,longitude:position.coords.longitude}});
        // alert(position.coords.latitude);
      })
      //console.log(this.instance.getBoundingClientRect());	
    }
    handleClose = () => {
      this.setState({ visible:false })
    }      
       
    render(){
            const {
                buttonLabel,
                className
            } = this.props;
          
      
  return (
    <div className="AddVenuenew_modal">
      
      {/* <Button color="danger"  onClick={this.props.toggle}>{buttonLabel}</Button> */}
     

      <div className="addvenue_MODAL" visible={this.props.isOpen}  onOk={this.handleOk}
          onCancel={this.handleCancel} > 
         
       <ModalHeader ><p className="addvenue_modal_header">Add New Venue</p></ModalHeader> 
        
     
          <form>
           <div>
             <p className="modal_basic_content">Please provide below the basic details to add your own venue</p>
             <div className="modal_group1"><h5 className="addvenue_subheaders">Pool Name </h5><input className="basic_text_input" type="text"/></div>
             <div className="modal_group1"><h5 className="addvenue_subheaders">Address</h5><textarea className="basic_textarea_input"/></div>
             <div className="modal_group1"><h5 className="addvenue_subheaders">Landmark</h5>
             <input className="basic_location_input" type="text" /><p className="location_map_subheader" onClick={this.showModal}>Location Map</p>
             </div>
             <div className="modal_group1"><h5 className="addvenue_subheaders">Mobile</h5><input className="basic_text_input" type="text"/></div>
             <div className="modal_group1"><h5 className="addvenue_subheaders">Mail</h5><input className="basic_text_input" type="text"/></div>
           </div>

           
          </form>
          
     
        <ModalFooter className="addvenue_modalfooternew">
          <Button className="yourvenue_button" onClick={this.props.toggle}>SAVE AND CONTINUE AS TRAINER</Button>{' '}
          <Button className="venuesave_button" color="primary" onClick={this.props.toggle}>CONTINUE TO VENUE DETAILS</Button>
        </ModalFooter>

       
      </div>
      

     {
        <Modal
        toggle={this.toggle}
        isOpen={this.state.visible}
        onOk={this.onOk}
        onCancel={this.handleCancel} 
        className="modal_fa_map"
        >
         
        <div class="card">
          <div class="card-header"><div className="modhead_fa_map">Get Location</div><MdClose className="moda_close_btn" onClick={this.handleClose}/></div>
          <div class="card-body">
            <MapviewComp receiveaddr={(data,location)=>this.receiveaddr(data,location)} APIKEY="AIzaSyDS9ePaBsFgdZt5v2wQrciYrLGhVJmvTWE" search coords={this.props.commonArray?(this.props.commonArray[1].spec_det_datavalue2!=""?{latitude:this.props.commonArray[1].spec_det_datavalue2.split(',')[0],longitude:this.props.commonArray[1].spec_det_datavalue2.split(',')[1]}:this.state.coords):this.state.coords} latlng={(data) => console.log('latlng',data)} sendSearchedData={(data)=>console.log("searchedAddress",data)}/>
        </div>
        <div class="card-footer">
           <Button className="map_cancel_btn" onClick={this.handleClose}>Cancel</Button>
           <Button className="map_ok_btn">OK</Button>
        </div>
        </div>
</Modal>
     }
  
              
    </div>
  );
}


}



