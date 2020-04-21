import React from 'react';
import './BookingCheckout.css';
import BoxCard from  './BoxCard';
import { Card,Rate,Row,Col,Icon,notification  } from 'antd';
import NoAvailability from './NoAvailability'
import Drawer from '@material-ui/core/Drawer';
import user from '../../images/DesignIcons/user.png';
import Apilink from '../../helpers/apilink';
import profile from '../../images/DesignIcons/profile.png';
import building from '../../images/DesignIcons/building.png';
import square from '../../images/DesignIcons/square.png';
import promo from '../../images/DesignIcons/promo.png';
import inr from '../../images/DesignIcons/inr.png';
import DateFunctions from '../../helpers/DateFunctions';
import CancellationPolicy from '../../components/cancelationPolicy/cancellationpolicy';
import HourlyAvailablity from '../../components/BlockForm/BlockForm';
import DayCalendar from './DayCalendar';
import CheckoutForm from '../../pages/StripeComponent';
import InfoIcon from '@material-ui/icons/Info';
import CircularProgress from '@material-ui/core/CircularProgress';
import moment from 'moment';
import { BrowserRouter as Router, Route, Link,withRouter,useParams  } from "react-router-dom";
import dateFormat from 'dateformat';
var typeofvenue="";
const excludeDays=[{label:'Sun',value:0},{label:'Mon',value:1},{label:'Tue',value:2},{label:'Wed',value:3},{label:'Thu',value:4},{label:'Fri',value:5},{label:'Sat',value:6}]
function htmlEscape(str) {
    return String(str)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
}
var bookdetails={
"venue_id":"",
"user_id":"",
"trn_venue_price_amt":"",
"bookingFrom":"",
"bookingTo":"",
"mobile":"",
"moreInfo":"",
"promoId":null,
"promoType":"",
"promoValue":0,
"promoAmount":0.0,
"finalPrice":"1900"
}
 class BookingCheckout extends React.Component {


	constructor(props) {
		super(props);
		this.state={blockedslots:[],right:false,loginDetails:null,venueDetails:false,noavailability:true,BasicDetails:[{label:'Name',mandatory:true,value:''},{label:'Mobile Number',value:''},{label:'Email Address',value:''},{label:'More Info',value:''}],showavail:false,arrayofSlots:[],promocode:'',discountedamount:0,showdaycalendar:false,fromDateObj:{fromDate:null,toDate:null},arrayofDates:[],count:0};
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
	renderExcludeDays=(arrayData)=>{
	if(arrayData){
var getData=arrayData.map((obj)=>{
		var findindex=excludeDays.findIndex((obj2)=>obj2.value==obj);
		if(findindex!=-1){
			return excludeDays[findindex].label;
		}

})
return getData.join(',');
}else{

return "0";
}
}
generateSlotCount=(data)=>{
	// return 0;
	var count=0;
	if(typeofvenue=='pax'){
		return this.state.arrayofSlots?this.state.arrayofSlots[0].value:0;
	}else if(typeofvenue=='Month'||typeofvenue=='Week'||typeofvenue=='Day'){
		return this.state.count;
	}
	data.map((obj)=>{
		count+=obj.slots.length;
	})
	return count;
}
checkavailability=(data,availability)=>{
	if(((!data.trn_venue_type || data.trn_venue_type=='1')&&availability.trn_availability_type=='1') || (data.trn_venue_type=='2' || data.trn_venue_type=='3')){
	this.setState({showavail:true});	
	}else{
		// if(new Date())
		var currentDate=dateFormat(new Date(),'yyyy-mm-dd')
		var fromdate=dateFormat(new Date(availability.trn_venue_avail_frm),'yyyy-mm-dd')
		var todate=dateFormat(new Date(availability.trn_venue_avail_to),'yyyy-mm-dd')
		if(currentDate>=fromdate&&currentDate<=todate){
		this.setState({showdaycalendar:true});

		}else{
			alert("no availability");
		}
	}
}

groupingDates=(array)=>{
		var priceCount=this.state.venueDetails&&this.state.venueDetails[0].price.length>0?this.state.venueDetails[0].price[0]:null;
debugger;
	if(array.length>0){
		var obj={date:array[0].selectedDate,slots:array};
		var arrayofSlots=this.state.arrayofSlots;
		var findindex=arrayofSlots.findIndex((obj)=>obj.date==array[0].selectedDate)
		if(findindex!=-1){
			if(array.length==0){
				arrayofSlots.splice(findindex,1)
			}else{
			arrayofSlots[findindex].slots=array;
			}
		}else{
		arrayofSlots.push(obj)
		}
		var finalHoursData=this.state.finalHoursData;
		var hoursArray=[];
		var newArrayofSlots=arrayofSlots.map((obj)=>{
			obj.slots.map((obj2)=>{
				var objdata={fromdate:obj.date,todate:obj.date,slotFromTime:obj2.venue_slot_start_time,slotToTime:obj2.venue_slot_end_time}
				hoursArray.push(objdata)
			})
		})
		finalHoursData=hoursArray;
		bookdetails.slots=finalHoursData;
		var finalamount=(parseInt(priceCount?priceCount.trn_venue_price_amt:0)*this.generateSlotCount(arrayofSlots));
		if(this.state.discountedamount!=0){

		bookdetails.finalPrice = finalamount - finalamount*(parseInt(bookdetails.promoValue)/100);
		bookdetails.promoAmount=finalamount*(parseInt(bookdetails.promoValue)/100);
		}else{
				bookdetails.finalPrice=finalamount;
		}
		bookdetails.venue_price_amt=parseInt(priceCount?priceCount.trn_venue_price_amt:0);
		console.log('finalHours',finalHoursData)

		this.setState({arrayofSlots,finalHoursData})
	}
	// var obj={};
	// var arrayofData=[];
	// for(var i in array){
	// if(obj[array[i].selectedDate]==undefined){
	// 		var objData={date:array[i].selectedDate,slots:[array[i]]}
	// 		arrayofData.push(obj);
	//   }else{
	//   	var findIndex=arrayofData.findIndex((indexdata)=>indexdata.selectedDate==array[i].selectedDate);

	//   }
	// }
}
changeBasicDetails=(value,index)=>{
	var BasicDetails=this.state.BasicDetails;
	BasicDetails[index].value=value;
	bookdetails.bookingName=BasicDetails[0].value;
	bookdetails.bookingPhone=BasicDetails[1].value;
	bookdetails.bookingEmail=BasicDetails[2].value;
	bookdetails.moreInfo=BasicDetails[3].value;

	this.setState({BasicDetails});
}
sendHourlyData=(data,priceCount)=>{
	console.log(data);
	// console.log(data.length);
	if(Array.isArray(data)==true){
		this.groupingDates(data);
	}else{
		var arrayofSlots=this.state.arrayofSlots;
		var findindex=arrayofSlots.findIndex((obj)=>obj.date==data);
		if(findindex!=-1){
			arrayofSlots.splice(findindex,1);
		}
		var hoursArray=[];
		var newArrayofSlots=arrayofSlots.map((obj)=>{
			obj.slots.map((obj2)=>{
				var objdata={fromdate:obj.date,todate:obj.date,slotFromTime:obj2.venue_slot_start_time,slotToTime:obj2.venue_slot_end_time}
				hoursArray.push(objdata)
			})
		})
		var finalHoursData=this.state.finalHoursData;
		finalHoursData=hoursArray;
		bookdetails.slots=finalHoursData;
		var finalamount=(parseInt(priceCount?priceCount.trn_venue_price_amt:0)*this.generateSlotCount(arrayofSlots));
		if(this.state.discountedamount!=0){

		bookdetails.finalPrice= finalamount - finalamount*(parseInt(bookdetails.promoValue)/100);
		bookdetails.promoAmount=finalamount*(parseInt(bookdetails.promoValue)/100);
		}else{
				bookdetails.finalPrice=finalamount;
		}
		console.log('finalHours',finalHoursData);
		this.setState({arrayofSlots,finalHoursData});
	}
		this.setState({noavailability:false,showavail:false});
}
ApplyPromocode=(price)=>{
	var obj={promoCode:this.state.promocode,venue_cat_id:1,date:dateFormat(new Date(),'yyyy-mm-dd')};
	// console.log(obj);
 fetch(Apilink.apiurl+"promoCode/", {
        headers:{
      Accept:'application/json',
      'Content-Type':'application/json',
    },
      method:'POST',
      body:JSON.stringify(obj),
    }).then((resp)=>resp.json())
 .then((respjson)=>{
console.log(respjson);
if(respjson.status==1){
	       notification.error({
    message:'Error Message',
    description:respjson.msg,
    onClick:() => {
      console.log('Notification Clicked!');
    },
  });
}else{
var totalamount=parseInt(price&&price.trn_venue_price_amt)*this.generateSlotCount(this.state.arrayofSlots);
var deductedamount=respjson.response[0].promo_type==1?totalamount*(parseInt(respjson.response[0].promo_value)/100):respjson.response[0].promo_value;
bookdetails.promodId=respjson.response[0].promo_id;
bookdetails.promoAmount=deductedamount;
bookdetails.promoValue=respjson.response[0].promo_value;
bookdetails.promoType=respjson.response[0].promo_type;
bookdetails.finalPrice=totalamount - deductedamount;
// alert(bookdetails.finalPrice);
 notification.success({
    message:'Message',
    description:"Promo Code Applied Successfully",
    onClick:() => {
      console.log('Notification Clicked!');
    },
  });
this.setState({discountedamount:deductedamount});
}
 })
}
removePromo=()=>{
this.setState({discountedamount:0,promocode:''})
bookdetails.promodId='';
bookdetails.finalPrice=bookdetails.finalPrice + bookdetails.promoAmount;
bookdetails.promoValue=0;
bookdetails.promoAmount=0;
bookdetails.promoType='';

}
loadBookingStatus=(data)=>{
	this.setState({loading:data.loading})
	if(data.success==true){
		// this.props.closePopupCenter();
	}else if(data.success==false){
		// this.setState({loading:data.loading})
		notification.error({
    message:'Error',
    description:"Transaction Failed",
    onClick:() => {
      console.log('Notification Clicked!');
    },
  });
	}
}
changePromocode=(data)=>{
	this.setState({promocode:data});
}
renderLoading(){
	// if(elementdiv){
		var bodydocument=document.getElementsByTagName('body');
	var elementdiv=document.createElement('div');
	var elementdiv1=document.createElement('div');
	 var newContent = document.createTextNode("do not reload the page Please Wait....")
	elementdiv1.appendChild(newContent);
	elementdiv.appendChild(elementdiv1);
	elementdiv.setAttribute('class','loadingScreen');
	elementdiv.setAttribute('id','loadingScreenId');
		if(document.getElementById('loadingScreenId')==undefined){
		document.body.appendChild(elementdiv);
		}else{

		}
	// }
}

sendpaxDetails=(count,date,price)=>{
console.log(count);
typeofvenue='pax';
var arrayofSlots=this.state.arrayofSlots;
if(count==0){
arrayofSlots=[];
}else{
	arrayofSlots=[{label:'No of Pax Chosen',value:count,date:date}];
}
bookdetails.bookingCapacity=parseInt(count);
bookdetails.bookingFrom=dateFormat(date,'yyyy-mm-dd');
bookdetails.bookingTo=dateFormat(date,'yyyy-mm-dd');
var finalprice = count*(price&&price.trn_venue_price_amt);
var discountedamount=0;
		bookdetails.venue_price_amt=parseInt(price?price.trn_venue_price_amt:0);

if(this.state.discountedamount!=0){

		bookdetails.finalPrice = finalprice - finalprice*(parseInt(bookdetails.promoValue)/100);
		bookdetails.promoAmount=finalprice*(parseInt(bookdetails.promoValue)/100);
		discountedamount=finalprice*(parseInt(bookdetails.promoValue)/100);
		}else{
				bookdetails.finalPrice=finalprice;
				discountedamount=0;
		}
this.setState({arrayofSlots,discountedamount:discountedamount,showavail:false});
}

removeRenderLoading=()=>{
		var bodydocument=document.getElementsByTagName('body');
		if(document.getElementById('loadingScreenId')!=undefined){
			document.body.removeChild(document.getElementById('loadingScreenId'));
		}
}
openRangeSelected=(dates,type,price)=>{
	// console.log(type);
	if(!dates){
		this.setState({arrayofSlots:[],showdaycalendar:false});
		return;
	}
	var getDates=DateFunctions.enumerateDaysBetweenDates(dateFormat(dates.fromDate,'yyyy-mm-dd'),dateFormat(dates.toDate,'yyyy-mm-dd'));
	var quantity=0
if(type==4){
	quantity=Math.ceil(getDates.length/30);
	typeofvenue='Month';
}else if(type==3){
	quantity=Math.ceil(getDates.length/7);
	typeofvenue='Week';
}else{
quantity=getDates.length;
typeofvenue='Day';
}
bookdetails.bookingCapacity=0;
bookdetails.bookingFrom=dateFormat(dates.fromDate,'yyyy-mm-dd');
bookdetails.bookingTo=dateFormat(dates.toDate,'yyyy-mm-dd');
bookdetails.slots=getDates.length>0?getDates.map((obj)=>{
return {	"fromdate":dateFormat(obj,'yyyy-mm-dd'),
			"todate":dateFormat(obj,'yyyy-mm-dd'),
			"slotFromTime":"00:00:00",
			"slotToTime":"00:00:00"}

}):[];
var finalprice = quantity*(price&&price.trn_venue_price_amt);
var discountedamount=0;
		bookdetails.venue_price_amt=parseInt(price?price.trn_venue_price_amt:0);

if(this.state.discountedamount!=0){

		bookdetails.finalPrice = finalprice - finalprice*(parseInt(bookdetails.promoValue)/100);
		bookdetails.promoAmount=finalprice*(parseInt(bookdetails.promoValue)/100);
		discountedamount=finalprice*(parseInt(bookdetails.promoValue)/100);
		}else{
				bookdetails.finalPrice=finalprice;
				discountedamount=0;
		}
this.setState({arrayofSlots:[{fromDate:dates.fromDate,toDate:dates.toDate,dates:getDates}],count:quantity,discountedamount:discountedamount},function(){
	this.setState({showdaycalendar:false});
})
}
generateVenueType=(type,availtype)=>{
if(type==2){
	return "Pax";
}else if(type==3){
	return "Seat";
}else if((!type || type==1)&&availtype==1){
	return "Hour";
}else if((!type || type==1)&&availtype==2){
	return "Day";
}else if((!type || type==1)&&availtype==3){
	return "Week";
}else{
	return "Month";
}
}
generateMonthlyorWeekly=()=>{
	if(typeofvenue=='Month'||typeofvenue=='Week'||typeofvenue=='Day'){
		return typeofvenue;
	}else{
		return '';
	}
	}
	render() {
		console.log('bookdetails',bookdetails);
		const venudetails=this.state.venueDetails?this.state.venueDetails[0]:null;
		const venuetype=venudetails&&venudetails.trn_venue_type;
		const availability=venudetails&&venudetails.availability.length>0?venudetails.availability[0]:null;
		const price=venudetails&&venudetails.price.length>0?venudetails.price[0]:null;
		const ameneties=venudetails&&venudetails.ameneties.length>0?venudetails.ameneties:null;
		const photos=venudetails&&venudetails.photos.length>0?venudetails.photos:null;
		const address=venudetails&&venudetails.trn_venue_address;

		return (
		<div className="BookingMainPage">
		{!this.state.loading&&this.removeRenderLoading()}
		{this.state.loading&&this.renderLoading()}

			 <Drawer anchor="right" open={this.state.right} onClose={()=>this.setState({right:false})}>
			 <div className="cancallationPolicyDiv">
			 <div onClick={()=>this.setState({right:false})} className="closeAnimationDrawer"><i class="fa fa-times" aria-hidden="true"></i></div>
			 	<CancellationPolicy/>
			 </div>
      </Drawer>
      {this.state.venueDetails&&this.state.venueDetails.length==0&&
			<div className="novenuefound"><span>No Venue Were found</span></div>
		}
      {!this.state.venueDetails&&
			<div className="loadingCenter">
			<p>Please Wait</p>
		 <CircularProgress color="secondary" />
		 </div>
		}
      {venudetails&&
			<div className='BookingMainContent'>
			<div className="LeftSideContent">
			<BoxCard headerImg={user} headerText={"Logged In"}>
			<div className="userProfileName">
			<small>welcome</small>
			<p>{this.state.loginDetails&&(this.state.loginDetails.user_name +" "+ this.state.loginDetails.user_surname)}</p>
			</div>
		
			</BoxCard>
		
			<BoxCard  headerImg={profile} headerText={"Basic Details"}>
			<div className="FormBoxBasic">
			{this.state.BasicDetails.map((obj,index)=>{
			return(	
			<div className="LabelBox">
			<label>{obj.label} {obj.mandatory&&<span style={{color:'red'}}>*</span>}</label>
			<input onChange={(e)=>this.changeBasicDetails(e.target.value,index)}/>
			</div>
			)
			})}
			</div>
			</BoxCard>
      
			<BoxCard headerImg={building} headerText={<div>{venudetails&&venudetails.trn_venue_name} <Rate  className="ratecolor" allowHalf count={3} defaultValue={3} disabled={true} /></div>}>
			<div className="PricingDetailsbook">
			{venudetails&&venudetails.trn_venue_type==2&&
				 <>
				<p className="labelprice">Per PAX <p className="labelamt"><i class="fa fa-inr" aria-hidden="true"></i> {price&&price.trn_venue_price_amt} </p>
				</p>
				<p className="minmaxcapacity">
				<span> Minimum - {availability&&availability.trn_venue_min_count}</span>
				<span> & Maximum - {availability&&availability.trn_venue_max_count}</span>
				</p>
				 </>
			}
			{venudetails&&venudetails.trn_venue_type==3&&
				<>
				<p className="labelprice">Per Seats <p className="labelamt"><i class="fa fa-inr" aria-hidden="true"></i> {price&&price.trn_venue_price_amt}</p></p>
				<p className="minmaxcapacity">
				<span> Maximum - {availability&&availability.trn_venue_max_count}</span>
				</p>
				</>
			}
			{venudetails&&(venudetails.trn_venue_type!=2 && venudetails.trn_venue_type!=3)&&
			<p className="labelprice">Price Per {price&&this.renderpricetype(availability?availability.trn_availability_type:null)} <p className="labelamt"><i class="fa fa-inr" aria-hidden="true"></i> {price&&price.trn_venue_price_amt}</p></p>} 
			<br/>
			<span className="cancellationpolicy" onClick={()=>this.setState({right:true})}>Cancellation Policy</span>
			<div className="venueDetailsInfo">
			<div className="excludeDaysInfo">
			<InfoIcon/>
			<span>Exclude Days <span className="excludeDaysData">{this.renderExcludeDays(availability&&availability.excludeDays&&availability.excludeDays.split(','))}</span></span>
			</div>
			{/*(((!venuetype || venuetype=='1')&&availability.trn_availability_type=='1') || (venuetype=='2' || venuetype=='3')) &&
			<button onClick={()=>this.checkavailability(venudetails)} className="btnavailability"><i className="fa fa-calendar-check-o"/> Check Availability</button>*/
			}
			<button onClick={()=>this.checkavailability(venudetails,availability)} className="btnavailability"><i className="fa fa-calendar-check-o"/> Check Availability</button>
			</div>
			</div>
			</BoxCard>
			</div>
			<div className="RightSideContent">
			{this.state.arrayofSlots.length==0&&
				<NoAvailability/>
			}

				{this.state.arrayofSlots.length>0&&
			<div className="ContentAvailable">
			<BoxCard heightdeviation={1.2} headerImg={square} headerText={"your Booking Availabilities"}>
			<div className="SlotsContent">
			{this.state.arrayofSlots.length>0&&this.state.arrayofSlots.map((obj)=>{
return(
	<>
	{venudetails&&(!venudetails.trn_venue_type||venudetails.trn_venue_type==1)&&(availability.trn_availability_type=='2' || availability.trn_availability_type=='3' || availability.trn_availability_type=='4')&&
	<>
		<div>From Date - {this.state.arrayofSlots.length>0&&dateFormat(this.state.arrayofSlots[0].fromDate,'yyyy-mm-dd')}</div>
		<div>To Date - {this.state.arrayofSlots.length>0&&dateFormat(this.state.arrayofSlots[0].toDate,'yyyy-mm-dd')}</div>
		</>
	}
	{venudetails&&(venudetails.trn_venue_type=='2'|| venudetails.trn_venue_type=='3')&&
		<div>No of {venudetails.trn_venue_type=='2'?'Paxes':'Seats'} Chosen ({obj.value})</div>
	}
	{venudetails&&(!venudetails.trn_venue_type||venudetails.trn_venue_type==1)&&(venudetails.availability[0].trn_availability_type=='1')&&
<label>{obj.date} - <span>{obj.slots.length} Slots</span></label>
}
</>
	)
			})}
			
			</div>
			</BoxCard>
			<BoxCard headerImg={promo} headerText={"Promo Code"}>
			<div className="PromoCodeBox">
			<div className="PromoCodeContent">
			<input value={this.state.promocode} onChange={(e)=>this.changePromocode(e.target.value)} placeholder="Enter Prome Code"/>
			</div>
			{this.state.discountedamount==0&&
			<button className="btnavailability" onClick={()=>this.ApplyPromocode(price)}>Apply</button>
		}	{this.state.discountedamount!=0&&
			<button className="btnavailability red" onClick={()=>this.removePromo()}>Remove</button>
		}
			</div>
			</BoxCard>
			<BoxCard widthdeviation={1.5} headerImg={inr} headerText={"Bill Details"}>
			<div className="BillDetails">
			<div className="PriceItem">
				<div>Per {this.generateVenueType(venudetails.trn_venue_type,availability.trn_availability_type)} {price&&price.trn_venue_price_amt}  <span>(x{this.generateSlotCount(this.state.arrayofSlots)})</span></div>
				<div>{parseInt(price&&price.trn_venue_price_amt)*this.generateSlotCount(this.state.arrayofSlots)}</div>
			</div>
			{this.state.discountedamount!=0&&
			<div className="PriceItem ">
				<div className="greeencolor">Total Discount</div>
				<div className="greeencolor">- {bookdetails.promoAmount}</div>
			</div>
			}
			<div className="PriceItem bordered">
				<div>Total Pay</div>
				<div>{bookdetails.finalPrice}</div>
			</div>
			</div>
			<CheckoutForm send={(data)=>this.loadBookingStatus(data)} {...this.props} bookingDetails={bookdetails} totalamount={parseInt(bookdetails.finalPrice)} bookobj={this.state.venueDetails[0]}>
			<div className="paybtnBooking">
			<button>Pay</button>
			</div>	
			</CheckoutForm>
			</BoxCard>
			</div>}
			</div>
			{this.state.showavail==true&&
			<HourlyAvailablity sendpaxDetails={(count,date)=>this.sendpaxDetails(count,date,price)}  hourlychosenslots={this.state.arrayofSlots} sendDataSlot={(data)=>this.sendHourlyData(data,price)} closeHourModal={()=>this.setState({showavail:false})} venueDetails={venudetails}/>
			}
			{this.state.showdaycalendar==true&&
				<DayCalendar refreshblockeddates={(dates)=>this.updateMonthlyData(venudetails.venue_id,dates.fromMonth,dates.toMonth)} blockedslots={this.state.blockedslots.length>0?this.state.blockedslots[0].availability:null} minDate={availability&&availability.trn_venue_avail_frm} maxDate={availability&&availability.trn_venue_avail_to} venudetails={venudetails} openRangeSelected={(dates)=>this.openRangeSelected(dates,availability&&availability.trn_availability_type,price)} closeHourModal={()=>this.setState({showdaycalendar:false})}/>
			}
			</div>
		}
			</div>
		);
	}

updateMonthlyData=(venueid,fromdates,todates)=>{
	var obj={venueId:venueid,date:fromdates,todate:todates};
	fetch(Apilink.apiurl+"providerCalendarHourly",{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(obj),
    }).then((resp)=>resp.json())
.then((respjson)=>{
	console.log("blockedslots",respjson);
	if(respjson.status==0){
		this.setState({blockedslots:respjson.data})
	}else{
		this.setState({blockedslots:[]});
	}
})
}
getMonthlyData=(venueid,fromdate,currentDate)=>{
var fromdates=moment(fromdate).format('YYYY-MM-DD');
var currDate=moment(currentDate).format('YYYY-MM-DD');
fromdates=fromdates<currDate?currDate:fromdates;
var todates=moment(fromdates).add(1,'M').endOf('month').format('YYYY-MM-DD');
this.updateMonthlyData(venueid,fromdates,todates);
}

	componentDidMount(){
		document.querySelector('.search-div').style.display='none';

		var venueId=this.props.match?this.props.match.params.venueid.split('=')[1]:null;
		// console.log('venueId',venueId);
		 if(localStorage.getItem('LoginStatus') && localStorage.getItem('LoginData')){
      var LoginData=JSON.parse(localStorage.getItem('LoginData'));
	bookdetails.user_id=LoginData.user_id;
	bookdetails.venue_id=venueId;
	bookdetails.bookingFrom=dateFormat(new Date(),'yyyy-mm-dd');
	bookdetails.bookingTo=dateFormat(new Date(),'yyyy-mm-dd');
	bookdetails.promodId=0;
	bookdetails.promoType=0;
	bookdetails.promoValue=0;
	bookdetails.trn_venue_price_amt=0;
	bookdetails.promoAmount=0;
	bookdetails.finalPrice=0;
	bookdetails.bookingCapacity=0;
	bookdetails.slots=[];
      this.setState({loginDetails:LoginData});
		 }else{
		 	this.props.history.push('/');
		 		this.props.loadtohome&&this.props.loadtohome();
		 }
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
			console.log("respjsonbooking",respjson);
			if(respjson.length>0){
				this.getMonthlyData(respjson[0].venue_id,respjson[0].availability[0].trn_venue_avail_frm,new Date())
			}
			this.setState({venueDetails:respjson.length>0?respjson:[]})
		})
})
	}
	componentWillUnmount(){
		// alert('');
		document.querySelector('.search-div').style.display='inherit';

	}
}
export default withRouter(BookingCheckout);