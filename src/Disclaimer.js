import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { Input} from 'antd';
import Apilink from './apilink';
export default class Discliamer extends React.Component{
  constructor(props){
    super(props);
    console.log(props);
    this.state={checked:false,signupdata:props.signupdata}
  }
  componentWillReceiveProps(props){
    console.log(props);
    if(props.signupdata){
    this.setState({signupdata:props.signupdata})
    }
  }
  saveData=(data) =>{
    // console.log(data);
//     fetch(Apilink.apiurl+'Signup_details/', {
//      method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// }).then((response)=>response.json())
//    .then((responseJson)=>{
// // Actions.verify({loginobj});
// if(responseJson.status==0){

// alert("User Added Successfully");
// this.props.closemodal();
// }else{
//   alert("Error in Response");
// }
//    })
  }
  handleDisclaimer=()=>{
    if(this.state.checked==false){
      alert("Please agree to start to Add Venue");
    }else{
      var signupdata=this.state.signupdata;
      signupdata['user_details_tc']=this.state.checked==true?1:0;
      var obj={type:'sharepage'};
      // this.saveData(signupdata);
    //   // alert(obj);
      signupdata.type='sharepage';
    this.props.loadsharepage(signupdata);

    }
  }

  disclaimerChange=(e)=>{
    this.setState({checked:!this.state.checked});
  }
  render(){
    return(

      <div  className="disclaimer">
      <ModalHeader toggle={this.toggle} style={{'padding-left':'30px','padding-right':'30px','borderBottomWidth': '0'}}>

      <div >
      <div className='clr_orange headerstyle' style={{'font-size':'30px'}}>Disclaimer</div>
      <div style={{'font-size':'15px'}}><span className='clr_lblack paraheaderstyle' style={{fontWeight:'normal'}}>Welcome</span> <span style={{fontWeight:'normal'}} className='clr_orange paraheaderstyle'>{this.state.signupdata.user_name+" "+this.state.signupdata.user_details_surname+","}</span></div>
      </div>

      </ModalHeader>
      <ModalBody className="disclaimer-content" style={{'padding-left':'30px','padding-right':'30px'}}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

      <Row>

        <Col> 
        <div>       
        <input id="checkbox-1"  checked={this.state.isChecked} onChange={this.disclaimerChange}  class="checkbox-custom" name="checkbox-1" type="checkbox"/>
        <label for="checkbox-1" class="checkbox-custom-label">I Agree</label>
      </div>
      </Col>

        <div>
           <div style={{display:'block',textAlign:'right'}}> 
         <button onClick={this.handleDisclaimer} type="button" class="btn btn-primary mobverify" style={{'background':'#FF9008',color:'white',width: '166px',}}>START TO ADD VENUE</button>
         </div>
        </div>

      </Row>

      </ModalBody>
      </div>
      )
  }

}