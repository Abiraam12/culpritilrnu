import React, { Component } from 'react';
import '../App.css';
import {Button, Container, Row, Col } from 'reactstrap';
// import { Input,Dropdown } from 'semantic-ui-react';
import { Select,Menu, Dropdown, Icon, message } from 'antd';
import TestProcess from '../TestProcess';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink,Link } from 'react-router-dom';
import  { Redirect } from 'react-router-dom'
import {useHistory } from 'react-router-dom';


const Option = Select.Option;

const search=require("../icon/search.svg");
const arrow=require("../icon/arrow_icon.svg");
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


var logo=require("../icon/Header_logo.svg");
function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

class HomeSubHeader extends Component {
  constructor(props){
    
    super(props);
    this.state = {
      visible:false,
      userloggedin:false,
      dropdown:''
    }
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
    alert("clicked")
    console.log(value);
    if(localStorage['userloggedin']=='yes'){
      this.props.loadvenue();
    }else{
      this.setState({visible:true});
      this.setState({dropdown:''});
    }

  }

  getTraining = (event, value) => {
    console.log("trainer props",event.target.value);
    alert("trainer clicked")
    if(localStorage['userloggedin']=='yes'){
      this.props.loadtrainer();
    }else{
      this.setState({visible:true});
      this.setState({dropdown:''});
    }

  }
  clospopup=()=>{
    this.setState({visible:false});
  }
  dropdownClick=(data)=>{
  
    this.setState({dropdown:this.state.dropdown==data?'':data});

  }
  closeData=()=>{

    this.setState({dropdown:''});
  }
 
  searchTrainer = (event,value) => {
    
    console.log("props",event.target.value)
   if(localStorage['userloggedin'] == 'yes'){
       return <Redirect to="/searchtrainer" />
   }
   else{
     this.setState({visible:true})
     this.setState({dropdown:''})
   }
  }

  
  render() {
    console.log("propsssssss",this.props)
    // alert(this.state.dropdown )
    return (
    //   <div className="stickydiv">

    //   <div className="fis-div">
    //   <div style={{display:'flex',height:'100%'}}>
    //   <div className="firstdivinner">

    //   <div className="logo_style">
    //   <img src={logo} className="App-logo" alt="logo" />
    //   </div>
      
    //   <Select
    //    className="stickydiv"
    //   className="selectboxheader"
    //   placeholder="Select City"
    //   optionFilterProp="children"
    //   onChange={handleChange}
    //   onFocus={handleFocus}
    //   onBlur={handleBlur}
    //   defaultValue="New York"
    //   suffixIcon={ <img src={arrow} className="arrowcls"/> }
    // //filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
    // >
    // <Option value="New York">New York</Option>
    // <Option value="USA">California</Option>
    // </Select>
    // </div>
    // <div style={{justifyContent:'flex-end',display:'flex',paddingRight:12,width:'100%'}}>

    // <div class="ui icon input" style={{border: "none"}}>
    // <img src={search} alt="Search"/>
    // </div>
    // </div>
    // </div>

    // </div>

    <div>
    <Row style={{'align-items': 'center',
    display: 'flex',height:'100%'
  }}> 

  <div style={{margin:0,color:'white',
  fontSize: '18px',opacity:'.8',paddingRight:'17px'}} className="lookingfor">I am looking for</div>
  <div style={{position:'relative',display:'flex',height:'100%',justifyContent:'center',alignItems:'center'}} className="lrunutype">
  <div style={{height:'100%',alignItems:'center',justifyContent:'center',display:'flex',position:'relative'}}>
    
    <Button onClick={()=>this.dropdownClick('')} className="venuedrop" style={{ marginLeft: 8 }}>
    Course <i class="fa fa-angle-down" style={{fontSize:'13px'}} aria-hidden="true"></i>
    </Button>
</div>


{/* Trainer DropDown */}
  <div style={{height:'100%',alignItems:'center',justifyContent:'center',display:'flex',position:'relative'}}>
    {this.state.dropdown=='key2'&&
     <div class="triangle"></div>
    }
    <Button onClick={()=>this.dropdownClick('key2')} className="venuedrop" style={{ marginLeft: 8 }}>
    Trainer <i class="fa fa-angle-down" style={{fontSize:'13px'}} aria-hidden="true"></i>
    </Button>
</div>

    {this.state.dropdown =='key2' &&
      <div class="menu_content" >
      <ul class="menu_content_list">
        <NavLink  to="/listmytraining" class="menu_content_align" >
          I want to Join as a Trainer
        </NavLink>
      <hr className="hrclass"/>
      <NavLink  to="/searchtrainer" class="menu_content_align"> I'm Looking for a Trainer  </NavLink>
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
  <ul class="menu_content_list"><NavLink  to="/listmyvenue" class="menu_content_align" >I want to List my Venue </NavLink>
  <hr className="hrclass"/>
  <NavLink  to="/searchvenue" class="menu_content_align">I'm Looking for Venue</NavLink>
  </ul>
  </div>
  }
  
  

</div>

<div className='logoutBtn'>
  {this.state.userloggedin==true&& 
    <Button className='venuedrop' onClick={this.logout}>Logout</Button>
  }
</div>

</Row>


   {this.state.visible == true && 
    <TestProcess className="tabprocess" visible={this.state.visible} clospopup={this.clospopup} type='login' />
  }
  </div>
 

);
  }
}

export default HomeSubHeader;
