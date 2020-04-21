import React from 'react';
import ChooseVenueModal from '../chooseVenueModal/ChooseVenueModal';
import AddVenueModal from '../addVenueModal/AddVenueModal';
import  { Modal } from 'antd';
import './ChooseAddVenueModal.css'





class ChooseAddVenueModal extends React.Component{
    constructor(props) {
         console.log("choose venue props",props)
       
        super(props);
        this.state = {
          type:props.type,
          modalVisible:props.modal
        };
      

    
      }
        
      loadmodaltype = (data) => {
        console.log("daaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",data);
        this.setState({type:data.type});
      
      }
        
     

      // handleClose = () => {
      //     this.setState({ visible:false})
      // }

      toggle = () => {
          this.setState({ modalVisible:false })
      }

      handleCancel = () => {
        this.setState({ modalVisible: !this.state.modalVisible })
        console.log("cancel modal",this.state.modalVisible)
      }

    render(){
      console.log("props modal",this.props.modalVisible)
        return(
            <div>
      <Modal className="antd_modal_addchoosevenue" visible={this.state.modalVisible} toggle={this.toggle} onCancel={this.handleCancel}  backdrop="false">
      {/* <div class="closeicon" ><i onClick={this.handleClose} class="icofont-close"></i></div> */}

          {this.state.type === "choosevenue" && 
                <ChooseVenueModal loadaddvenue={this.loadmodaltype}  />
          }
          
          {this.state.type=='addvenue'&&
                <AddVenueModal />
          }
         
     </Modal>
     </div>
     )
}
}

export default ChooseAddVenueModal;