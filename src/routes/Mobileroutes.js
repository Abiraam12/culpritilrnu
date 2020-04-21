import React from 'react';
import { BrowserRouter as Router, Route, Link ,withRouter} from "react-router-dom";
import MobileHome from '../pages/MobileHome/MobileHome';
import MobileVenueList from '../pages/MobileVenueList/MobileVenueList';
import Dashboard from '../pages/Dashboard/Dashboard';
import ReferEarn from '../pages/Refer_Earn/referEarn';
import MobSearchVenueList from '../pages/MobSearchVenuList/MobSearchVenueList';
// import IndividualForm from '../components/IndividualForm/IndividualForm';
import CorporateForm from '../components/CorporateForm/CorporateForm';
import ListVenue from '../ListVenue';
import ListTraining from '../ListTraining';
import Homeslidercontent from '../components/homeslidercontent/homeslidercontent';
import MyVenues from '../pages/MyVenues/myvenues';
import TrainerSearch from '../components/trainerSearch/TrainerSearch';
import MoreFilterPage from '../components/morefilterpage/MoreFilterPage';
import AddFavourite from '../components/AddFavourite/AddFavourite';
import HomeSubHeader from '../pages/HomeSubheader';
import Defaultheader from '../components/Header';
import Home from '../../src/pages/Home';
import MyCalendarMobile from '../components/MyCalendar/MyCalendarMobile';
import LoginSignupModel from '../components/LoginSignupModel/LoginSignupModel';
import venueSearch from '../components/venueSearch/venueSearch'
import MobSearchVenue from '../components/mobSearchVenue/MobSearchVenue';

 class Mobileroutes extends React.Component {

	constructor(props) {
		super(props);
		this.state={myhistoryprops:null};
	}
	componentDidMount(){
		console.log("did mount props",this.props)
		// alert(this.props.history.location.pathname);
		// if(this.props.history.location.pathname=='/ilrnu/'){
		// this.props.history.push('/');
		// }
		this.props.sendRoutes&&this.props.sendRoutes(this.props);
	}
	componentWillReceiveProps(props){
		// alert("loading data");
		// alert(JSON.stringify(props));
		if(props.searchedVenueList){
			// console.log(props);
			if(props.searchedVenueList.length>0){
				// this.props.history.push('/searchList');
				this.state.myhistoryprops.history.push('/searchList',{datalist:props.searchedVenueList,venuecategory:props.venuecategory});
			}
		}
	}
	loadProps=(props)=>{
		this.setState({myhistoryprops:props})
		this.props.sendRoutes(props);
	}
	receiveSearchDetails=(data,propshistory,data1)=>{	
		propshistory.history.push('/searchList',{datalist:data,category:data1});
	}
	render() {
		return (  
			<div>

                 {/* <Route path="/"  exact  render={(props) => <MobileHome receiveProps={(props)=>this.loadProps(props)} refresHeader={()=>this.props.refresHeader&&this.props.refresHeader()} {...props} sendSearchedDetails={(data,propshistory,data1)=>this.receiveSearchDetails(data,propshistory,data1)}/>} /> */}
  
                   <Route path="/" exact render={(props) => <Home {...props} receiveProps={(props)=>this.loadProps(props)} />}  />  
				   {/* <Defaultheader /> */}
				  <Route path="/veneulist"  exact render={(props) => <MobileVenueList {...props} receiveProps={(props)=>this.loadProps(props)} />} /> 
				  <Route path="/homeslidermob"  exact render={(props) => <Homeslidercontent {...props} receiveProps={(props)=>this.loadProps(props)} />} />
				  <Route path="/referearn"   render={(props) => <ReferEarn {...props} receiveProps={(props)=>this.loadProps(props)} />} />
				  <Route path="/dashboard"   render={(props) => <Dashboard {...props} receiveProps={(props)=>this.loadProps(props)} />} />
    			  <Route path="/myvenues" render={(props)=><MyVenues {...props} receiveProps={(props)=>this.loadProps(props)} />}/>
				  <Route path="/searchList" exact render={(props) => <MobSearchVenueList sendLoginData={this.props.sendLoginData&&this.props.sendLoginData} {...props} receiveProps={(props)=>this.loadProps(props)}/>} />
				  <Route path="/listmyvenue" exact render={(props) => <ListVenue {...props} receiveProps={(props)=>this.loadProps(props)}/>} />  

				  <Route path="/listmytraining" exact render={(props) => <ListTraining {...props} receiveProps={(props)=>this.loadProps(props)}/>} />  
				  <Route path="/corporateForm" exact render={(props) => <CorporateForm {...props} receiveProps={(props)=>this.loadProps(props)}/>} />
				  <Route path="/searchtrainer" exact render={(props) => <TrainerSearch {...props} receiveProps={(props) => this.loadProps(props)} />} />
				  <Route path="/morefiltertrainer" exact render={(props) => <MoreFilterPage /> } />
		          <Route path="/moredetailstrainer/:trainerId" exact render={(props) => <AddFavourite {...props} example="haha" /> } />
				  <Route path='/mycalendar'  render={(props)=><MyCalendarMobile receiveProps={(props)=>this.loadProps(props)} {...props} />} />
                  {/* <Route path="/login" component={LoginSignupModel} /> */}
				  <Route path="/searchvenue" exact component={venueSearch} />
				  <Route path="/searchvenuemob" exact component={MobSearchVenue} />

 
			</div>
		);
	}
}
export default Mobileroutes;