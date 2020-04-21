import React from 'react';
import moment from 'moment';
import Subheader from '../../components/subheader/subheader'
import Popupbox from '../../components/popupbox/popupbox';
// import BreadCrump from '../../components/breadcrump/breadcrump';
import LookingFor from '../../components/LookingFor/LookingFor';
// import Corporate_near_you from '../../components/Corporate_near_you/Corporate_near_you';
import Carousel from '../../components/carousel/carousel';
import OvalButton from '../oval_button/oval_button'
import Homeslider from '../../components/homeslider/homeslider'
// import Searchvenue from '../../components/SearchVenue/searchvenue';
import Circle from '../../components/circle/circle';
import Nextarrow from '../../components/nextarrow/nextarrow';
import Morefilter from '../../components/morefilter/morefilter';
import NearByPlayGround from '../../components/nearByPlayGround/nearByPlayGround';
import Footer from '../../pages/footer/footer';
import SoccerGround from '../soccer_ground/soccerGround';
import LearnVideos from '../../LearnVideos';
// import Btnclick from '../../components/btn-click/btn-click';
// import Modalview from '../../components/modal/modal';
import Apilink from '../../helpers/apilink';
import LoginSignupModel from '../../components/LoginSignupModel/LoginSignupModel';
import trainercss from  './TrainerSearch.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import {notification} from 'antd';
import TrainerDatePicker from './TrainerDatePicker'
import Corporate_near_you from '../../components/Corporate_near_you/Corporate_near_you'
import '../../components/header/header.css';
import birthday from '../../images/birthdayImg1.png';
import search from '../../images/Search.png';
import menu from '../../images/menu.png';
import SearchboxCorner from '../searchpopupbox/searchpopupbox';
import Search_venue from '../search_venue/search_venue';
import { BrowserRouter as Router, Route, Link,withRouter } from "react-router-dom";
import { Select,Menu, Dropdown, Icon, message,Drawer } from 'antd';
import { Input } from 'antd';
import whatsapp from '../../images/whatsapp_png.png'
import mobilepng from '../../images/mobile_png.png'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaAngleDown } from 'react-icons/fa';
import logo from '../../icon/Header_logo.svg';
import { Checkbox } from 'antd';
import MoreFilterComp from '../../components/morefiltercomp/MoreFilterComp'



var playarray={value:'id',name:'name',dropdown:[{id:1,name:'play'},{id:2,name:'work'},{id:3,name:'enjoy'}]}

const now = moment()
console.log("checking",now);



export default class TrainerSearch extends React.Component {
  


  constructor(props) {
    super(props);
    console.log('Apilink.apiurl',Apilink.apiurl);
    console.log("propsss",this.props)
    
    this.state={chosenlocation:{latitude:0,longitude:0},TOS:0,nearbyCategory:null,scroll:false,searchedVenue:null,currentLatLng:{
        latitude:0,
        longitude:0
    },address:'',OvalButtonArray:[],activeid:1,visible:false,doDropdown:{id:'venue_act_id',name:'venue_act_name',dropdown:[]},whatDropdown:{id:'venue_purpose_id',name:'venue_purpose_name',dropdown:[]},whereDropdown:{id:'venue_cat_id',name:'venue_cat_name',dropdown:[]},dovalue:'',whatvalue:'',wherevalue:'',searchdata:'',focused: false,
    createdAt: moment(),
    needarray:{value:'id',name:'name',dropdown:[{id:1,name:'Software Trainer'},{id:2,name:'Soft Skill Trainer'},{id:3,name:'Software Sr Trainer'},{id:4,name:"Softskill SME"}]},
    wherearray:{value:'id',name:'name',dropdown:[{id:1,name:"Type Location"},{id:2,name:"HSR Layout",},{id:3,name:"BTM Layout"},{id:4,name:"Wilson Garden"},{id:5,name:"Near Me"},{id:5,name:"My Favorite"}]},
   
}
  }
  
  circleChange=(data)=>{
    this.setState({activeid:data})
  }

   

