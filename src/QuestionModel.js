import React, { Component } from 'react';
import { Button, Input, FormGroup, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import Icofont from 'react-icofont';



class QuestionModel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,

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
      <div className="animated fadeIn QuestionModel">
      <Row>
      <Col>
      <Card>
      <CardBody>
      <Button onClick={this.toggle} className="mr-1">Question Model</Button>
      <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} centered backdrop='false'>
      
      </Modal>
      </CardBody>
      </Card>
      </Col>
      </Row>
      </div>
      );
  }
}

export default QuestionModel;
