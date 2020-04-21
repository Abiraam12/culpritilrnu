import React, { Component } from 'react';
import { Button, Input, FormGroup, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

class DisclaimerModel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: true,

    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  

  render() {
    return (
      <div className='DisclaimerModel'>
      <div className="animated fadeIn">
      <Row>
      <Col>
      <Card>
      <CardBody>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} centered backdrop='false'>
      
      </Modal>
      </CardBody>
      </Card>
      </Col>
      </Row>
      </div>
      </div>
      );
  }
}

export default DisclaimerModel;
