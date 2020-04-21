import React from 'react';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import chat_svg from '../../images/classroom.svg'
import '../chooseVenueModal/ChooseVenueModal.css'
import { Menu, Dropdown, Icon } from 'antd';
import 'antd/dist/antd.css';
import { Modal,Button,ModalHeader,ModalFooter } from 'reactstrap';
import close from '../../images/delete.svg'

const menu = (
    <Menu>
      <Menu.Item key="0">
        <a>Own Venue 1</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a>Own Venu 2</a>
      </Menu.Item>
    </Menu>
  );


export default class ChooseVenueModal extends React.Component {

    constructor(props){
        super(props);
        this.state={
            onClose:false
            
        }
    }

    handlesubmit = () => {
      if(this.props.loadaddvenue){
        var obj={type:'addvenue'};
        this.props.loadaddvenue(obj)
    }
    }

    
    handleCancel = () => {
      this.setState({
        onClose:true
      })
    }
   
    render(){
            const {
                buttonLabel,
                className
            } = this.props;

          
  return (
    <div>
      {/* <Button color="danger"  onClick={this.props.toggle}>{buttonLabel}</Button> */}
      <div className="ChooseVenue_modal" >
        <ModalHeader className="choose_modal_header" >Choose Venue</ModalHeader>
       
            <div className="modal_icon_div">
                <div className="modal_icon"><img className="modal_svg" src={chat_svg}></img></div>
           
            </div>
           <div className="Venue_header" >
             <h3 className="Venue-header1">ILT - <span style={{ fontWeight:"bold" }}>Swimming</span></h3> </div>
           <div className="Venue_picker"><h4 className="addVenue_caption">Choose the <span className="addVenue_caption_bold">Venue</span></h4>
          <div className="addvenue_dropdown"> <Dropdown overlay={menu} trigger={['click']}>
    <a className="addVenue_dropdown">
      Own Venue  <Icon className="dropdown_svg" type="down" />
    </a>
  </Dropdown></div>
           </div>

           <div>
           <div className="block_checboxes">
           <div class="chkbox_container">
              <div class="round">
              <input type="checkbox" id="checkbox_1" value="1" />
                <label for="checkbox_1"></label>
                <p className="caption_fa_chkbox">Own Venue 1</p>
              </div>
              </div>
              <div class="chkbox_container">
              <div class="round">
               <input type="checkbox" id="checkbox_2" value="2" />
                <label for="checkbox_2"></label>
                <p className="caption_fa_chkbox">Own Venue 2</p>
               </div>
              </div>
              <div class="chkbox_container">
              <div class="round">
               <input type="checkbox" id="checkbox_3" value="3" />
                <label for="checkbox_3"></label>
                <p className="caption_fa_chkbox">Own Venue 3</p>
              </div>
              </div>
              </div>
              </div>
              
        
        <ModalFooter className="addvenue_modalfooter">
          <Button className="yourvenue_button" onClick={this.handlesubmit}>ADD NEW VENUE</Button>{' '}
          <Button className="venuesave_button" color="primary" onClick={this.handleCancel}>SAVE</Button>
        </ModalFooter>

      </div>
    </div>
  );
}

}