   clickme= () => {
     
     this.setState({
       showDatePicker:true
     })
   }
  arrowClick=()=>{
     // if(!this.state.wherevalue){
     //    return;
     // }
      var userid=null;
     if(localStorage.getItem('LoginStatus') && localStorage.getItem('LoginData')){
        var LoginData=JSON.parse(localStorage.getItem('LoginData'));
        userid=LoginData.user_id;
      }
     this.setState({searchedVenue:null})
  fetch(Apilink.apiurl+'dropdownSearchpurpose', {
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({'venue_act_id':this.state.dovalue?this.state.dovalue.venue_act_id:null,'venue_purpose_id':this.state.whatvalue?this.state.whatvalue.venue_purpose_id:null,'venue_cat_id':this.state.wherevalue?this.state.wherevalue.venue_cat_id:null,'TOS':this.state.TOS,searchCategory:2,userId:userid,lat:this.state.chosenlocation.latitude,long:this.state.chosenlocation.longitude}),
    }).then((response)=>response.json())
    .then((responseJson)=>{
      this.props.clearScroll(true);
      // console.log(responseJson);
      // this.setState({searchdata:responseJson});
      //   this.setState({scroll:true});
      console.log(responseJson);
      if(responseJson.status&&responseJson.status==1){
           notification.error({
           message:'Error Message',
          description:"Options are empty to search...",
          onClick:() => {
            console.log('Notification Clicked!');
          },
  })
      }else{
        if(responseJson.length==0){
           notification.error({
           message:'Error Message',
           description:"No Records Found",
            onClick:() => {
             console.log('Notification Clicked!');
       },
  })
        }else{
     this.setState({searchdata:responseJson});
        this.setState({scroll:null});
      this.loadOvalCount();
        }
      }
      // this.loadOvalCount();
      // console.log("arrowsearch",responseJson.data.length==0);
  //     if(responseJson.data.length==0){
  //         notification.error({
  //          message:'Error Message',
  //   description:"No Results Found",
  //   onClick:() => {
  //     console.log('Notification Clicked!');
  //   },
  // })
  //         return;
  //     }
  //     this.props.sendsearchdata(responseJson.data);

    })  
    //this.props.receivesearch(data);
    //this.setState({visible:true})
  }
  
  clospopup=()=>{
    this.setState({visible:false})
  }

  loaddo(){
    fetch(Apilink.apiurl+'do', {
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(),
    }).then((response)=>response.json())
    .then((responseJson)=>{
        var doDropdown=this.state.doDropdown;
        doDropdown.dropdown=responseJson.data;
        this.setState({doDropdown})
        console.log("do",this.state.doDropdown);

    })  
  }
  
  loadwhat(data){
    // console.log("whatpurpose",data);
    fetch(Apilink.apiurl+'whatpurpose', {
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({'venue_act_id':data}),
    }).then((response)=>response.json())
    .then((responseJson)=>{
    console.log("what",this.state.whatDropdown);
    var whatDropdown=this.state.whatDropdown;
    whatDropdown.dropdown=responseJson.data;  
    this.setState({whatDropdown})
    })  
  }
  loadwhere(data,data1){
    console.log("where_id",data+"-"+data1);
    fetch(Apilink.apiurl+'wherecategory', {
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify({'venue_act_id':data1,'venue_purpose_id':data}),
    }).then((response)=>response.json())
    .then((responseJson)=>{
    var whereDropdown=this.state.whereDropdown;
    whereDropdown.dropdown=responseJson.data;
    this.setState({whereDropdown})
    console.log("where",responseJson);

    })  
  }

  componentWillMount(){
    this.loaddo();
    this.loadOvalCount();

  
  }
  // componentWillReceiveProps(props){
  //     if(props.searchedVenue){
  //   this.setState({scroll:props.scroll})
  //        this.setState({searchdata:null});
  //       this.setState({searchedVenue:props.searchedVenue})
  //       this.loadOvalCount();
  //     }else{
  //       this.setState({scroll:props.scroll})
  //     }
  // }

  LoginLoad(){
    // alert("")
  }
  loadOvalCount(){
    fetch(Apilink.apiurl+'getCount', {
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(),
    }).then((response)=>response.json())
    .then((responseJson)=>{
      console.log("responseJson",responseJson.data);
      this.setState({OvalButtonArray:responseJson.data})
    })  
  } 
  receivedodrop=(data,key)=>{
    
    this.setState({searchdata:null});
    this.setState({searchedVenue:null});
    console.log("dovalue",data);
    this.setState({[key]:data});
// alert(data);
        if(key=='dovalue'){
            this.setState({whatvalue:null,wherevalue:null,TOS:1})
            // this.loadwhat(data.venue_act_id); 
            this.setState({ needarray:data.name})
        }else if(key=='whatvalue'){
            this.setState({wherevalue:null,TOS:2})
            this.loadwhere(data.venue_purpose_id,this.state.dovalue.venue_act_id);
        }else if(key=='wherevalue'){
            this.setState({TOS:3})
        }
  }

