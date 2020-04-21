import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import Login from './Login';

class LoginModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,

    };

    this.toggle = this.toggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }
   handleClose() {
    this.setState({ modal: false });
  }


  

  render() {
    return (
      <div className="animated fadeIn">
      <Row>
      <Col>
      <Card>
      
      <CardBody>
      <Button onClick={this.toggle} className="mr-1">Launch demo modal</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} centered backdrop="false">
      <div class="closeicon" ><i onClick={this.handleClose} class="icofont-close"></i></div>
      <Login />
      </Modal>
      </CardBody>
      </Card>
      </Col>
      </Row>
      </div>
      );
  }
}

export default LoginModal;
