import React from 'react';
import Defaultheader from '../Defaultheader';
import TestProcess from '../TestProcess';
import HomeSlider from '../components/HomeSlider';
import Header from '../components/Header';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import SubHeader from '../components/SubHeader';
import HomeSwiper from '../components/reactidswiper';
import HomeSubheader from '../pages/HomeSubheader';
import Hall from '../img/hall.png'
import Fitness from '../img/fitness.jpg';
import ArrowIcon from '../icon/arrow_icon.svg';
import colors from '../helpers/colors';
import VideoPlayer from  '../components/VideoPlayer';


export default class VenuePage extends React.Component {

	constructor(props) {
		super(props);
	// console.log(this.props);
		this.state={arraylist:[{id:1,img:Hall},{id:2,img:Fitness}],visible:false,togglemodal:false}
	}
	closepopup=()=>{
this.setState({visible:false})
	}
	closeModal=()=>{
		this.setState({togglemodal:false})
		this.setState({visible:true})
	}
 loadvenueform=()=>{
 	  var userlogged=localStorage['userloggedin'];
    if(userlogged=='yes'){
    	// this.props.localStorage
    	// console.log(this.props);	
    	this.props.history.push('/venueform');
    } else{	
 	this.setState({togglemodal:true});
    }
  }
	render() {
		return (
			<div className="venupagemain">
			<div className="stickydiv">
			<Header location={this.props}/>
			<SubHeader>
			<div className="listvenue">
			<button onClick={this.loadvenueform}  style={styles.button}>List your Venue Here <img src={ArrowIcon} /></button>
			</div>
			</SubHeader>
			</div>
      		<div style={styles.subhead}>
      		<div style={styles.col3}>
      		<img style={styles.width100} src={Hall}/>
      		</div>
      		<div style={styles.col7} className="flexColumn">
      		<p style={styles.heading} className="removemargin">Most Needed Venues</p>
      		<p style={styles.body} className="removemargin">Hightlights of the mentioned venue will display here. Highlights of the venue mentioned will display here.</p>
      		<p style={styles.footer} className="removemargin ">More <img style={styles.rotateimg} className="rotate90minus" src={ArrowIcon} /></p>
      		<div className="arrowRight">
      		<img src={ArrowIcon} />
      		</div>
      		</div>
      		</div>

      		 	<HomeSlider arrow={true} text="Near By Venues" subtext="More"/>
				<HomeSlider arrow={true} text="Near By Venues" subtext="More"/>
				<HomeSlider arrow={true} text="Near By Venues" subtext="More"/>
				<HomeSlider arrow={true} text="Near By Venues" subtext="More"/>
				<HomeSlider arrow={true} text="Near By Venues" subtext="More"/>
				<HomeSlider arrow={true} text="Near By Venues" subtext="More"/>
				<HomeSlider arrow={true} text="Near By Venues" subtext="More"/>

       <TestProcess clospopup={this.closepopup} centered={true} type="login"  visible={this.state.visible}/>
        <Modal isOpen={this.state.togglemodal}   size='xl'
      			centered={true} className="video_model">
          <ModalHeader toggle={this.closeModal}>
          <p className="video-model-margin"><b>How to add your venue in iLRNU</b></p>
          <div className="video-model-font">A Guide Video</div>

          </ModalHeader>
          <ModalBody>
            <VideoPlayer videoUrl={require('../video/guide_video.mp4')}/>
          </ModalBody>
          </Modal>
			</div>
		);
	}
}
const styles={
	rotateimg:{
			    width: '2.5vw',
    height: '2.5vw'
	},
	button:{
		padding: '1vw 2.1vw',
		backgroundColor:'#1F459E',
		color:'#D3DAEB',
		fontSize:'3.5vw'
	},
	subhead:{
		display:'flex',
		padding:12,
		paddingLeft:5
	},
	col3:{
		width:'40%',
		paddingLeft:2
	},
	col7:{
		width:'60%',
		paddingLeft:12,
		paddingRight:12,
		position:'relative'
		
	},
	width100:{
		width:'100%',
		height:'100%',
		borderRadius:'8px'
	},
	heading:{
		color:'orange',
		fontSize:'4.2vw'
	},
	body:{
fontSize:'3vw',
color:'#B6B6B6'
	},
	footer:{
		color:'orange',
		fontSize:'3.6vw'
	}

}
