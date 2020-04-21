import React from 'react';
import BigCalendarMUI from '../../components/BigCalendar/BigCalendar';
import SlotLegend from '../../slotLabel/SlotLable'
import AvailableSlots from '../../pages/AvailableSlots/AvailableSlots';
import BlockingDates from '../../pages/BlockingDates/BlockingDates';
import MaterialSelect from '../../components/MaterialSelect';
import dateFormat from 'dateformat';
import Apilink from '../../helpers/apilink';
import moment from 'moment';
import './MyCalendar.css';
import './MyCalendar1.css';

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import CheckBoxOutlineBlankSharpIcon from '@material-ui/icons/CheckBoxOutlineBlankSharp';
import CheckBoxSharpIcon from '@material-ui/icons/CheckBoxSharp';
import RadioButtonCheckedOutlinedIcon from '@material-ui/icons/RadioButtonCheckedOutlined';
import Defaultheader from '../../Defaultheader';
const excludeDays=[{label:'Sun',value:0},{label:'Mon',value:1},{label:'Tue',value:2},{label:'Wed',value:3},{label:'Thu',value:4},{label:'Fri',value:5},{label:'Sat',value:6}]
const daysData={1:'Hourly',2:'Daily',3:'Weekly',4:'Monthly'};
export default class MyCalendar extends React.Component {


