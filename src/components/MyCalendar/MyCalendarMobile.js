import React from 'react';
import BigCalendarMUI from '../../components/BigCalendar/BigCalendar';
// import SlotLegend from '../../components/slotLabel/SlotLable';
import AvailableSlots from '../../pages/AvailableSlots/AvailableSlots';
import BlockingDates from '../../pages/BlockingDates/BlockingDates';
import MaterialSelect from '../../components/MaterialSelect';
import dateFormat from 'dateformat';
import Apilink from '../../helpers/apilink';
import moment from 'moment';
import './MyCalendar.css';
import dateformat from 'dateformat';
import WeekCalendar from '../../components/weekCalendar/WeekCalendar';

const excludeDays=[{label:'Sun',value:0},{label:'Mon',value:1},{label:'Tue',value:2},{label:'Wed',value:3},{label:'Thu',value:4},{label:'Fri',value:5},{label:'Sat',value:6}]
export default class MyCalendarMobile extends React.Component {


	constructor(props) {
		super(props);
		this.state={fromtodateobj:null,blockingDatesArray:[],width:0,venueobj:null,loginDetails:null,availability:[],errmsg:null,selectedDate:null,showCalendar:false,sendfulldata:""}
	}
	getMonthlyData=(data,apikey,callback)=>{
		console.log("monthlydata",data);
		var fromdate=moment(data[0]).format('YYYY-MM-DD');
		var todate=moment(data[1]).format('YYYY-MM-DD');
		var obj={venueId:this.state.venueobj.venue_id,date:fromdate,todate:todate};
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
				this.setState({sendfulldata:respjson})
				console.log('respjson',respjson);
			})
	}
