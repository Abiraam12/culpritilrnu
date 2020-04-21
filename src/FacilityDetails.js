import React, { Component } from 'react';
import './App.css';
import {Button, Container, Row, Col, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import { Input, Dropdown } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icofont from 'react-icofont';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import EducationSVG from './icon/venue-facility/EducationSVG';
import EmployeeSVG from './icon/venue-facility/EmployeeSVG';
import PresentationSVG from './icon/venue-facility/PresentationSVG';
import WorkplaceSVG from './icon/venue-facility/WorkplaceSVG';
import WorkSVG from './icon/venue-facility/WorkSVG';
import ValidationLibrary from './helpers/validationfunction';
import MapView from './MapView';
 import ReactPhoneInput from 'react-phone-input-2'
 import 'react-phone-input-2/dist/style.css'
// import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const btn_details=[{'icon':'icofont-building','name':'Training Room',id:1},{'icon':'icofont-building-alt','name':'Training Hall',id:2},{'icon':'icofont-speed-meter','name':'Conference Room',id:3},{'icon':'icofont-letterbox','name':'Training Room'},{'icon':'icofont-font','name':'Cabin',id:4}];

const btn_details=[{'icon':<WorkSVG/>,'name':'Training Room',id:1},{'icon':<EducationSVG/>,'name':'Training Hall',id:2},{'icon':<PresentationSVG/>,'name':'Conference Room',id:3},{'icon':<WorkplaceSVG/>,'name':'Training Lab'},{'icon':<EmployeeSVG/>,'name':'Cabin',id:4}];

class FacilityDetails extends Component {

     static defaultProps = {
    
  };
    constructor(props){
        super(props);
 this.toggle = this.toggle.bind(this);
        this.state={

            facilityDetails:{
                roomname:props.facilityDetails.trn_venue_room_name,
                seat:props.facilityDetails.trn_venue_room_seats,
                floor:props.facilityDetails.trn_venue_room_floor,
                address:props.facilityDetails.trn_venue_room_address,
                landmark:props.facilityDetails.trn_venue_room_landmark,
                mobile:props.facilityDetails.trn_venue_room_mob,
                ccode:props.facilityDetails.trn_venue_room_ccode,
                phone:props.facilityDetails.trn_venue_room_phone,
                mail:props.facilityDetails.trn_venue_room_mail,
            },
            validations:{
                'roomname':{
                error:null,
                mandatory:true,
                errormsg:'',
                validations:[{name:'required',status:false}]
                },
                'seat':{
                error:null,
                errormsg:'',
                mandatory:true,
                validations:[{name:'required',status:false},{name:'allowNumaricOnly',status:false}]
                },
                'floor':{
                error:null,
                errormsg:'',
                mandatory:false,
                validations:[]
                },
                'address':{
                error:null,
                errormsg:'',
                mandatory:true,
                validations:[{name:'required',status:false}]
                },
                'landmark':{
                error:null,
                errormsg:'',
                mandatory:false,
                validations:[{name:'required',status:false},{name:'email',status:false}]
                },
                'mobile':{
                error:null,
                errormsg:'',
                mandatory:true,
                validations:[{name:'required',status:false},{name:'mobile',status:false}]
                },
                'mail':{
                error:null,
                errormsg:'',
                mandatory:true,
                validations:[{name:'required',status:false},{name:'email',status:false}]
                },
                modal: false
    }
}
this.state.validations=props.validations?props.validations:this.state.validations;
}
componentWillReceiveProps(props){
}
    changeText=(data,key)=>{
        var filteredmandatory=this.state.validations[key].mandatory==true?this.state.validations[key].validations:[];
            var errormsg=ValidationLibrary.checkValidation(data,filteredmandatory);
                console.log(filteredmandatory);
            var validations=this.state.validations;
            validations[key].error=!errormsg.state;
            validations[key].errormsg=errormsg.msg;
            this.setState({validations});
    }
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  receiveaddr=(data)=>{
    console.log("data",data);
    var facilityDetails=this.state.facilityDetails;
    facilityDetails.address=data;

// this.setState({facilityDetails})
var obj={target:{value:data,name:'address'}};
this.onChangeFacility(obj,'trn_venue_room_address');
  }
    componentWillReceiveProps(props){
        // alert(JSON.stringify(props.FacilityDetails));
        // if(props.facilityDetails){
        //     var facilityDetails=this.state.facilityDetails;
        //     facilityDetails.roomname=props.facilityDetails.trntrn_venue_room_addressv;enue_room_name;
        //     facilityDetails.seat=props.facilityDetails.trn_venue_room_seats;
        //     facilityDetails.floor='';
        //     facilityDetails.address=props.facilityDetails.trn_venue_room_address;
        //     facilityDetails.landmark=props.facilityDetails.trn_venue_room_landmark;
        //     facilityDetails.mobile=props.facilityDetails.trn_venue_room_mob;
        //     facilityDetails.mail=props.facilityDetails.trn_venue_room_mail;
        //     this.setState({facilityDetails});
        // }
    }
    loadfacility=(data)=>{
        this.props.loadfacility(data)
    }
        handleOnChange=(value, data,formatter) =>{
        console.log(formatter);
    console.log(value)
    if(formatter.format!=undefined){
        console.log(formatter.format+"=="+value)
          var validations=this.state.validations
    if(formatter.format.length==value.length){
        // alert("success")
        validations.mobile.error=false;
        validations.mobile.errormsg='';

    }else{
        validations.mobile.error=true;
        validations.mobile.errormsg='Invalid Mobile Number';
    }
    this.setState({validations});
    var filterArray=Object.keys(validations).filter((obj)=>{
            // console.log(obj);
            return this.state.validations[obj].mandatory==true&&this.state.validations[obj].error==false;
        })
        // console.log(status);
        var errorstatus=false;
        if(filterArray.length==5){

            errorstatus=true

        }
    }
    console.log(data)
    var code_length=0;

    if(data.dialCode != undefined){
      code_length=data.dialCode.length;
    }
    var mobile=value.replace(/[^0-9]+/g,'').slice(code_length);    console.log(mobile)
    var facilityDetails=this.state.facilityDetails;
    facilityDetails.mobile=mobile;
    facilityDetails.ccode=data.dialCode;
    facilityDetails.phone=value;
           
    this.props.loadfacilityDetails(mobile,'trn_venue_room_mob',errorstatus,this.state.validations);
    this.props.loadfacilityDetails(data.dialCode,'trn_venue_room_ccode',errorstatus,this.state.validations);
    this.props.loadfacilityDetails(value,'trn_venue_room_phone',errorstatus,this.state.validations);
    this.setState({ facilityDetails });
    console.log(this.state)
  }
    onChangeFacility = (e,key) => {
        var facilityDetails=this.state.facilityDetails
        facilityDetails[e.target.name]= e.target.value;
        this.changeText(e.target.value,e.target.name)
        var filterArray=Object.keys(this.state.validations).filter((obj)=>{
            // console.log(obj);
            return this.state.validations[obj].mandatory==true&&this.state.validations[obj].error==false;
        })
        // console.log(status);
        var errorstatus=false;
        if(filterArray.length==5){

            errorstatus=true

        }
        console.log(errorstatus);
        this.props.loadfacilityDetails(e.target.value,key,errorstatus,this.state.validations);
        this.setState({facilityDetails});
    }
    handleSubmit =() =>{
        var obj={"trn_venue_room_name":this.state.facilityDetails.roomname,
        "trn_venue_room_seats": this.state.facilityDetails.seat,
        "trn_venue_room_address":this.state.facilityDetails.address,
        "trn_venue_room_landmark":this.state.facilityDetails.landmark,
        "trn_venue_room_mob":this.state.facilityDetails.mobile,
        "trn_venue_room_mail":this.state.facilityDetails.mail,
    }
    // this.props.loadfacilityDetails(obj);
    this.props.nexttab('list3');
}
render() {
    const {roomname,seat,floor,address,landmark,mobile,mail,phone} = this.state.facilityDetails; 
    return (
        <div>
        <div className='formcomponent_1' style={{margin:'10px 0px'}}>
        <div className='main-div venuefacility'>

        {/*{btn_details.map((item) => 
            <div style={{'text-align':'center','margin':'0px 10px'}}>
            <button onClick={()=>this.loadfacility(item)} className="btn tab_round_btn">
            <i class={item.icon}></i>
            </button>
            <div class="item-name">{item.name}</div>
            </div>
        )}*/}


        {btn_details.map((item,i) => 
            <div className='radio_btn' style={{'text-align':'center','margin':'0px 10px',marginBottom:12}}>

            <input className="round_svg" checked={this.props.venue.trn_venue_facility_id==item.id} type='radio' onClick={()=>this.loadfacility(item)} name='facility_radio'  id={`facility-radio-id-${i}`}/>
            <label for={`facility-radio-id-${i}`} className="btn svgstyleradio">
            {item.icon}
            </label>

            <div class="item-name">{item.name}</div>


            </div>
            )}






        </div>
        {this.props.venue.trn_venue_facility_id!=''&&
        <Row style={{margin:'30px 0px'}} className="webmodules">

        {/*<div style={{width:'100%',height:'3px'}} className='arrow_box'></div>

        <div style={{width:'100%',background:'white',height:'20px'}}></div>*/}

        <div className='clr_blue borderheader_fac' >Please add the Training Venue <strong>Facility Details</strong></div>

        <div style={{width:'100%',height:'2px','background':'#c3c3c3'}}></div>

        </Row>
    }
        {this.props.venue.trn_venue_facility_id!=''&&
        <table className='clr_blue webmodules' style={{'font-size':'16px','text-align':'left'}} cellpadding="10">
        <tr>
        <td>Room Name</td>
        <td><input className='form-control' name="roomname"
        value={roomname}
        onChange={(e)=>this.onChangeFacility(e,'trn_venue_room_name')} />
         <p className="errorblock">{this.state.validations['roomname'].errormsg}</p>
        </td>
           
        </tr>      

        <tr>
        <td>Seats</td>
        <td> 
        <Row style={{width:'100%','margin-left':'0px'}}>
        <div style={{'width':'15%'}}>
        <input  className='form-control' name="seat"
        value={seat}
         onChange={(e)=>this.onChangeFacility(e,'trn_venue_room_seats')} /> 
         <p className="errorblock">{this.state.validations['seat'].errormsg}</p>
        </div>
        <div style={{'font-size':'16px','width':'15%',color:'#dcd2d2',margin: 'auto 0px'}}> &nbsp;Floor </div>
        <div style={{'width':'70%'}}>
        <input className='form-control' name="floor"
        value={floor}
         onChange={(e)=>this.onChangeFacility(e,'trn_venue_room_floor')} />
         <p className="errorblock">{this.state.validations['floor'].errormsg}</p>
        </div>
        </Row>
        </td>
        </tr>      

        <tr>
        <td>Address</td>
        <td><textarea className='form-control' name="address"
        value={address}
         onChange={(e)=>this.onChangeFacility(e,'trn_venue_room_address')} /><p className="errorblock">{this.state.validations['address'].errormsg}</p></td>

        </tr>      

        <tr>
        <td>Landmark</td>
        <td><Row style={{width:'100%','margin-left':'0px'}}><div style={{'width':'50%'}}><input className='form-control' name="landmark"
        value={landmark}
        onChange={(e)=>this.onChangeFacility(e,'trn_venue_room_landmark')} /> </div><div style={{'font-size':'16px','width':'50%',margin: 'auto 0px'}} onClick={this.toggle}>&nbsp;&nbsp;&nbsp;Location Map </div></Row></td>
        </tr>      

        <tr>
        <td>Mobile</td>
               <td>
       {/*<input className='form-control' name="mobile"
        value={mobile}
       onChange={(e)=>this.onChangeFacility(e,'trn_venue_room_mob')} />*/}
       <ReactPhoneInput  inputExtraProps={{
    name: 'phone',
    required: true,
    autoFocus: true
  }}  value={phone} onChange={this.handleOnChange} className="ant-input"/>
       <p className="errorblock">{this.state.validations['mobile'].errormsg}</p></td>
        </tr>      

        <tr>
        <td>Mail</td>
        <td><input className='form-control' name="mail"
        value={mail}
       onChange={(e)=>this.onChangeFacility(e,'trn_venue_room_mail')} /><p className="errorblock">{this.state.validations['mail'].errormsg}</p></td>
        </tr>     
        </table>
    }

        <div className="webmodules button_change">
        <button type="button" class="btn btn_next btn-lg" onClick={this.handleSubmit}>
        NEXT
        </button>
        </div>
        </div>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Get Location</ModalHeader>
          <ModalBody>
            <div style={{ height: '50vh', width: '100%',overflow:'hidden',position:'relative' }}>
        <MapView receiveaddr={this.receiveaddr}/>
      </div>
          </ModalBody>
          <ModalFooter>
            
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>


        </div>
        );
}
}

export default FacilityDetails;
// export default facilityDetails