import React, { Component } from 'react';
import './App.css';
import './App.scss';
import 'antd/dist/antd.css'; 
import {Button, Container, Row, Col } from 'reactstrap';
import { Input, Dropdown } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Defaultheader from './Defaultheader';
import Undersider from './Undersider';
import Carousel from '../src/components/carousel/carousel';
import SlideFilter from './SlideFilter';
import ListVenue from './ListVenue';
import FooterCopyright from './FooterCopyright';
import LearnVideos from './LearnVideos';
import MostDemandSkills from './MostDemandSkills';
import SpecialOffers from './SpecialOffers';
import LearnSlider from './LearnSlider';
import StudyCenters from './StudyCenters';
import MostDemandLocation from './MostDemandLocation';
import Venues360 from './Venues360';
import VenueHeader from './VenueHeader';
import HomeSwiper from './components/reactidswiper';
import HomeSlider from './components/HomeSlider';
import Home from './pages/Home';
import VenuePage from './pages/VenuePage';
import VenueForm from './pages/VenueForm';
import FacilityDetails from './pages/FacilityDetails';
import DisplayTabDetails from './DisplayTabDetails';
import ListVenueHomeRouter from './ListVenueHomeRouter';
import LocationScreen from './LocationScreen';
import TrainingCategory from './components/TrainingCategory/TrainingCategory';
import { BrowserRouter, Link, Route,Switch  } from 'react-router-dom';
import TrainerSearch from './components/trainerSearch/TrainerSearch';
import Mobileroutes from './routes/Mobileroutes';
import ListTraining from './ListTraining';
import MoreFilterPage from './components/morefilterpage/MoreFilterPage'
import VenueRoutes from './routers/VenueRoutes'
import TrainingRoutes from './routers/TrainingRoutes';
import TrainerSearchRoutes from './routers/TrainerSearchRoutes';
import whatsapp from './images/whatsapp_png.png'
import mobilepng from './images/mobile_png.png'
import DropdownRoutes from './routers/DropdownRoutes';
import gpsicon from './images/gpsicon.png'
import Header from './components/Header';
import MyCalendar from './components/MyCalendar/MyCalendar';
import myvenues from './pages/MyVenues/myvenues';
import LoginSignupModel from './components/LoginSignupModel/LoginSignupModel';
import Searchvenue from './components/SearchVenue/searchvenue';
import venueSearch from './components/venueSearch/venueSearch';

const options = [
{ key: 'angular', text: 'Angular', value: 'angular' },
{ key: 'css', text: 'CSS', value: 'css' },
{ key: 'design', text: 'Graphic Design', value: 'design' },
{ key: 'ember', text: 'Ember', value: 'ember' }
]


