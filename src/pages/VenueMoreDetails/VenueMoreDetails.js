import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Apilink from '../../helpers/apilink';
import './VenueMoreDetails.css';
import GridImages from './GridImages';
import LoginSignupModel from '../../components/LoginSignupModel/LoginSignupModel';
import Avatar from './Avatar';
import CircularProgress from '@material-ui/core/CircularProgress';
import dateFormat from 'dateformat';

var dummyimage=require('../../images/shutter/CAROUSEL-01.jpg');

export default class VenueMoreDetails extends React.Component {


	constructor(props) {
		super(props);
		this.state={LoginModelVisible:false,loginDetails:null,images:[dummyimage,dummyimage,dummyimage,dummyimage,dummyimage,dummyimage,dummyimage ],venueDetails:false}
	}
	renderHTMLDom=(data)=>{
	var d=new DOMParser().parseFromString(data, 'text/html');
	var appendchild=d.body;
setTimeout(()=>{
if(appendchild){
		document.querySelector('#bulkdata').innerHTML="";
	document.querySelector('#bulkdata').appendChild(appendchild);
}
},300)
}
	renderpricetype=(data)=>{
		if(data){
			if(data=='1'){
				return "Hour";
			}else if(data=='2'){
				return "Day"
			}else if(data=='3'){
				return "Week"
			}else {
				return "Month"
			}
		}
	}
loadMap=(data)=>{
	 window.open("https://maps.google.com/maps?daddr="+data.trn_venue_location.split(',')[0]+","+data.trn_venue_location.split(',')[1]+"&amp;ll=");
	}
	booknow=(data)=>{
		  if(localStorage.getItem('LoginStatus') && localStorage.getItem('LoginData')){
      var LoginData=JSON.parse(localStorage.getItem('LoginData'));
      this.props.history.push('/checkout/id='+data.venue_id);

  }else{
  	this.setState({LoginModelVisible:true});
  }
	}
	clospopup=()=>{
		this.setState({LoginModelVisible:false});
	}
	render() {
		const venudetails=this.state.venueDetails?this.state.venueDetails[0]:null;
		const availability=venudetails&&venudetails.availability.length>0?venudetails.availability[0]:null;
		const price=venudetails&&venudetails.price.length>0?venudetails.price[0]:null;
		const ameneties=venudetails&&venudetails.ameneties.length>0?venudetails.ameneties:null;
		const photos=venudetails&&venudetails.photos.length>0?venudetails.photos:null;
		const address=venudetails&&venudetails.trn_venue_address;
		return (
			<div>
			{venudetails&&
			<div className="VenueImages">
			<GridImages  imgGrid={photos?photos.map((obj)=>obj.venue_image_path):null}/>
			<div className="venueDetailsBlock">
			<div className="leftpanel">

			<div className="venue_name_left bold">{venudetails&&venudetails.trn_venue_name}</div>
			<div className="venue_name_location">
			<p title={address}>{address}</p> <span>{venudetails&&venudetails.Distance} | {venudetails&&venudetails.Time} <i className="fa fa-map-marker cursorpointer" onClick={()=>this.loadMap(venudetails&&venudetails)}></i></span>
			</div>
			<div className="venue_name_location wrapcontent">

			<h5 className="dateloc_From"><span className="header_avail">Availability :</span> {availability&&dateFormat(new Date(availability.trn_venue_avail_frm),`dd"th" mmm yyyy`)} </h5>
			<h5 className="dateloc_From">  <span>to</span>  {availability&&dateFormat(new Date(availability.trn_venue_avail_to),`dd"th" mmm yyyy`)+""}</h5>
			</div>
			<div className="venue_name_location wrapcontent">
			<h5 className="dateloc_From"><span className="header_avail">Hours :</span> {availability&&dateFormat(new Date(availability.trn_venue_avail_frm),`hh:MM tt`)} </h5>
			<h5 className="dateloc_From">  <span>to</span>  {availability&&dateFormat(new Date(availability.trn_venue_avail_to),`hh:MM tt`)+""}</h5>
			</div>
			
			

			</div>
			<div className="rightpanel">
			{venudetails&&venudetails.trn_venue_type==2&&
				<div className="perdayright">Per PAX</div>
			}
			{venudetails&&venudetails.trn_venue_type==3&&
				<div className="perdayright">Per Seats</div>
			}
			{venudetails&&(venudetails.trn_venue_type!=2 && venudetails.trn_venue_type!=3)&&
				<div className="perdayright">Per {price&&this.renderpricetype(availability?availability.trn_availability_type:null)}</div>
			}
			<div className="perdaycost">{price&&price.trn_venue_price_currency} - {price&&price.trn_venue_price_amt}</div>
			</div>
			</div>
			<div className="line"/>
			<div className="contentVenu">
			<h3>Description</h3>
			<p>{venudetails&&venudetails.trn_venue_desc}</p>
			</div>
			<div className="line"/>
			{venudetails&&venudetails.trn_venue_type==3&&
			<div className="contentVenu">
			<h3>Seats Details</h3>
			<p>Maximum Seats: {availability&&availability.trn_venue_max_count}</p>
			</div>
			}
			{venudetails&&venudetails.trn_venue_type==2&&
			<div className="contentVenu">
			<h3>Pax Details</h3>
			<p id="bulkdata"></p>
			{this.renderHTMLDom(availability&&availability.trn_venue_moredetails)}
			<p>Minimum Pax : {availability&&availability.trn_venue_min_count} & Maximum Pax : {availability&&availability.trn_venue_max_count}</p>
			</div>
		}
			{(venudetails&&venudetails.trn_venue_type==2 || venudetails&&venudetails.trn_venue_type==3)&&

			<div className="line"/>
		}
			<div className="contentVenu">
			<h3>Ameneties</h3>
			<div className="wrappingcolumncontent">
			{ameneties&&ameneties.map((obj)=>{
				return(
<div className={`boxData ${obj.amnDetails.length>0&&'subBoxData'}`}>
			<div className="imgdiv"><img src={obj.amenities_icon}/></div><span className="amnsname">{obj.amenities_name}</span>
			{obj.amnDetails.length>0&&
	<span className="addonData">
	{
			obj.amnDetails.map((obj1,index)=>{
				return(
			<div >{obj1.amenities_det_name} {index!=obj.amnDetails.length-1 && <span className="lineData">|</span>} </div>
					)
			})
			}
			</span>
		}
			</div>
					)
			})}
			
			</div>
			</div>
			<div className="line"/>
			<div className="contentVenu reviews">
			<h3>Reviews <i className="fa fa-star"></i><span className="ratingpoint">0 <span>(0 reviews)</span></span></h3>
			{/*
			<Avatar title="DummyUser" subtitle="11/12/2019">
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
			</Avatar>
			<div className="line"/>
			<Avatar title="DummyUser" subtitle="11/12/2019">
			<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
			</Avatar>*/}

			</div>
			<div className="line"/>
			<div className="booknowBtn">
			<button onClick={()=>this.booknow(venudetails)} className="btnclass">Book Now</button>
			</div>
			</div>
		}
		{this.state.venueDetails&&this.state.venueDetails.length==0&&
			<div className="novenuefound"><span>No Venue Were found</span></div>
		}
		{!this.state.venueDetails&&
			<div className="loadingCenter">
			<p>Please Wait</p>
		 <CircularProgress color="secondary" />
		 </div>
		}
		 {this.state.LoginModelVisible == true && 
  <div>
  <LoginSignupModel  videomodalPopup={false} visible={true} clospopup={this.clospopup} type='login' loginttype="Book Your Venue" LoginLoad={(data)=>{ this.setState({LoginModelVisible:false,loginDetails:data,userType:window.location.search=="?/"?null:data.user_cat_id})}} />
</div>
}
			</div>
		);
	}
	componentDidMount(){
		document.querySelector('.search-div').style.display='none';
		console.log('this.props',this.props);
		// var venueId=this.props.location.state?this.props.location.state.venueId:null;
		var venueId=this.props.match.params.venueid.split('=')[1];
		// console.log('venueId',venueId);
		navigator.geolocation.getCurrentPosition(position => {


		fetch(Apilink.apiurl+"getVenueDetailsById",{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({venueId:venueId,lat:position.coords.latitude,long:position.coords.longitude}),
    }).then((resp)=>resp.json())
		.then((respjson)=>{
			console.log("respjson",{venueId:venueId,lat:position.coords.latitude,long:position.coords.longitude});
			this.setState({venueDetails:respjson.length>0?respjson:[]})
		})
})

	}
	componentWillUnmount(){
		// alert('');
		document.querySelector('.search-div').style.display='inherit';

	}

}
