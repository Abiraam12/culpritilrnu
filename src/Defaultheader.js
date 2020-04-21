import React, { Component } from 'react';
import './App.css';
import {Button, Container, Row, Col } from 'reactstrap';
// import { Input,Dropdown } from 'semantic-ui-react';
import { Select,Menu, Dropdown, Icon, message } from 'antd';
import TestProcess from './TestProcess';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,NavLink } from 'react-router-dom';
import  { Redirect } from 'react-router-dom'
import {useHistory } from 'react-router-dom';
import whatsapp from './images/whatsapp_png.png';
import mobilepng from './images/mobile_png.png';
import birthday from './images/birthdayImg1.png';
import LoginSignupModel from './components/LoginSignupModel/LoginSignupModel'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const Option = Select.Option;
const search=require("./icon/search.svg");
const arrow=require("./icon/arrow_icon.svg");
var loginkey ="";
function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
  <Menu.Item key="1"> I want to List My Venue<i class="fa fa-angle-right" aria-hidden="true"></i></Menu.Item>
  <Menu.Item key="2">I'm Looking for Venue <i class="fa fa-angle-right" aria-hidden="true"></i> </Menu.Item>
  </Menu>
  );


var logo=require("./icon/Header_logo.svg");
function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

class Defaultheader extends Component {

  constructor(props){
    
    super(props);
    this.state = {
      visible:false,
      userloggedin:false,
      dropdown:'',
      showlistvenue:false,
      dropdownOpen:false,
      LoginModelVisible:false,
      loginDetails:null
    }
    
  }

  listVenue = () => {
    this.setState({
      showlistvenue:true
    })
  }
  componentWillMount(){
    if(localStorage['userloggedin']=='yes'){
      this.setState({userloggedin:true})
    }else{

      this.setState({userloggedin:false})
    }

  }
  logout=()=>{
    localStorage.clear();
    window.location.assign(window.location.origin+window.location.pathname)
  }

  getDropdown = (event, value) => {
    
    console.log(value);
    if(localStorage['userloggedin']=='yes'){
      this.props.loadvenue();
      // this.props.loadTraining();
    }else{
      this.setState({visible:true});
      this.setState({dropdown:''});
    }

  }

  getTraining = (event, value) => {
    console.log("trainer props",event.target.value);
    
    if(localStorage['userloggedin']=='yes'){
      this.props.loadTraining();
     
      // this.props.loadsearchtrainer();
    }else{
      this.setState({visible:true});
      this.setState({dropdown:''});
    }

  }
  clospopup=()=>{

    this.setState({visible:false});
    loginkey='';
  }
  dropdownClick=(data)=>{
  
    this.setState({dropdown:this.state.dropdown==data?'':data});

  }
  closeData=()=>{

    this.setState({dropdown:''});
  }
  
  LogoutClick=()=>{
    window.localStorage.clear();
     window.location.assign(window.location.origin+window.location.pathname);
 }

  searchTrainer = (event,value) => {
    
    console.log("props",event.target.value)
   if(localStorage['userloggedin'] == 'yes'){
       return <Redirect push to="/searctrainer" />
   }
   else{
     this.setState({visible:true})
     this.setState({dropdown:''})
   }
  }

