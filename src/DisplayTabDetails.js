import React, { Component } from 'react';
import './App.css';
import VideoPlayer from './components/VideoPlayer';
import {Button, Row, Col, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import Defaultheader from './Defaultheader';
import VenueHeader from './VenueHeader';
import FooterCopyright from './FooterCopyright';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const header_play=require("./icon/Banner_Play.svg");
const plus_symbol=require("./icon/Add_Plus.svg");


const userdetails=JSON.parse(localStorage.getItem('userloggedindetails'));
var username="";
if(userdetails){
 username = userdetails.user_details_name+" "+userdetails.user_details_surname ;
}

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const btn_details=[{'icon':'VenuetypePNG.png','name':'Venue Type',id:1},{'icon':'FacilityPNG.png','name':'Facility',id:2},{'icon':'AvailabilityPNG.png','name':'Availability',id:3},{'icon':'AmenitiesPNG.png','name':'Amenities',id:4},{'icon':'TaglistPNG.png','name':'Tag Details',id:5},{'icon':'PricecardPNG.png','name':'Price Card',id:6},{'icon':'UploadphotoPNG.png','name':'Upload Photo',id:7},{'icon':'ReviewPNG.png','name':'Review Details',id:8}];

class DisplayTabDetails extends Component {

    constructor(props){
        super(props);
        this.state={
            viewtab:false,
            modal:false
        }
        this.toggle = this.toggle.bind(this);

    }
        toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
  }

    venueList=()=>{
        this.props.history.push('/listmytraining')
    }

    // componentDidMount=()=>{
    //   this.props.someProp('listmytraining');
    // }

    render() {

        return (
            <div>
                  <div className="webmodules">
                       <Defaultheader switchRoute={(data)=>this.setState({userType:1})} />
                </div>
        <VenueHeader showlisthome={this.showlisthome} showBreadCrums={this.state.breadCrums}/>
            <div className='tab_text'>
            <div className='tab_text_1'>Welcome</div>
            <div className='tab_text_2'>{username+','}</div>
            <div className='tab_text_3'>Venue Provider</div>
            </div>
            <div className='list-main-div clearfix'>
            <div className='list-main-div2 clearfix'>
            <div className="list-main-con1 clr_blue">List your Venue Here!</div>

            <div className="list-main-con2" onClick={this.toggle}>
            <img src={header_play} />
            <span style={{color:'#24479D'}} className="slider_play_span" > How to Add Venue</span>
            <div className="guidevideo">A Guided Video</div>
            </div>
            </div>
            </div>

            <div className='back_line'>
            <div className="semielipse" onClick={() => { this.venueList() }}>
            <div className='semielipse_inner'>
            <img  src={plus_symbol}/>
            </div>     
            </div>


            </div>

            {/* <div className="tab_content_ver">

            {btn_details.map((item) => 
                <div className="squareradius" onClick={() => { this.venueList() }}>
                <div className="squareradius_div">
                <img src={require('./icon/TabPNG/'+item.icon)} class="profile_img1" />
                </div>
                </div>
                )}
            </div> */}

             <Modal isOpen={this.state.modal}  toggle={this.toggle} size='xl'
                        centered={true} className="video_model">
          <ModalHeader toggle={this.toggle} >

          <p className="video-model-margin"><b>How to add your venue in iLRNU</b></p>
          <div className="video-model-font">A Guide Video</div>


          </ModalHeader>
          <ModalBody>
            <VideoPlayer videoUrl={require('./video/guide_video.mp4')}/>
          </ModalBody>
          </Modal>
          <div className="webmodules">
      <FooterCopyright />
    </div>
            </div>
            );
    }
}

export default DisplayTabDetails;