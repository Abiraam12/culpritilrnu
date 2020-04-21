import React, { Component } from 'react';
import './App.css';
import {Button, Container, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icofont from 'react-icofont';

var logo=require("./icon/Footer_logo.svg");
var fb=require("./icon/fb.svg");
var chat=require("./icon/chat.svg");
var twitter=require("./icon/twitter.svg");
var ping=require("./icon/ping.svg");
class FooterCopyright extends React.Component {
  render() {
    return (
      <div>
     {/* <div className="footercls">
        <Row className="footermain">
        <Col className="quick_lks">Quick Links:</Col>
        <Col className="footermenu">About Us</Col>
        <Col className="footermenu">About Product</Col>
        <Col className="footermenu">Managementt</Col>
        <Col className="footermenu">Offers</Col>
        <Col className="footermenu">Earn to Learn</Col>
        <Col className="footermenu">Learn to Earn</Col>
        <Col className="footermenu">Contact</Col>
          
        </Row>*/}

     
      
     <div className="footerr" style={{marginTop:10}}>
      <div className='footer_div_1'>
        <Row className='footer_row_1'>
          <div className='footer_divwid_1'>
           <div><strong>Quick Links:</strong></div>
          </div>
          <div className='footer_divwid_1'>
            <a className="footer_a_1" href='javascript:'>Aboutus</a>
          </div>
          <div className='footer_divwid_1'>
            <a className="footer_a_1" href='javascript:'>About Product</a>
          </div>
          <div className='footer_divwid_1'>
            <a className="footer_a_1" href='javascript:'>Management</a>
          </div>
          <div className='footer_divwid_1'>
            <a className="footer_a_1" href='javascript:'>Offers</a>
          </div>
          <div className='footer_divwid_1'>
            <a className="footer_a_1" href='javascript:'>Earn to Learn</a>
          </div>
          <div className='footer_divwid_1'>
            <a className="footer_a_1" href='javascript:'>Learn to Earn</a>
          </div>
          <div className='footer_divwid_1'>
            <a className="footer_a_1" href='javascript:'>Contact</a>
          </div>
        </Row>
      </div>
      <div className='footer_div_2'>
       <Row className='footer_row_2'>
      <Col md='4'className='sub applyflex'>
      <div className="logo_style">
        <img src={logo} className="App-logo" alt="logo" />
        </div>
      </Col>
      <Col md='8'>
      <p class="copyright">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
      </p>
      <div className="socialftr">
        <img src={fb} className="socialimgpadd"/>
        <img src={chat} className="socialimgpadd"/>
        <img src={twitter} className="socialimgpadd"/>
        <img src={ping} className="socialimgpadd"/>
      </div>
        
        <p class="copyright">©2019 iLRNU All rights reserved.</p>
      </Col>
      </Row>
      </div>
      </div>
       </div>
      );
  }
}

export default FooterCopyright;
