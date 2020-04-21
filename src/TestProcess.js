import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import Login from './Login';
import Signup from './Signup';
import OtpScreen from './OtpScreen';
import ChangePassword from './ChangePassword';
import Disclaimer from './Disclaimer';
import SharePage from './SharePage';
import Apilink from './apilink';
class TestProcess extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      modal: props.visible,
      type:props.type,
      signupdata:null

    };

    this.toggle = this.toggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentWillReceiveProps(props){
    if(props.visible){
      this.setState({modal:props.visible});
      this.setState({type:props.type});
    }
  }
loadmodaltype=(data)=>{
  console.log(data);
    this.setState({type:data.type});
    this.setState({signupdata:data});
}
submitData=(data)=>{
// console.log("final_dat",data);
    fetch(Apilink.apiurl+'Signup_details/', {
      method: 'POST',
   headers: {
     Accept: 'application/json',
     'Content-Type': 'application/json',
   },
   body: JSON.stringify(data),
 }).then((response)=>response.json())
    .then((responseJson)=>{
// // Actions.verify({loginobj});
 if(responseJson.status==0){
  this.setState({ modal: false });
    this.props.clospopup();
 alert("User Added Successfully");
this.setState({ modal: false });
 }else{
   alert("Invalid Username or Password");
 }
    })
}
  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
   handleClose() {
    this.setState({ modal: false });
    this.props.clospopup();
  }
  render(){
  return(

     
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={`${this.props.centered?'flexend':''}`} centered={this.props.centered?false:true} backdrop="false">
      <div class="closeicon" ><i onClick={this.handleClose} class="icofont-close"></i></div>
      {this.state.type=='login'&&
      <Login loadsignup={this.loadmodaltype}/>
      }
      {this.state.type=='signup'&&
      <Signup loadotp={this.loadmodaltype}/>
      }

      {this.state.type=='otpscreen'&&
          <OtpScreen signupdata={this.state.signupdata} loadpassword={this.loadmodaltype}/>
      }

      {this.state.type=='setpassword'&&
          <ChangePassword signupdata={this.state.signupdata} loaddisclaimer={this.loadmodaltype}/>
      }

      {this.state.type=='disclaimer'&&
          <Disclaimer closemodal={this.handleClose} signupdata={this.state.signupdata} loadsharepage={this.loadmodaltype}/>
      }
      
      {this.state.type=='sharepage'&&
          <SharePage signupdata={this.state.signupdata} submitData={this.submitData}/>
      }

      </Modal>
     
  )
  }
}
export default TestProcess;