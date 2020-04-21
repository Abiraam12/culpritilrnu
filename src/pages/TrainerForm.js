import React from 'react';
import Defaultheader from '../Defaultheader';
import TestProcess from '../TestProcess';
import HomeSlider from '../components/HomeSlider';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import HomeSwiper from '../components/reactidswiper';
import HomeSubheader from '../pages/HomeSubheader';
import ListVenue from '../ListVenue';
import ListTraining from '../ListTraining';
import Hall from '../img/hall.png'
import Fitness from '../img/fitness.jpg';
import ArrowIcon from '../icon/arrow_icon.svg';
import colors from '../helpers/colors';

export default class TrainerForm extends React.Component {

	constructor(props) {
		super(props);
	// console.log(this.props);
		this.state={arraylist:[{id:1,img:Hall},{id:2,img:Fitness}],visible:false}
	}
	
	closepopup=()=>{
		this.setState({visible:false})
	}

 loadvenueform=()=>{
 	this.setState({visible:true});
  }
  someProp=()=>{

  }
	render() {
		return (
			<div className="venueform">
			<div className="stickydiv">
			<Header location={this.props}/>
				<SubHeader>
						<div className="">
							<p>List your venue</p>
						</div>
				</SubHeader>
			<ListTraining location={this.props} {...this.props} someProp={this.changeHome} />
			</div>
      		
      		 
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
