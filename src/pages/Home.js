import React from 'react';
import Defaultheader from '../Defaultheader';
import HomeSlider from '../components/HomeSlider';
import Header from '../components/Header';
import SubHeader from '../components/SubHeader';
import HomeSwiper from '../components/reactidswiper';
import HomeSubheader from '../pages/HomeSubheader';
import Hall from '../img/hall.png'
import Fitness from '../img/fitness.jpg';
export default class Home extends React.Component {

	constructor(props) {
		super(props);
		this.state={arraylist:[{id:1,img:Hall},{id:2,img:Fitness}]}
	}
 loadvenue=()=>{
 	this.props.history.push('/venuepage');
 	// console.log(this.props);
  }
  componentDidMount(){
	  console.log("propshomepage",this.props);
	  this.props.receiveProps&&this.props.receiveProps(this.props);
	  
  }
	render() {
		return (
			<div>
			<div className="stickydiv">
			{/* <Header location={this.props} /> */}
			<SubHeader>
				<HomeSubheader loadvenuepage={()=>this.loadvenue()} />
			</SubHeader>
			</div>
       <div style={{width:'100%'}}>
				<HomeSwiper list={this.state.arraylist}/>
				<HomeSlider text="Trending Trainings" subtext="Add My Course"/>
				<HomeSlider text="Trending Trainings" subtext="Add My Course"/>
				<HomeSlider text="Trending Trainings" subtext="Add My Course"/>
				<HomeSlider text="Trending Trainings" subtext="Add My Course"/>
				<HomeSlider text="Trending Trainings" subtext="Add My Course"/>
				<HomeSlider text="Trending Trainings" subtext="Add My Course"/>
				<HomeSlider text="Trending Trainings" subtext="Add My Course"/>
       </div>
			</div>
		);
	}
}