changeBookingMonth= async(data)=>{
	var self=this;
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
		var apikey=(((!this.state.venueobj.trn_venue_type || this.state.venueobj.trn_venue_type=='1')&&this.state.venueobj.availability[0].trn_availability_type=='1') || (this.state.venueobj.trn_venue_type=='2' || this.state.venueobj.trn_venue_type=='3'))?'getHourlyAvailability':null;
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
		this.setState({venueList:responsejson.data.filter((obj)=>obj.trn_venue_status==1)});
	})
	}
	componentDidMount(){
		
		this.props.receiveProps&&this.props.receiveProps(this.props);
		if(localStorage.getItem('LoginStatus') && localStorage.getItem('LoginData')){
      var LoginData=JSON.parse(localStorage.getItem('LoginData'));
      // console.log(LoginData)
      
      this.setState({loginDetails:LoginData},function(){
      	this.loadVenuesList();
      })
      }else{
      	this.loadVenuesList();
      }
	}
	getVenueAvailablity=(data)=>{
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
			// alert(date);
			var obj={venueId:venueId,date:dateFormat(dateValue,'yyyy-mm-dd')};
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
	// alert(this.state.venueobj.trn_venue_type)
	this.setState({width:450,selectedDate:date});

}
openBox=(data,dontopenbox)=>{
	if(!dontopenbox){

		this.setState({width:450,selectedDate:data});
	}
	if(this.state.venueobj.availability[0].trn_availability_type==1){
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
	console.log("dddd",data);
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
generateVenueType=(type,availtype)=>{
if(type==2){
	return "Pax";
}else if(type==3){
	return "Seats";
}else if((!type || type==1)&&availtype==1){
	return "Hourly";
}else if((!type || type==1)&&availtype==2){
	return "Daily";
}else if((!type || type==1)&&availtype==3){
	return "Weekly";
}else{
	return "Monthly";
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
return "Exclude Days : "+getData.join(',');
}else{

return "Exclude Days : "+"0";
}
}
	render() {
		const availtype=this.state.venueobj&&this.state.venueobj.availability.length>0&&this.state.venueobj.availability[0].trn_availability_type;
		var nametypes=this.state.venueobj && this.generateVenueType(this.state.venueobj.trn_venue_type,availtype)
		console.log(nametypes,"nametypes")
		const venuetype=this.state.venueobj&&this.state.venueobj.trn_venue_type;
		const excludeDayslist=this.state.venueobj&&this.state.venueobj.availability[0].trn_venue_exclude_days?this.state.venueobj.availability[0].trn_venue_exclude_days.split(','):null

		console.log("venuelist",this.state.venueobj && this.state.venueobj.availability[0].trn_availability_type);
		return (
                <div className="row m-0">
                    <div className="col-6 pr-0 mob_venue_list">
                            <MaterialSelect sendSelectedId={(data)=>this.getVenueAvailablity(data)} labelName={"Choose Your Venue"} options={this.state.venueList?this.state.venueList.filter((obj)=>obj.trn_venue_status!=3):[]} id={'venue_id'} label={"trn_venue_name"}/>
                    </div>
                    <div className="col-6 p-0 mob_venue_list">
                        {
                            this.state.venueobj&&
                            <div className="mob_venue">
                            <p className="venue_type_tag">Venue Type</p>
                            <p className="venue_type_tag_txt">{this.generateVenueType(this.state.venueobj.trn_venue_type,availtype)}</p>
                            </div>
                        }
                    </div>
                    {
                        this.state.venueobj &&
                        <>
                        <div className="col-6 business_title">
                            <h6>Business Hours</h6>
                            <div className="bunisesshrs">
                            {dateFormat(new Date(this.state.venueobj.availability[0].trn_venue_avail_frm),'hh:MM TT')} - {dateFormat(new Date(this.state.venueobj.availability[0].trn_venue_avail_to),'hh:MM TT')}
                            </div>
                        </div>

                        <div className="col-6 avail_title">
                            <h6>Availability</h6>
                            <div className="availhrs">
                            {dateFormat(new Date(this.state.venueobj.availability[0].trn_venue_avail_frm),'dd mmm yyyy')} - {dateFormat(new Date(this.state.venueobj.availability[0].trn_venue_avail_to),'dd mmm yyyy')}
                            </div>
                        </div>
                        </>

                    }
                   
            
			<div className="MyCalendarMain">
			
			{!this.state.venueobj&&
					<div className="errorCalendar">
					<i className="fa fa-calendar"/>
					Before Managing Calendar Please choose your venue</div>
			}


			{this.state.showCalendar === true && nametypes == "Hourly" &&
            <>
            <WeekCalendar propssend={(date)=>{this.setState({selectedDate:date});this.getCalendarHourly(this.state.venueobj.venue_id,date,true)}} />
				{
					this.state.selectedDate &&
					<AvailableSlots errmsg={this.state.errmsg} updateSlots={()=>{this.openBox(this.state.selectedDate,true);this.changeBookingMonth(this.state.selectedDate);}} selectedDate={this.state.selectedDate} sendSlots={(slots)=>this.receiveSlots(slots)} availability={this.state.availability}  close={()=>this.setState({width:0})}/>
				}
                </>
            }

			{
				this.state.showCalendar === true && nametypes != "Hourly" &&
                <BigCalendarMUI openPax={(date)=>this.openPax(date)} blockDates={(data,date)=>this.BlockDatesCalendar(data,date)} minDate={this.state.venueobj.availability[0].trn_venue_avail_frm} maxDate={this.state.venueobj.availability[0].trn_venue_avail_to} blockingDates={this.state.blockingDatesArray} type={availtype} venutype={this.state.venueobj.trn_venue_type}  openBox={(data)=>this.openBox(data)} handleMonthChange={(data)=>this.changeBookingMonth(data)} excludeDays={excludeDayslist}>
			
               
				<div className="excludeLegend">
                        {this.renderExcludeDays(excludeDayslist)}
                    </div>
			</BigCalendarMUI>
			}

			

			{this.state.venueobj&&
			<div className="MyCalendar">
			<div className="CalendarHeader" style={{width:this.state.width}}>
			
			{this.state.width!=0&&availtype==1&&(venuetype!=2 && venuetype!=3)&&
			<AvailableSlots errmsg={this.state.errmsg} updateSlots={()=>{this.openBox(this.state.selectedDate);this.changeBookingMonth(this.state.selectedDate);}} selectedDate={this.state.selectedDate} sendSlots={(slots)=>this.receiveSlots(slots)} availability={this.state.availability}  close={()=>this.setState({width:0})}/>
			}
			{this.state.width!=0&&this.state.venueobj.availability.length>0&&availtype!=1&&(venuetype!=2 && venuetype!=3)&&
			<BlockingDates updateMonth={()=>this.updateMonth()} venueDetails={this.state.venueobj} selectedDates={this.state.fromtodateobj}  type={availtype}  close={()=>this.setState({width:0})} propsdata={this.state.sendfulldata}/>
			}
			{this.state.width!=0&&(venuetype==2 || venuetype==3)&&
				<BlockingDates updateSlots={()=>this.changeBookingMonth(this.state.selectedDate)} venueDetails={this.state.venueobj}  venuetype={venuetype}   selectedDate={this.state.selectedDate}    close={()=>this.setState({width:0})}/>
			}

			</div>

            

			 {/* {this.state.showCalendar==true&&
				<>
            
			 <BigCalendarMUI openPax={(date)=>this.openPax(date)} blockDates={(data,date)=>this.BlockDatesCalendar(data,date)} minDate={this.state.venueobj.availability[0].trn_venue_avail_frm} maxDate={this.state.venueobj.availability[0].trn_venue_avail_to} blockingDates={this.state.blockingDatesArray} type={availtype} venutype={this.state.venueobj.trn_venue_type}  openBox={(data)=>this.openBox(data)} handleMonthChange={(data)=>this.changeBookingMonth(data)} excludeDays={excludeDayslist}>
			
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
		}  */}
			</div>
		}
			</div>
            </div>
		);
	}
	
}
