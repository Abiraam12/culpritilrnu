import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import { Input} from 'antd';
import Apilink from './apilink';
class SuccessDisplay extends React.Component{
       constructor(props){
             super(props);
             this.state={
                  modal: this.props.visible,
                  roomName:this.props.roomName
             }
             this.toggle = this.toggle.bind(this);
       }
  alertBtn=()=>{

       window.location.reload();
      // this.setState({ modal: false });
    
  }
   handleClose() {
    this.setState({ modal: false });

  }
  onclose=()=>{
    this.props.oncloseModel();
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render(){
    return(
      <div>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className='successModel' centered backdrop={false}>
      <ModalHeader toggle={this.toggle} className="modal-header-login"  cssModule={{'modal-title': 'w-100 text-center'}}>
      </ModalHeader>
      <ModalBody>

      <div style={{display:'flex',height:'20vh','align-items': 'center','justify-content': 'center'}}>
      <div style={{display:'block','text-align':'center'}}>
      <div style={{'font-size':'15px'}}>Your Venue <b>{this.state.roomName}</b> has been listed</div>
      <div className='clr_orange' style={{'font-size':'30px',marginTop:'1%'}}>Successfully!</div>
      </div>
      </div>
      </ModalBody>
      {/*<div class="mdlfooter">
      
      <div style={{display:'block','text-align':'center'}}>
      (or) Login with
      <div style={{padding:10}}>
      <img src={require('./img/google.png')} class="socialmedia" />
      <img src={require('./img/fb.png')} class="socialmedia" />
      <img src={require('./img/insta.png')} class="socialmedia" />
      </div>
      </div>
      </div>*/}

      <div class="mdlfooter">
        
      <div style={{display:'block','text-align':'center'}}>
       Please Share with
       <div style={{display:'flex',justifyContent:'center',alignItems:'center',padding:'10px'}}>
       <div style={{width:'15%',padding:'2px'}}><img src={require('./img/google.png')} class="socialmedia" /></div>
        <div style={{width:'15%',padding:'2px',cursor:'pointer'}} ><img src={require('./img/fb.png')} class="socialmedia"/></div>
      <div style={{width:'15%',padding:'2px'}}><img src={require('./img/insta.png')} class="socialmedia" /></div>
       </div>
      </div>
      </div>

      <div style={{margin:'auto 0px '}}>
      <Row style={{marginTop:'10%',margin:0,justifyContent:'space-between',padding:12}}>
      <div style={{width: 'auto',display:' flex',justifyContent: 'flex-start'}}>


      <button type="button" class="btn btn-primary" style={{backgroundColor:'#ef8701',width:110,height:38}} onClick={this.onclose}>HOME</button>
      </div>
      <div style={{width:'auto',display: 'flex',justifyContent: 'flex-end'}}>
      <button type="button" class="btn btn-primary" style={{backgroundColor:'#ef8701',width:150,height:38,textAlign:'center'}} onClick={this.onclose}>ADD MORE VENUE</button>
      </div>
      </Row>
      </div>
       </Modal>
      </div>
      )
  }
}
export default SuccessDisplay;