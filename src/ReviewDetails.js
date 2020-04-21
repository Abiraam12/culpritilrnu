import React, { Component } from 'react';
import './App.css';
import {Button, Container, Row, Col } from 'reactstrap';
import {Dropdown } from 'semantic-ui-react';
import { DatePicker, Select, Input,notification} from 'antd';
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Icofont from 'react-icofont';
import Apilink from './apilink';


const InputGroup = Input.Group;
const Option = Select.Option;

const btn_details=[{'icon':'icofont-building','name':'Seating','badge':''},{'icon':'icofont-building-alt','name':'Physical Infrastructure','badge':'2'},{'icon':'icofont-speed-meter','name':'Accessibility','badge':''},{'icon':'icofont-letterbox','name':'Training Equipments','badge':'5'},{'icon':'icofont-building','name':'IT Infra','badge':''},{'icon':'icofont-building-alt','name':'Resource','badge':'2'},{'icon':'icofont-speed-meter','name':'Toilets','badge':''},{'icon':'icofont-letterbox','name':'Parking','badge':'5'}];

const btn_details_2=[{'icon':'icofont-building','name':'Pantry'},{'icon':'icofont-building-alt','name':'Additional Rooms'}];

const table_content=['Locker','Lift','AC','Power Backup','Recepton']

const options = [
{ key: 'angular', text: 'Angular', value: 'angular' },
{ key: 'css', text: 'CSS', value: 'css' },
{ key: 'design', text: 'Graphic Design', value: 'design' },
{ key: 'ember', text: 'Ember', value: 'ember' }
]


class ReviewDetails extends Component {
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            finalDetails:props.sendpreviewdata,
            finaldata:props.finalinfo
        }
        console.log(this.state)
    }
    componentWillReceiveProps(props){
        // alert(JSON.stringify(props));
        if(props.sendpreviewdata){
        this.setState({finalDetails:props.sendpreviewdata})
        this.setState({finaldata:props.finalinfo})
    }
    }
    submitData=()=>{
        console.log("Finaldet",this.state);
var mandatorydata=this.state.finaldata.validationTags.filter((obj)=>obj.mandatory==true&&obj.state==false)
// this.setState({mandatory:mandatorydata})
if(mandatorydata.length!=0){

notification.open({
    message: 'Error Message',
    description: <ul>{mandatorydata.map((obj)=><li>{obj.msg}</li>)}</ul>,
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
return
}
        fetch(Apilink.apiurl+'insert_venue/', {
            method: 'POST',

            body: this.state.finalDetails,
        }).then((response)=>response.json())
        .then((responseJson)=>{
// Actions.verify({loginobj});
if(responseJson.status==0){

    // alert("Venue Added Successfully");
    this.props.closevenue();
// this.props.closemodal();
}else{
    alert("Error in Response");
}
})  
    }
    render() {
        return (
            <div className='ReviewDetails' style={{margin:'10px 0px 10px 20px',}}>

            <table className='reviewdetails_tab' cellpadding="10" style={{width:'100%',fontSize:'15px' }}>


            <tr style={{width:'100%' }}>
            <td style={{width:'20%'}}>Type</td>
            <td style={{width:'80%'}}>{this.state.finaldata.venue.trn_venue_type_name}</td>
            </tr>                

            <tr>
            <td>Name</td>
            <td>{this.state.finaldata.facility?this.state.finaldata.facility.trn_venue_room_name:''}</td>
            </tr>

            <tr>
            <td>Address</td>
            <td>{this.state.finaldata.facility?this.state.finaldata.facility.trn_venue_room_address:''}</td>
            </tr>           

            <tr>
            <td>Availability</td>
            <td>{this.state.finaldata.facility?this.state.finaldata.availability.trn_venue_avail_frm:''} - {this.state.finaldata.facility?this.state.finaldata.availability.trn_venue_avail_to:''}</td>
            </tr>            

            <tr>
            <td>Capacity</td>
            <td>{this.state.finaldata.facility?this.state.finaldata.facility.trn_venue_room_seats:''} Seats</td>
            </tr>            

            <tr>
            <td>Amenities</td>
            <td>{this.state.finaldata.amenetiesdetails&&this.state.finaldata.amenetiesdetails.filter((obj,key)=>obj.state==true&&obj.badge>0).map((newobj)=>{
                return (<div>{newobj.name},</div>)
            })}</td>
            </tr>
            <tr>
            <td>Photos</td>
            <td>{this.state.finaldata.photDetails?this.state.finaldata.photDetails.length:0} Photos</td>
            </tr>


            <tr>
            <td>Ratecard</td>
            <td> {this.state.finaldata.pricedetails?this.state.finaldata.pricedetails.trn_venu_price_currency:''} {this.state.finaldata.pricedetails?this.state.finaldata.pricedetails.trn_venu_price_amt:''} - Per {this.state.finaldata.pricedetails?this.state.finaldata.pricedetails.pricetype:''}</td>
            </tr>            

            </table>
            

            <div class="borderbottom"></div>

            <div className='review_btn'>
            <button class="btn btn_submit reviewbtn1 btn-lg" onClick={()=>this.props.editdetails(true)}>
            EDIT
            </button>

            <button onClick={this.submitData} class="btn btn_next reviewbtn1 btn-lg">
            SUBMIT
            </button>

            </div>

            </div>
            );
    }
}

export default ReviewDetails;
