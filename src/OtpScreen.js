import React, { Component } from 'react';
import { Button, Card, FormGroup,CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import Apilink from './apilink';
import { Input} from 'antd';
class OtpScreen extends React.Component {
  constructor(props){
    super(props);
    console.log("setpasswordsignup",props);
    this.state={
      signupdata:props.signupdata,
      otp0:"",otp1:"",otp2:"",otp3:"",
    }
    this.otpRef1=React.createRef();
    this.otpRef2=React.createRef();
    this.otpRef3=React.createRef();
  }
  componentWillReceiveProps(props){
    console.log(props);
    if(props.signupdata){
      this.setState({signupdata:props.signupdata});
    }
  }

  componentDidMount() {
    console.log(this.textarea)
    // this.otp1.current.focus();
  }
  handleChange=(e,data)=>{
    var next=e.target.dataset.next;
    if(e.target.value.length == e.target.maxLength){
      this[next].current.focus();
    }
    // this.current.focus()
    this.setState({[e.target.name]:e.target.value})
    // this[data].current.focus();
  }
  
  handleSubmit=()=>{
    //var obj={type:'setpassword'};
    var signupdata=this.state.signupdata;
    // alert(JSON.stringify(signupdata));
    signupdata.user_password=this.state.password;

    signupdata.type='setpassword';
    var otpdata=this.state.otp0.toString()+this.state.otp1.toString()+this.state.otp2.toString()+this.state.otp3.toString();
    console.log("otp",otpdata);
    fetch(Apilink.apiurl+'check_otp', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'mobileNumber':this.state.signupdata.user_details_mobile,
        otp:otpdata

      }),
    }).then((response)=>response.json())
    .then((responseJson)=>{
      if(responseJson.status==0){

        console.log("responseJson",responseJson);
        this.props.loadpassword(signupdata);
    // alert("OTP send Successfully");
  }
  else{
    alert(responseJson.msg);
        }
     })
  }

  render(){
    return(
      <div>

      <ModalHeader className="modal-header-login "  cssModule={{'modal-title': 'w-100 text-center'}}>

      <div style={{display: 'inline-flex','align-items': 'center', 'justify-content': 'center',marginBottom:'3%'}}>

      </div>
      <div >
      <div className='clr_lblack headerstyle' style={{'font-size':'17px',marginTop:'1%'}}>Welcome</div>
      <div className='clr_orange headerstyle' style={{'font-size':'30px'}}>{this.state.signupdata.user_name+" "+this.state.signupdata.user_details_surname}</div>
      <h3 className="headerstyle" style={{color:'black'}}>Please Enter Your OTP</h3>
      </div>

      </ModalHeader>
      <ModalBody className="modal-body-login">

      <div>
      <Row>
      <Col xs="2"></Col>
      <Col xs="2" className="otp1">
      <FormGroup className="otphgt">
      <Input type="password"
      name="otp0"
      onChange={(e)=>this.handleChange(e,"otp1")}
      maxlength="1"
      className="otpcenter"
      data-next="otpRef1"
      /> </FormGroup>
      </Col>
      <Col xs="2" className="otp1">
      <FormGroup className="otphgt"> 
      <Input type="password"  name="otp1"

      maxlength="1"
      onChange={(e)=>this.handleChange(e,"otp2")}
      ref={this.otpRef1}
      className="otpcenter"
      data-next="otpRef2"
      /> </FormGroup>
      </Col>
      <Col xs="2" className="otp1">
      <FormGroup className="otphgt">
      <Input type="password" name="otp2"

      maxlength="1"

      onChange={(e)=>this.handleChange(e,"otp3")}
      ref={this.otpRef2}
      className="otpcenter "
      data-next="otpRef3"
      /> </FormGroup>
      </Col>
      <Col xs="2" className="otp1">
      <FormGroup className="otphgt">
      <Input type="password" name="otp3"

      maxlength="1"
      onChange={this.handleChange}
      ref={this.otpRef3} 
      className="otpcenter"
      data-next="otpRef3"
      /> </FormGroup>
      </Col>
      <Col xs="2"></Col>
      </Row></div>
      <Row style={{marginTop:'10%'}}>
      <div style={{width:'100%',display: 'flex',justifyContent: 'center'}}>
      <button type="button" class="btn btn-primary btn-lg mobverify" style={{backgroundColor:'#FF9008',width:'125px',textAlign:'center'}} onClick={this.handleSubmit}>VERIFY</button>
      </div>
      </Row>


      </ModalBody>
      
      </div>
      )
  }
}
export default OtpScreen 