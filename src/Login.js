import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { Input} from 'antd';
import Apilink from './apilink';
import FacebookLogin from './FacebookLogin.js';
class Login extends React.Component{
      constructor(props){
        super(props);
        this.state = {
      userName: '',
      type: 'password',
      isLoggedIn:false,
userID:'',
name:'',
email:'',
picture:''
    };
   }

  onChangeLogin = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  

facebooksignin=()=>{
  // facebooklogin.initializeFacebookLogin();
}
  handleSubmit =() =>{
if(this.props.loadsignup){
  var obj={type:'signup'};
  this.props.loadsignup(obj)
  }

  }
    enterPressed(event) {
    var code = event.keyCode || event.which;
    if(code === 13) { //13 is the enter keycode
       this.loginSubmit();
    }
  }
  onLogin=(data,result)=>{
    console.log(result);
    
  // console.log("obj",obj);
  // console.log('data',data);

    if(data==true){
      var obj={
    'user_category':1,
    'oauth_provider':'facebook',
    'name':result.user.name,
    'email':result.user.email,
    'picture':result.user.picture.data.url,
    'userID':result.user.id
  }
       fetch(Apilink.apiurl+'social_login', {
     method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(obj),
}).then((response)=>response.json())
   .then((responseJson)=>{
    console.log(responseJson);
// Actions.verify({loginobj});
if(responseJson.status==0){
localStorage['userloggedin']='yes';
window.location.reload();
}
   })
    }else{

    }
  }
  loginSubmit =() =>{
    fetch(Apilink.apiurl+'venue_login', {
     method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
'username':this.state.userName,
    'password':this.state.password,
    'user_category':1

  }),
}).then((response)=>response.json())
   .then((responseJson)=>{
// Actions.verify({loginobj});
if(responseJson.status==0){
  console.log(responseJson);
  localStorage['userloggedin']='yes';
  localStorage['userloggedindetails']=JSON.stringify(responseJson.data[0]);
// window.location.reload();
window.location.assign(window.location.origin+window.location.pathname)
}else{
  alert("Invalid Username or Password");
}
   })
  }
      render(){
        const { userName,password } = this.state;
  
            return(
                  <div>
      <ModalHeader className="modal-header-login"  cssModule={{'modal-title': 'w-100 text-center'}}>

      <div style={{display: 'inline-flex','align-items': 'center', 'justify-content': 'center',marginBottom:'3%'}}>
      <div id="circle">
      <div id="circle2"></div>
      </div>
      </div>
      <div>
      <div className='clr_orange headerstyle' style={{'font-size':'30px'}}>Login</div>
      <div className='subheaderstyle' style={{'font-size':'15px',marginTop:'1%',fontWeight:'normal'}}>As a Venue Provider</div>
      </div>

      </ModalHeader>
      <ModalBody className="modal-body-login">
      
      <form>

     
     
     <div class="form-group">
      <Input
        placeholder="Username"
        name="userName"
        value={userName}
        onChange={this.onChangeLogin}
        onKeyPress={this.enterPressed.bind(this)}
      />
      </div>


      <div class="form-group">
      <Input
      type={this.state.type}
      name="password"
        placeholder="Password"
         value={password}
        onChange={this.onChangeLogin}
         onKeyPress={this.enterPressed.bind(this)}
      />
      </div>
      </form>
       <Row style={{marginTop:'10%'}}>
       <div style={{width: '50%',display:' flex',justifyContent: 'flex-start'}}>
      <button type="button" class="btn btn-primary btn-lg mobverify" style={{backgroundColor:'#24479D',width:'125px'  }} onClick={this.handleSubmit} >SIGN UP</button>
      </div>
      <div style={{width:'50%',display: 'flex',justifyContent: 'flex-end'}}>
      <button onClick={this.loginSubmit} type="button" class="btn btn-primary btn-lg mobverify" style={{backgroundColor:'#FF9008',width:'125px',textAlign:'center'}}>LOGIN</button>
      </div>
      </Row>
      
      
      </ModalBody>
      <div class="mdlfooter mobfooter">
        
      <div className="textsocial" style={{display:'block','text-align':'center'}}>
       (or) Login with
       <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px'}}>
       <div className="imageblock" style={{width:'15%',padding:'2px'}}><img src={require('./img/google.png')} class="socialmedia" /></div>
        <FacebookLogin className="imageblock" cssstyle={{width:'15%',padding:'2px',cursor:'pointer'}} onLogin=
       {this.onLogin}><img src={require('./img/fb.png')} class="socialmedia"/></FacebookLogin>
      <div className="imageblock" style={{width:'15%',padding:'2px'}}><img src={require('./img/insta.png')} class="socialmedia" /></div>
       </div>
      </div>
      </div>
      </div>
                  )
      }
}
export default Login;