class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      LoginModelVisible:false,
      userName:"",
      loginDetails:null,
      userType:null,
      requestLocation:false,
      popup_position:{top:0,left:0},open:null,
      searchedVenueList:null,
      screenWidth:window.innerWidth,
      address:null,
      latlng:{latitude:0,longitude:0},
      mobroutes:null,
      scroll:true,
      venuecategory:null,
      locationEnabled:false,
      lat:0,
      lng:0,
      contenttype:null,
      moredetails:null,
      showlistvenu:false,
      showlisttraining:false,
      showlisthome:true
    };
  }
  componentWillMount(){
    var checksession=localStorage['userloggedin'];
    if(checksession=='yes'){
      this.setState({showlistvenu:true});
      // this.setState({showlisttraining:true});
    }
  }
 loadvenue=()=>{
    this.setState({showlistvenu:true});
  }

  loadtraining=() => {
    this.setState({showlisttraining:true});
  }
  
  loadsearchtrainer=() => {
    this.setState({searchtrainer:true})
  }
  changeHome=(data)=>{
// alert("hiii");    
    this.setState({breadCrums:data});
    console.log("sdfsdfffffffffffffff",data)
  }
  LoginLoad =(data)=>{
    // alert(data);
    // alert('moredtails');
       if(localStorage.getItem('LoginStatus') && localStorage.getItem('LoginData')){
      var LoginData=JSON.parse(localStorage.getItem('LoginData'));
      console.log(LoginData)
      this.setState({loginDetails:LoginData,contenttype:null,moredetails:false})
      // window.location.reload();

      this.setState({userType:LoginData.user_cat_id,userName:LoginData.user_name +" "+ LoginData.user_surname,scroll:false})
    }else{
      // alert("not logged in .....")
      if(data=='addvenue'){
          // window.scrollTo({left:0,top:300, behavior:'smooth'});
      this.setState({LoginModelVisible:true});
    }else{
      this.setState({userType:1,moredetails:true},function(){
        // this.setState({userType:null});
      })
    }
    }
  }

  loadProps=(props)=>{
		this.setState({myhistoryprops:props})
		// this.props.sendRoutes(props);
  }

  receiveAddress=(data,latlng)=>{
    // alert(data);
    console.log(data);
    this.setState({address:data});
    this.setState({latlng:latlng});
  }
  
  render() {
    return (
      console.log("app",this.props),

      <div className="App">
      

        

   {this.state.screenWidth > 767 &&
   <div>
  
     <div>
    <BrowserRouter basename="/ilrnu/?">
  
                <Route exact path="/" render={(props) => <ListVenueHomeRouter {...props} someProp={this.changeHome}/>}  />
                <Route path="/addvenue" exact render={(props) => <DisplayTabDetails {...props} someProp={this.changeHome}/>} />
                <Route exact path="/listmyvenue" render={(props) => <ListVenue {...props} someProp={this.changeHome}/>} />
                <Route exact path="/listmytraining" render={(props) => <ListTraining {...props} someProp={this.changeHome}/>} />
                <Route exact path="/searchtrainer" component={TrainerSearch} />
                <Route exact path="/mycalendar" component={MyCalendar} />
                <Route exact path="/myvenues" component={myvenues} />
                <Route exact path="/searchvenue" component={venueSearch} />
  
    </BrowserRouter>
    </div> 
      
     
    </div>  
     

  }




      {this.state.screenWidth < 768 &&
        <BrowserRouter  basename="/?">
          <Header  requestLocation={this.state.requestLocation} ClearData={()=>this.ClearData()} clearLogin={()=>this.setState({loginDetails:null})} loginDetails={this.state.loginDetails} mobroutes={this.state.mobroutes} sendaddress={(data,latlng)=>this.receiveAddress(data,latlng)} mobile={true} homesearchedVenue={(data)=>this.searchedVenue(data)} LoginPopup={(data)=>{this.setState({LoginModelVisible:data})}} alreadyLogged={(data)=>this.LoginLoad(data)}>
                <div className="locationName">{this.state.address?this.state.address:''}</div>
          </Header>

      <Mobileroutes  sendLoginData={(data)=>this.setState({loginDetails:data})} sendRoutes={(data)=>{ console.log("propsincoming",data)}} searchedVenueList={this.state.searchedVenueList} venuecategory={this.state.venuecategory} mobroutes={this.state.mobroutes} />
      </BrowserRouter>
      }

    
     {/* {!this.state.showlistvenu&&
      <div className="sticky">
          <div className="webmodules">
              <Defaultheader loadvenue={this.loadvenue} />
                            <Carousel />
                            <Undersider />
                            <LearnSlider />
                            <StudyCenters />
                            <SpecialOffers />
                            <MostDemandSkills />
                            <LearnVideos/>
              </div>
       <div className="mobilemodules">
        <BrowserRouter basename="/ilrnu/?">
            <Route path = "/" exact component = {Home} />
            <Route path = "/venuepage" exact component = {VenuePage} />
            <Route path = "/venueForm" exact component = {VenueForm} />
       </BrowserRouter>
    </div>
    </div>
  } */}
   {/* <div className="webmodules">
      <FooterCopyright />
    </div> */}
  </div>
  
   
 
      );
      
  
     
  }
}

export default App;







