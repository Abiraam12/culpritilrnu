import React, { Component } from 'react';
import { Button, Input, FormGroup, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import Signup from './Signup';
import ChangePassword from './ChangePassword';
class SignupModel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,

    };

    this.toggle = this.toggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClose() {
    this.setState({ modal: false });
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  

  render() {
    return (
      <div className="animated fadeIn">
      <Row>
      <Col>
      <Card>
      <CardBody>
      <Button onClick={this.toggle} className="mr-1">Signup Model</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} centered backdrop='false'>
 <div class="closeicon" ><i onClick={this.handleClose} class="icofont-close"></i></div>
      <Signup />
      </Modal>
      </CardBody>
      </Card>
      </Col>
      </Row>
      </div>
      );
  }
}

export default SignupModel;
