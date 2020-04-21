import React, { Component } from 'react';
import { Button, Input, FormGroup, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import Icofont from 'react-icofont';
const data=['Any Local training venues near you?','Venue needs in your location?','Is your neighborhood underserved?','Venue needs in your location?','Any local training venues near you?','Any local training venues near you?']
export default class SharePage extends React.Component{
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      signupdata:props.signupdata
    };
  }
  render(){
    return(
      <div>
      <ModalHeader toggle={this.toggle} style={{'padding-left':'30px','padding-right':'30px'}}>

      <div style={{}}>
      <div style={{'font-size':'15px','margin-bottom':'2%'}}>Welcome <strong>Michael Spencer,</strong></div>
      <div className='clr_orange' style={{'font-size':'30px'}}>Share more about you</div>
      <div style={{'font-size':'15px','margin-top':'-2%'}}>and allow us to serve you better!</div>
      </div>

      </ModalHeader>
      <ModalBody style={{'padding-left':'30px','padding-right':'30px'}}>

      <form>
      <table cellPadding='10' className='QuestionModel_tab' style={{'width':'100%'}}>
     {data.map((item) =>   
      <tr style={{'width':'100%'}}>
      <td style={{'width':'80%','font-size':'15px',}}> {item} </td>
      <td style={{'width':'10%','font-size':'15px',color:'#fe9102'}}> <i class="icofont-check-circled" style={{'font-size':'25px'}}></i> </td>
      <td style={{'width':'10%','font-size':'15px',color:'#fe9102'}}> <i class="icofont-close-circled" style={{'font-size':'25px'}}></i></td>
      </tr>  
      )}    

      </table>
<Row style={{'margin-top':'2%'}}>
  <Col style={{'justify-content':'right'}}><button type="button" class="btn" style={{'background':'#24479D',color:'white'}} >SKIP NOW</button></Col>
  <Col style={{display: 'block','text-align': 'right'}}><button type="button" class="btn" style={{'background':'#FF9008',color:'white'}}>NEXT</button></Col>
</Row>

      </form>
      </ModalBody>
      </div>
      )
  }
}
