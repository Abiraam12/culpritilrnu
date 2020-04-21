import React from 'react';
import Specific from '../specific-training/specific-training';
import Form1 from '../form1/form1';
import Bindname from '../bindname/bindname';
import Img1 from '../../images/b3.png';
import Professional from '../../images/professional-presenting-a-report.svg';
import Football from '../../images/football.svg';
import Academic from '../../images/mortarboard.svg';
import Music from '../../images/music-player.svg';
import Arts from '../../images/paint-palette.svg';
import Casual from '../../images/casual-male-user-symbol.svg';
import File from '../../images/file.svg';
import Choosediv from '../choosediv/choosediv';
import Paginationview from '../pagination/pagination';
import Checkboxform from '../checkbox-form/checkbox-form';
import './TrainingCategory.css';
// import Img2 from '../../images/b2.png';
// import Img3 from '../../images/b3.png';
import Plus from '../../images/+.png';

import Apilink from '../../helpers/apilink';

import { BounceLoader } from 'react-spinners';

const HeaderContent=(<div className="choose-text1">Please choose the <span className="choose-text2">Training Category</span></div>);
const listAdditonal=[{id:1,dontbind:true},{id:1,dontbind:true}]


export default class TrainingCategory extends React.Component {

	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		venuecategoryid:"",
	// 		activeArrow:false,			
	// 		ListTrainingType:[{
	// 			id: 1,
	// 			"type":"Games"
	// 		},{
	// 			id: 2,
	// 			"type":"Profession"
	// 		}],
	// 		loading:true
	// 	};

	// }

	state = {
		ListTrainingType:[{
			id:1,
			type:"Professional",
			img: <img src={Professional} alt="not available" />
		},{
			id:2,
			type: "Sports",
			img: <img src={Football} alt="not available" />
		},{
			id:3,
			type:"Academic",
			img: <img src={Academic} alt="not available" />
		},{
			id:4,
			type:"Casual",
			img: <img src={Casual} alt="not available" />
		},{
			id:5,
			type:"Test Preparation",
			img: <img src={File} alt="not available" />
		},{
			id:6,
			type:"Music",
			img: <img src={Music} alt="not available" />
		},{
			id:7,
			type:"Arts",
			img: <img src={Arts} alt="not available" />
		}],
		trainingcategoryid:""
	}

	// specificvenue=(data)=>{
	// 	this.setState({venuecategoryid:data.venue_cat_id,activeArrow:true});
	// 	this.props.venueCategoryCallback(data.venue_cat_id,data.venue_cat_name);
	// 	this.props.checkValidationError('venuecategory',true);
	// }

	// componentWillMount(){
	// 	this.ListVenueType();	
	// }
	
	// ListVenueType(){
	// 	fetch(Apilink.apiurl+'listVenueCategory/', {
	// 		method:'POST',
	// 		headers:{
	// 			 Accept:'application/json',
	// 			'Content-Type':'application/json',
	// 		},
	// 		body:JSON.stringify({user_cat_id:"1"}),
	// 	}).then((response)=>response.json())
	// 	.then((responseJson)=>{
	// 		this.setState({"ListVenueType":responseJson.data.concat(listAdditonal),loading:false})
	// 		console.log(responseJson.data)
	// 	})
	// }

	specifictraining = ((data) => {
		console.table(data);
		this.setState({trainingcategoryid:data.id,activeArrow:true})
		this.props.trainingCategoryCallback(data.id,data.name)
		this.props.checkValidationError("trainingcategory",true)
	})

	render() {
		return (
			<div className="trainingCategory">
			<Bindname text={"Training Category"}/>
		 <Choosediv  content={HeaderContent} changeActive={(data)=>this.props.changeActive(data)} prev={1} next={2} activeArrow={this.state.activeArrow}/>
			{/*{this.state.loading==true &&
				<div className='sweet-loading'>
				<BounceLoader
				sizeUnit={"px"}
				size={75}
				color={'#24479D'}
				loading={this.state.loading}
				/>

				<div className="sweet-loading_text">Loading...</div>
				</div> 
			}
			{!this.state.loading &&
				<div className="main-div">
				{this.state.ListVenueType.map((item,i)=>
					<Specific dummy={item.dontbind} width="100px" height="100px" filter="brightness(100)" undertext={item.venue_cat_name} specificvenue={()=>this.specificvenue(item)} text={img(item.venue_cat_icon)} active={(this.props.categoryId?this.props.categoryId:this.state.venuecategoryid)==item.venue_cat_id} activecolor={"#EA5C04"} Skew={false}/>
					)}

				</div>
			} */}

			{!this.state.loading &&
			     <div className="main-div">
						{this.state.ListTrainingType.map((item,index) => 
						 
						  <Specific  key={index} width="100px" height="100px" filter="brightness(100)" undertext={item.type}  specifictraining={()=>this.specifictraining(item)} text={img(item.venue_cat_icon)}  activecolor={"#EA5B04"} Skew={false}/> 
						)}
				</div>
			}
			
			</div>
			);
	}
// 	componentDidMount(){
// 	if(this.props.categoryId){
// 		this.setState({activeArrow:true});
// 		}
// 	console.log(this.state)
// }
}
const img = (image) =>((<img src={image} alt="" width="60px" height="60px"/>));