        onDateChange = (createdAt) => {
            if (createdAt){
            this.setState(() => ({ createdAt }))
            }  
        }

        onFocusChange = ({ focused }) => {
            this.setState({ focused })
        }

    logout=()=>{
    window.localStorage.clear();
    window.location.assign(window.location.origin+window.location.pathname);
  }

  toggle = () => {
    this.setState({
      collapseState:!this.state.collapseState
    })
  }
  render() {
    console.log(this.state);
    // alert(JSON.stringify(this.state));
    
    return (
      <div className="HomePageDiv">
        {window.innerWidth < 768 && 
            
        <div className="trainer-title">
          <h3 className="trainer-title__text">Search your Trainer</h3>
          
        </div>
  }
        			<div className="in-header searchboxCornerHeader">
			<div className="part1">
				{this.props.mobile&&
				<div className="logo-div" onClick={this.props.ClearData&&this.props.ClearData}><img src={logo} className="pic"/>

        </div>
				}
				{!this.props.mobile&&
          <>
				<Link to="" onClick={()=>this.props.clearToHome("")} className="logo-div"><img src={logo} className="pic"/>
       
         </Link>
           {this.props.children}
           </>
				}
			<div className="drop-div"><div className={`userDivName ${!this.state.loginDetails?'mobhideuser':''}`}><span>Welcome </span>{this.state.loginDetails&&this.state.loginDetails.user_name}</div>
           {this.props.mobile&&this.props.children}
  
      </div>
			</div>
      
			<div className="part2">
			{this.props.mobile&&
				<div className="Add-Your-Venue" ><Link to="/veneulist">Add Your <span style={{color:'#A60202'}} className="text-style-1">Venue</span></Link></div>
			}
			{!this.props.mobile&&
        <div>
        {/* <div className="socialheadericons"><span>Need Support ?</span><span><img src={whatsapp}/><small> +91 98840 42119</small></span><span><img src={mobilepng}/><small className="marginleft">+91 95900 20684</small></span></div> */}

        </div>
			}
      <div className="LogoutHeader">
      {window.localStorage['LoginData']&&
       <ButtonDropdown className="logoutDropdownBtn" isOpen={this.state.dropdownOpen} toggle={()=>this.toggle()}>
      <DropdownToggle >
        <img src={birthday} className="imageDropdown"/>
      <p>{this.state.loginDetails&&this.state.loginDetails.user_name}</p>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem ><Link to="" onClick={()=>this.props.clearToHome("")}>Home</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem ><Link to="/myvenues" onClick={()=>this.props.switchRoute('myvenues')}>My Venues</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem ><Link to="/mycalendar" onClick={()=>this.props.switchRoute('mycalendar')}>My Calendar</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem  onClick={()=>this.LogoutClick()}><a>Logout</a></DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
    }
    {!window.localStorage['LoginData']&&
        <a onClick={()=>this.LoginClick()} className={`${this.props.moredetails?'moredetailspage':null}`}>
      Login
      </a>
    }
      
      </div>
			<div className={`icon-div ${this.props.moredetails?'moredetailspage':null}`}>
      {/*
			<div className="search-div" style={{cursor:'pointer'}}><img className="search-lence" onClick={(e)=>this.searchBox(e)} src={search}/></div>*/}
			<div className="menu-div" onClick={()=>this.setState({drawervisible:true})} > <img  className="menu-icon" src={menu}/> </div>

			</div>
			</div>
			{this.state.visible&&
			<SearchboxCorner top={this.state.top}>
			<Search_venue cancelsearch={()=>this.setState({visible:false})} searchedData={(data)=>this.changeSearchedData(data)}/>
			</SearchboxCorner>
		}
			</div>
    
{/*<Header LoginPopup={(data)=>{this.setState({LoginModelVisible:data})}} alreadyLogged={()=>{this.props.LoginLoad()}}>
 <Popupbox buttonText="Newyork"  dropdown={playarray}  buttonColor={'transparent'} buttonTextColor={'black'} popupColor={'white'} popupTextColor={'black'}/>
</Header>*/}
    <Subheader bgcolor={"#103eb0!"}>
      <div className="home_droddownflex">
    <span className="heading_search">I need</span>
    <div className="home_dropdownflexItem">
      <Popupbox buttonText={this.state.dovalue?this.state.dovalue.venue_act_name:'need'} sendPopupData={(data)=>this.receivedodrop(data,'dovalue')} dropdown={this.state.needarray} buttonColor={'#fff'} buttonTextColor={'#000'} popupColor={'white'} popupTextColor={'black'} />
    </div>
      <span className="heading_search">in</span>
    <div className="home_dropdownflexItem">
        <Popupbox buttonText={this.state.whatvalue?this.state.whatvalue.venue_purpose_name:'Where'}  sendPopupData={(data)=>this.receivedodrop(data,'whatvalue')} dropdown={this.state.wherearray} buttonColor={'#fff'} buttonTextColor={'#000'} popupColor={'white'} popupTextColor={'black'} />
    </div>
    <span className="heading_search">on</span>
    <div>
        {/* <Popupbox buttonText={this.state.wherevalue?this.state.wherevalue.venue_cat_name:'When'} width={200}  buttonColor={'#fff'} sendPopupData={(data)=>this.receivedodrop(data,'wherevalue')} buttonTextColor={'#000'} popupColor={'white'} popupTextColor={'black'}  /> */}
     <div className="__datepicker">
              <TrainerDatePicker  />
    </div>
    
        
 
        
       
    </div>

  
{/*<Nextarrow nextArrowFunc={this.arrowClick}/>*/}
    <Nextarrow nextSearchFunc={this.arrowClick}/>
</div>
 {/*{window.localStorage['LoginData']&&
      <div class="logoutBtn"><button type="button" class="venuedrop btn btn-secondary" onClick={()=>this.logout()}>Logout</button></div>
    }*/}
</Subheader>

<Carousel height={600}/>
        {this.state.OvalButtonArray.map((item)=>
        <Subheader bgcolor={"#0f3eb0"}>
        <div className="home_drodd  ownflex mobile-view_hidden">
            <OvalButton count={item.venueCount} text={"Venues"}/>
            <OvalButton count={item.searchCount} text={"Searches"}/>
            <OvalButton count={item.userCount} text={"Members"}/>
        </div>
        </Subheader>
        
        )}

<LookingFor recieveCategory={(data)=>this.setState({nearbyCategory:data})}/>

      <NearByPlayGround   refresHeader={()=>this.props.refresHeader&&this.props.refresHeader()}  addvenueProps={(data)=>this.props.addvenueProps(data)} nearbyCategory={this.state.nearbyCategory} />
              {this.state.searchdata&&
                  <Homeslider history={this.props.history}  refresHeader={()=>this.props.refresHeader&&this.props.refresHeader()} addvenueProps={(data)=>this.props.addvenueProps(data)} scroll={this.state.scroll} displaySlider={this.state.searchdata}/>
              }


              {this.state.searchedVenue&&this.state.searchedVenue.length>0 &&
                 <SoccerGround history={this.props.history} addvenueProps={(data)=>this.props.addvenueProps(data)} refresHeader={()=>this.props.refresHeader&&this.props.refresHeader()} searchedVenue={this.state.searchedVenue} scroll={this.state.scroll}  categoryName={this.props.categoryName}/>
              }

<Corporate_near_you history={this.props.history}   addvenueProps={(data)=>this.props.addvenueProps(data)}/>

  <LearnVideos />
  
  {/* <Footer/> */}

    {this.state.visible == true && 
      <div>
      <LoginSignupModel loginttype={"List Your Venue"} visible={this.state.visible} clospopup={this.clospopup} type='login'  LoginLoad={()=>{this.props.LoginLoad();this.setState({visible:false})}}/>
    {/*<LoginSignupModel visible={true} clospopup={this.clospopup} type='sharepage' />*/}
    </div>
    }

      </div>
    );
  }
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(position => {
    this.setState({chosenlocation:position.coords})
  })
  }
}