  toggle=()=>{
    this.setState({dropdownOpen:!this.state.dropdownOpen});
  } 

//   LoginClick=(menu)=>{
//     console.log("haahahs")
//    var loginkey='';
//    // console.log(this.props);
//    if(localStorage.getItem('LoginStatus') && localStorage.getItem('LoginData')){
//      if(menu && menu!='addyourvenue'){

//      this.setState({drawervisible:true});
//    }else{
//      this.props.alreadyLogged();
//      window.localStorage['pathname']='/listmyvenue';
//      this.props.history.push('/listmyvenue')
//    }
//    }else{
//      // alert("true");
//      window.localStorage['pathname']='/listmyvenue';
//      if(menu=='addyourvenue'){
//        // alert('addvenue');
//        loginkey='addvenue';
//        this.setState({LoginModelVisible:true});
//      // this.props.history.push('/addIndividualform')
//    }else{
//      // loginkey='';
//        this.setState({LoginModelVisible:true});
//      // this.props.history.push('/');
//    }
//      // this.props.LoginPopup(true);
//    }
//  }


//  LoginClick = () => {
//    alert("hahahaha")
//    this.setState({
//     LoginModelVisible:true
//    }) 
//  }

// LoginClick=(menu)=>{
//   alert("hahahaha")
//    loginkey='';
//   console.log("login process",this.props);
//   if(localStorage.getItem('LoginStatus') && localStorage.getItem('LoginData')){
//     if(menu && menu!='addyourvenue'){

//     this.setState({drawervisible:true});
//   }else{
//     this.props.alreadyLogged();
//     window.localStorage['pathname']='/addIndividualform/';
//     this.props.history.push('/addIndividualform')
//   }
//   }else{
//     // alert("true");
//     window.localStorage['pathname']='/addIndividualform/';
//     if(menu=='addyourvenue'){
//       // alert('addvenue');
//       loginkey='addvenue';
//       this.setState({LoginModelVisible:true});
//     // this.props.history.push('/addIndividualform')
//   }else{
//     // loginkey='';
//       this.setState({LoginModelVisible:true});
//     // this.props.history.push('/');
//   }
//     // this.props.LoginPopup(true);
//   }
// }

 loadLoginData=(data)=>{
  alert(JSON.stringify(data))
  this.setState({LoginModelVisible:false});
  if(loginkey=='addvenue'){
    this.props.history.push('/listmyvenue')
  this.props.sendLoginData&&this.props.sendLoginData(data)
  }
}
  
componentWillReceiveProps(props){
  // alert('');
		// alert(JSON.stringify(props.requestLocation));
		if(props.requestLocation){
			this.getCurrentPosition();
		}
		if(props.loginDetails){
			this.setState({loginDetails:props.loginDetails});
		}
  }
  
  componentDidMount(){
    console.log("this my props",this.props.mobroutes)
    var myinterval = setInterval(()=>{
         if(localStorage.getItem('LoginStatus') && localStorage.getItem('LoginData')){
         var LoginData=JSON.parse(localStorage.getItem('LoginData'));
         // console.log(LoginData)
         this.setState({loginDetails:LoginData})
         clearInterval(myinterval);
         }
     },4000)
   }

