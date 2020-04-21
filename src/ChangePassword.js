import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
class ChangePassword extends React.Component {
  constructor(props){
    super(props);
    console.log("setpasswordsignup",props);
    this.state={
      signupdata:props.signupdata,
      password:'',
      cpassword:''
    }
  }
  componentWillReceiveProps(props){
    console.log(props);
    if(props.signupdata){
      this.setState({signupdata:props.signupdata});
    }
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  handleSubmit=()=>{
    var obj={type:'disclaimer'};
    var passwordPTN=  /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,20}$/;
    if(this.props.loaddisclaimer){
      if(!this.state.password.match(passwordPTN)){
        alert("Please follow the Password Specifications given below")
      }
      else if(this.state.password=="" || this.state.cpassword==""){
        alert("Password cannot be Empty");
      }else if(this.state.password===this.state.cpassword){
        var signupdata=this.state.signupdata;
        signupdata.user_password=this.state.password;
        signupdata.type='disclaimer';
        this.props.loaddisclaimer(signupdata);
      }else{
        alert("Password doesnot Match");
      }
    // this.props.loaddisclaimer(obj);
  }
}

render(){
  return(
    <div>

    <ModalHeader className="modal-header-login"  cssModule={{'modal-title': 'w-100 text-center'}}>

    <div style={{display: 'inline-flex','align-items': 'center', 'justify-content': 'center',marginBottom:'3%'}}>
    <div id="circle">
    <div id="circle2">
    <img src={require('./icon/Michael.svg')} class="profile_img" />
    </div>
    </div>
    </div>
    <div >
    <div className='clr_lblack smallheaderstyle' style={{'font-size':'12px',marginTop:'1%'}}>Welcome</div>
    <div className='clr_orange headerstyle' style={{'font-size':'30px'}}>{this.state.signupdata?this.state.signupdata.user_name:''+" "+this.state.signupdata?this.state.signupdata.user_details_surname:''}</div>
    <div className="subheaderstyle" style={{'font-size':'15px',marginTop:'1%',fontWeight:'normal'}}>Venue Provider</div>
    </div>

    </ModalHeader>
    <ModalBody className="modal-body-login">

    <form>

    <div class="form-group change_modal_pass">
    <input type="password" value={this.state.password} name="password" onChange={this.handleChange} class="form-control " placeholder="Enter Password"/>
    </div>

    <div class="form-group change_modal_pass">
    <input type="password" value={this.state.cpassword} name="cpassword" onChange={this.handleChange} class="form-control" placeholder="Re-enter Password"/>
    </div>
    </form>
    <Row style={{marginTop:'10%'}} className="mobremovemargin">
    <div style={{width:'100%',display: 'flex',justifyContent: 'flex-end'}}>
    <button type="button" class="btn btn-primary btn-lg mobverify" style={{backgroundColor:'#FF9008',width:'125px',textAlign:'center'}} onClick={this.handleSubmit}>CONFIRM</button>
    </div>
    </Row>


    </ModalBody>
    <div class="mdlfooter2">
    <div style={{width:'80%',marginLeft:'13%'}} className="passwordSpecmain">
    <div style={{'margin-top':'2%'}}>
    <div style={{'font-size':'20px',color:'black'}} className="passwordSpec1">Password Specifications</div>
    <div style={{'margin':'10px 0px',color:'#948d8ddb'}} className="passwordSpec2">Password Should have Alphabet, Number, Special Characters</div>
    <div style={{color:'#948d8ddb'}} className="passwordSpec3">Other Specification here</div>
    </div>
    </div>
    </div>
    </div>
    )
  }
}
export default ChangePassword;