	constructor(props) {
		super(props);
		this.state={fromtodateobj:null,blockingDatesArray:[],width:0,venueobj:null,loginDetails:null,availability:[],errmsg:null,selectedDate:null,showCalendar:false,availTypeData:''}
	}
	getMonthlyData=(data,apikey,callback)=>{
		console.log("monthlydata",data);
		var fromdate=moment(data[0]).format('YYYY-MM-DD');
		var todate=moment(data[1]).format('YYYY-MM-DD');
		var obj={venueId:this.state.venueobj.venue_id,date:fromdate,todate:todate,availType:this.state.availTypeData};
		console.log('objSelected1',data);
			fetch(Apilink.apiurl+(apikey?apikey:"providerCalendarHourly"),{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(obj),
    }).then((response)=>response.json())
			.then((respjson)=>{
				callback(respjson.data);
				console.log('respjson',respjson);
			})
	}
changeBookingMonth= async(data)=>{
	var self=this;
	console.log(this.state);
	return new Promise(resolve => {
      setTimeout(() => {
      	console.log("selectedMonths",data);
      	var startofmonth   = moment(data).startOf('month').format('YYYY-MM-DD');
      	var availfromdate=new Date(this.state.venueobj.availability[0].trn_venue_avail_frm)
      	var availtodate=new Date(this.state.venueobj.availability[0].trn_venue_avail_to)
      	var validatefromdate=moment(availfromdate).format('YYYY-MM-DD');
      	var validatetodate=moment(availtodate).format('YYYY-MM-DD');
      	var endofmonth   = moment(data).endOf('month').format('YYYY-MM-DD');
      	if(startofmonth < validatefromdate){
      		startofmonth=validatefromdate;
      	}
      	if(endofmonth>validatetodate){
      		endofmonth=validatetodate;
      	}
		var apikey=(self.state.venueobj.trn_venue_type==1&&self.state.availTypeData=='1')?'getHourlyAvailability':null;
		// alert(apikey);
      	this.getMonthlyData([startofmonth,endofmonth],apikey,function(data){
      		console.log("availablemonth",data);
      	self.setState({blockingDatesArray:data.length>0?data[0].availability:[]});
        resolve(data);
      	})
        // setSelectedDays([1, 2, 3].map(() => getRandomNumber(1, 28)));
      }, 500);
    });
}
	loadVenuesList=()=>{
		// alert(JSON.stringify(this.state.loginDetails));
		this.setState({loading:true})
		 fetch(Apilink.apiurl+'myVneu/', {
            method:'POST',
            headers:{
				Accept:'application/json',
				'Content-Type':'application/json',
			},
            body:JSON.stringify({userId:this.state.loginDetails?this.state.loginDetails.user_id:"0"}),
        })
	.then((response)=>response.json())
	.then((responsejson)=>{
		this.setState({loading:false})
		console.log(responsejson);
		this.setState({venueList:responsejson.data});
	})
	}
	componentDidMount(){
		
		this.props.receiveProps&&this.props.receiveProps(this.props);
		if(localStorage.getItem('LoginStatus') && localStorage.getItem('LoginData')){
      var LoginData=JSON.parse(localStorage.getItem('LoginData'));
      // console.log(LoginData)
      // alert(JSON.stringify(LoginData));
      
      this.setState({loginDetails:LoginData},function(){
      	this.loadVenuesList();
      })
      }else{
      	this.loadVenuesList();
      }
	}
	getVenueAvailablity=(data)=>{
		// debugger;
		if(data==""){
			return;
		}
		var filteredData=this.state.venueList.filter((obj)=>obj.venue_id==data);
		console.log('filteredData',filteredData);
		this.setState({showCalendar:false},function(){
			this.setState({showCalendar:true});
		})
		if(filteredData.length>0){
			this.setState({venueobj:filteredData[0]},function(){
				this.changeBookingMonth(new Date()).then((response)=>{
					// console.log('responseData',response)
					
					// this.setState({})
				});
			})
		}else{
			this.setState({venueobj:null});
		}
		this.setState({width:0})
	}
	getCalendarHourly=(dataid,date)=>{
			var dateValue=date;
			var venueId=dataid;
			var obj={venueId:venueId,date:dateFormat(dateValue,'yyyy-mm-dd'),availType:this.state.availTypeData};
			fetch(Apilink.apiurl+"providerCalendarHourly",{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(obj),
    }).then((response)=>response.json())
			.then((responsejson)=>{
				console.log("responsejsons",responsejson);
				if(responsejson.data.length>0){
					this.setState({availability:responsejson.data[0]});
				}else{
					this.setState({availability:null});
				}
			})

	}
openPax=(date)=>{
	// alert(date);
	// alert(this.state.venueobj.trn_venue_type)
	this.setState({width:450,selectedDate:date});

}
openBox=(data)=>{
	this.setState({width:450,selectedDate:data});
	if(this.state.availTypeData==1){
		var filteredData=this.state.venueobj.availability[0].trn_venue_exclude_days?this.state.venueobj.availability[0].trn_venue_exclude_days.split(',').filter((obj)=>obj==data.getDay()):[];
		if(filteredData.length>0){
			this.setState({errmsg:'Days Falls under Exclude Days'})
		}else{
			this.setState({errmsg:null})
		this.getCalendarHourly(this.state.venueobj.venue_id,data);
		}
	}else{
		this.setState({errmsg:null})
			this.setState({fromtodateobj:data});
		// this.getMonthlyData(data,function(resp){
		// 	console.log('dataresponse',resp);
		// });
		// console.log(data);
	}
	console.log("selectedDatesMain",data);
}
receiveSlots=(data)=>{
	console.log("finalSlots",data);
}
updateMonth=()=>{
	this.changeBookingMonth(this.state.selectedDate[0]);
}
BlockDatesCalendar=(data,date)=>{
	// alert(JSON.stringify(data));
	fetch(Apilink.apiurl+"unblockingSlots",{
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({unblockinlist:data}),
    }).then((response)=>response.json())
    .then((responsejson)=>{
    	console.log(responsejson);
    	this.changeBookingMonth(date,function(data){

    	})
    })
}
changeAvailType=(data)=>{
this.setState({availTypeData:data},function(){
	// alert(JSON.stringify(this.state.venueobj));
	this.changeBookingMonth(new Date()).then((response)=>{
					// console.log('responseData',response)
					
					// this.setState({})
				});
	// this.getVenueAvailablity(this.state.venueobj.venue_id);
});
}
generateVenueType=(type,availtype)=>{
if(type==2){
	return "Pax";
}else if(type==3){
	return "Seats";
}else{
	return "Normal";
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
return "ExcludeDays : "+getData.join(',');
}else{

return "ExcludeDays : "+"0";
}
}
	render() {
		const availtype=this.state.venueobj&&this.state.venueobj.availability.length>0&&this.state.venueobj.availability[0].trn_availability_type;
		const venuetype=this.state.venueobj&&this.state.venueobj.trn_venue_type;
		const excludeDayslist=this.state.venueobj&&this.state.venueobj.availability[0].trn_venue_exclude_days?this.state.venueobj.availability[0].trn_venue_exclude_days.split(','):null
		return (
			<div className="MyCalendarMain">
			
			<div className="calendarflexdiv">			
			<MaterialSelect sendSelectedId={(data)=>this.getVenueAvailablity(data)} labelName={"Choose Your Venue"} options={this.state.venueList?this.state.venueList.filter((obj)=>obj.trn_venue_status==1&&(obj.trn_venue_type!=2&&obj.trn_venue_type!=3)&&!obj.autoSave):[]} id={'venue_id'} label={"trn_venue_name"}/>
			
			{this.state.venueobj&&
			<div className="clendarflexdivchild">
			<h4>{this.state.venueobj&&<div><span>Business Hours : </span> {dateFormat(new Date(this.state.venueobj.availability[0].trn_venue_avail_frm),'hh:MM TT')} - {dateFormat(new Date(this.state.venueobj.availability[0].trn_venue_avail_to),'hh:MM TT')}</div>}</h4>
			<h4>{this.state.venueobj&&<div><span>Availability : </span> {dateFormat(new Date(this.state.venueobj.availability[0].trn_venue_avail_frm),'dd mmm yyyy')} - {dateFormat(new Date(this.state.venueobj.availability[0].trn_venue_avail_to),'dd mmm yyyy')}</div>}</h4>
			<h4><span>Venue Type : </span>  {this.generateVenueType(this.state.venueobj.trn_venue_type,availtype)}</h4>
			</div>
				}
			</div>
			   <RadioGroup  onChange={(e)=>this.changeAvailType(e.target.value)} aria-label="gender" name="SlotsType" value={this.state.availTypeData} >
              <div className="RadioBtns">
			{availtype&&availtype.split(',').map((obj2)=>{
				return(
					  <FormControlLabel
          value={obj2}
          className={this.state.availTypeData==obj2?'checkedRadioBtn':''}
          control={<Radio color="primary" icon={<RadioButtonCheckedOutlinedIcon/>}  />}
          label={daysData[obj2]}
          labelPlacement="end"
        />
					)
			})}
			 </div>
        </RadioGroup>
			{(!this.state.venueobj||this.state.venueobj)&&
					<div className="errorCalendar">
					<i className="fa fa-calendar"/>
					Before Managing Calendar Please choose your venue</div>
			}
			{this.state.venueobj&&
			<div className="MyCalendar">
			<div className="CalendarHeader" style={{width:this.state.width}}>
			
			{this.state.width!=0&&this.state.availTypeData=='1'&&(venuetype!=2 && venuetype!=3)&&
			<AvailableSlots type={this.state.availTypeData} errmsg={this.state.errmsg} updateSlots={()=>{this.openBox(this.state.selectedDate);this.changeBookingMonth(this.state.selectedDate);}} selectedDate={this.state.selectedDate} sendSlots={(slots)=>this.receiveSlots(slots)} availability={this.state.availability}  close={()=>this.setState({width:0})}/>
			}
			{this.state.width!=0&&this.state.venueobj.availability.length>0&&this.state.availTypeData!=1&&(venuetype!=2 && venuetype!=3)&&
			<BlockingDates type={this.state.availTypeData} updateMonth={()=>this.updateMonth()} venueDetails={this.state.venueobj} selectedDates={this.state.fromtodateobj}  close={()=>this.setState({width:0})}/>
			}
			{this.state.width!=0&&(venuetype==2 || venuetype==3)&&
				<BlockingDates updateSlots={()=>this.changeBookingMonth(this.state.selectedDate)} venueDetails={this.state.venueobj}  venuetype={venuetype}   selectedDate={this.state.selectedDate}    close={()=>this.setState({width:0})}/>
			}

			</div>

			{this.state.showCalendar==true&&this.state.availTypeData!=''&&
				<>

			<BigCalendarMUI openPax={(date)=>this.openPax(date)} blockDates={(data,date)=>this.BlockDatesCalendar(data,date)} minDate={this.state.venueobj.availability[0].trn_venue_avail_frm} maxDate={this.state.venueobj.availability[0].trn_venue_avail_to} blockingDates={this.state.blockingDatesArray} type={this.state.availTypeData} venutype={this.state.venueobj.trn_venue_type}  openBox={(data)=>this.openBox(data)} handleMonthChange={(data)=>this.changeBookingMonth(data)} excludeDays={excludeDayslist}>
			
			<div className="LegendMyCalendar">
			<SlotLegend circle={true} legend="Selected Date" boxColor="#EB5C00"/>
			{availtype&&availtype!=1&&
				<>
			<SlotLegend circle={true} legend="Booked" boxColor="#7070702e"/>
			<SlotLegend circle={true} legend="Blocked" boxColor="#eb5c003d"/>
			</>
		}
		<div className="excludeLegend">
			{this.renderExcludeDays(excludeDayslist)}
			</div>
			</div>
			</BigCalendarMUI>
			</>
		}
			</div>
		}
			</div>
		);
	}
	
}