  render() {
    // console.log("propsssssss",this.props)
    // alert(this.state.dropdown )
    return (
      <div className="stickydiv">

      <div className="fis-div">
      <div style={{display:'flex',height:'100%'}}>
      <div className="firstdivinner">

      <div className="logo_style">
      <img src={logo} className="App-logo" alt="logo" />
      </div>
      
      {/* <Select
          className=""
          className="selectboxheader"
          placeholder="Select City"
          optionFilterProp="children"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          defaultValue="New York"
          suffixIcon={ <img src={arrow} className="arrowcls"/> }
    //filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    >
    <Option value="New York">New York</Option>
    <Option value="USA">California</Option>
    </Select> */}
    </div>
    <div style={{justifyContent:'flex-end',display:'flex',paddingRight:12,width:'70%'}}>

    {/* <div class="ui icon input" style={{border: "none"}}>
    <img src={search} alt="Search"/>
    </div>  */}
    </div>

    

    {/* Add Your Venue */}
    <div className="part2">
			{this.props.mobile&&
				<div className="Add-Your-Venue" ><Link to="/veneulist">Add Your <span style={{color:'#A60202'}} className="text-style-1">Venue</span></Link></div>
			}
			{/* {!this.props.mobile&&
        <div>
        <div className="socialheadericons"><span>Need Support ?</span><span><img src={whatsapp}/><small> +91 98840 42119</small></span><span><img src={mobilepng}/><small className="marginleft">+91 95900 20684</small></span></div>
       
        </div>
			} */}
      <div className="LogoutHeader">
      {window.localStorage['LoginData']&&
       <ButtonDropdown className="logoutDropdownBtn" isOpen={this.state.dropdownOpen} toggle={()=>this.toggle()}>
      <DropdownToggle >
        <img src={birthday} className="imageDropdown"/>
      <p>{this.state.loginDetails&&this.state.loginDetails.user_name}</p>
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem><Link to="/
        " onClick={()=>this.props.clearToHome("")}>Home</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem><Link to="/myvenues" onClick={()=>this.props.switchRoute('myvenues')}>My Venues</Link></DropdownItem>
        <DropdownItem divider />
        <DropdownItem><Link to="/mycalendar" onClick={()=>this.props.switchRoute('mycalendar')}>My Calendar</Link></DropdownItem>
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
			</div>
      </div>

    <div className="sec-div">
    <Row style={{'align-items': 'center',
    display: 'flex',height:'100%'
  }}> 

  <div style={{margin:0,color:'white',
  fontSize: '18px',opacity:'.8',paddingRight:'17px'}} className="lookingfor">I am looking for</div>
  <div style={{position:'relative',display:'flex',height:'100%',justifyContent:'center',alignItems:'center'}} className="lrunutype">
  <div style={{height:'100%',alignItems:'center',justifyContent:'center',display:'flex',position:'relative'}}>
    
    <Button onClick={()=>this.dropdownClick('')} className="trainerdrop" style={{ marginLeft: 8 }}>
    Course <i class="fa fa-angle-down" style={{fontSize:'13px'}} aria-hidden="true"></i>
    </Button>
</div>


{/* Trainer DropDown */}
  <div style={{height:'100%',alignItems:'center',justifyContent:'center',display:'flex',position:'relative'}}>
    {this.state.dropdown=='key2'&&
     <div class="triangle"></div>
    }
    <Button onClick={()=>this.dropdownClick('key2')} className="trainerdrop" style={{ marginLeft: 8 }}>
    Trainer <i class="fa fa-angle-down" style={{fontSize:'13px'}} aria-hidden="true"></i>
    </Button>
</div>

    {this.state.dropdown =='key2' &&
      <div class="menu_content" >
      <ul class="menu_content_list">
        <NavLink to="/listmytraining" class="menu_content_align" >I want to Join as a Trainer </NavLink>
      <hr className="hrclass"/>
      <NavLink to="/searchtrainer">I'm Looking for a Trainer  </NavLink>
      </ul> 
      </div>
  }
    



{/* Venue DropDown */}

<div style={{height:'100%',alignItems:'center',justifyContent:'center',display:'flex',position:'relative'}}>
{this.state.dropdown=='key3'&&
<div class="triangle"></div>
}
<Button onClick={()=>this.dropdownClick('key3')} className="venuedrop" style={{ marginLeft: 8 }}>
Venue <i class="fa fa-angle-down" style={{fontSize:'13px'}} aria-hidden="true"></i>
</Button>
</div>

  {this.state.dropdown=='key3'&&
  <div class="menu_content" >
  <ul class="menu_content_list"><NavLink to="/listmyvenue" class="menu_content_align" >I want to List my Venue </NavLink>
  <hr className="hrclass"/>
  <NavLink to="/searchvenue" class="menu_content_align">I'm Looking for Venue</NavLink>
  </ul>
  </div>
  }
  
  

</div>

{/* <div className='logoutBtn'>
  {this.state.userloggedin==true&& 
    <Button className='venuedrop' onClick={this.logout}>Logout</Button>
  }
</div> */}

</Row>
</div>
  {this.state.visible == true && 
    <TestProcess className="tabprocess" visible={this.state.visible} clospopup={this.clospopup} type='login' />
  }
   
   {this.state.LoginModelVisible==true&&
				<LoginSignupModel   videomodalPopup={false} visible={true} clospopup={()=>this.clospopup()} type='login' loginttype="List Your Venue"  LoginLoad={(data)=>this.loadLoginData(data)} />
      }       
</div>

);

  }
}

export default Defaultheader;


