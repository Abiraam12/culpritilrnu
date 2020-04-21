import React, { Component } from 'react';
import './App.css';
import {Button, Container, Row, Col } from 'reactstrap';
import { Input, Dropdown } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';

  class Undersider extends Component {
    render() {
      return (
        <div>
        <div style={{height:'auto',backgroundColor:'#24479D',display:'flex',padding:12}} >
        
         <Container className="coursemain">
         <Row className="coursemainrow">
          <Col xs="6" sm="6" md="3" className="courseoverview"><Button className="courses">
            <div class="numberclass">782</div>
          <div class="courseclass">Courses</div>
          </Button></Col>
          <Col xs="6" sm="6" md="3" className="courseoverview">
            <Button className="courses">
            <div class="numberclass">054</div>
          <div class="courseclass">Trainers</div>
          </Button>
          </Col>
          <Col xs="6" sm="6" md="3" className="courseoverview"><Button className="courses">
            <div class="numberclass">2734</div>
          <div class="courseclass">Learners</div>
          </Button></Col>
          <Col xs="6" sm="6" md="3" className="courseoverview"><Button className="courses">
            <div class="numberclass">152</div>
          <div class="courseclass">Venues</div>
          </Button></Col>
        </Row>
        </Container>

     {/* <div style={{width:'80%',marginLeft:'10%',alignItems:'center',display:'flex'}}>

          <div style={{width:'25%',textAlign:'center'}}>
          <Button className="courses"><div class="numberclass">782</div>
          <div class="courseclass">Courses</div>
          </Button>
          </div>
         <div style={{width:'25%',textAlign:'center'}}>
          <Button className="courses"><div class="numberclass">054</div>
          <div class="courseclass">Trainers</div>
          </Button>
          </div>
          <div style={{width:'25%',textAlign:'center'}}>
          <Button className="courses"><div class="numberclass">2734</div>
          <div class="courseclass">Learners</div>
          </Button>
          </div>
          <div style={{width:'25%',textAlign:'center'}}>
          <Button className="courses"><div class="numberclass">152</div>
          <div class="courseclass">Venues</div>
          </Button>
          </div>
        </div>
      <div class="borderOrange"></div>*/}
      </div>
      <div class="borderOrange"></div>
      </div>
        );
    }
  }

  export default Undersider;
