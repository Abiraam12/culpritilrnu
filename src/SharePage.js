import React, { Component } from 'react';
import { Button, Input, FormGroup, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import Icofont from 'react-icofont';
import Apilink from './apilink';

// const data=[{name:'Any Local training venues near you?',question_id:1,ans_status:null},{name:'Venue needs in your location?',question_id:2,ans_status:null},{name:'Is your neighborhood underserved?',question_id:3,ans_status:null},{name:'Venue needs in your location?',question_id:4,ans_status:null},{name:'Any local training venues near you?',question_id:5,ans_status:null},{name:'Any local training venues near you?',question_id:6,ans_status:null}];

export default class SharePage extends React.Component{
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      signupdata:props.signupdata,
      selected: '',
      data:[]
    };
    this.updateRadioButton = this.updateRadioButton.bind(this);
  }
  updateRadioButton = (value) =>{
    this.setState({ radio: value });
    console.log("radio",value);
  }

  componentWillMount() {
    this.ListQuestion();
  }

  ListQuestion=()=>{
    var obj={'type_id':1}
    console.log(obj)
    fetch(Apilink.apiurl+'List_question', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    }).then((response)=>response.json())
    .then((responseJson)=>{
      responseJson.data.map(v => v.ans_status = null);
      this.setState({ data: responseJson.data });

      console.log(responseJson.data);
      console.log(this.state);
    })  
  }

  changeState=(state,key)=>{
    var data=this.state.data;
    data[key].ans_status=state;
    this.setState({data});
    console.log("data",data);
  }
  skip=()=>{
    var skipdata=this.props.signupdata;
    skipdata.shared_details=[];
    this.props.submitData(skipdata);
  }
  nextSubmit=()=>{
    var skipdata=this.props.signupdata;
    skipdata.shared_details=this.state.data;
    this.props.submitData(skipdata);
  }
  render(){
    return(
      <div className="sharemoreabout">
      <ModalHeader toggle={this.toggle} style={{'padding-left':'30px','padding-right':'30px'}}>

      <div style={{}}>
      <div style={{'font-size':'15px','margin-bottom':'2%'}} className="paraheaderstyle">Hello {this.state.signupdata.user_name+" "+this.state.signupdata.user_details_surname},<b></b></div>
      <div className='clr_orange headerstyle' style={{'font-size':'30px',}} >Share more about you</div>
      <div style={{'font-size':'15px','margin-top':'-2%',fontWeight:'normal'}} className="subheaderstyle">and allow us to serve you better!</div>
      </div>

      </ModalHeader>
      <ModalBody style={{'padding-left':'30px','padding-right':'30px'}}>

      <form>
      <table cellPadding='0' className='QuestionModel_tab' style={{'width':'100%'}}>
      {this.state.data.map((item,i) =>   
        <tr style={{'width':'100%'}}>
        <td style={{'width':'80%','font-size':'15px',padding:10}}> {item.question} </td>
        <td style={{'width':'10%',padding:10}}>   

        <div class="inputGroup_check">
        <input id={'radioc-'+i} name={'radio-'+i} type="radio" value="radioc" checked={item.ans_status === true} onChange={(e) => this.changeState(true,i)}/>
        <label for={'radioc-'+i}></label>
        </div> 

        </td>
        <td style={{'width':'10%'}}>   

        <div class="inputGroup_close">
        <input id={'radiox-'+i} name={'radio-'+i} type="radio" value="radiox" checked={item.ans_status === false} onChange={(e) => this.changeState(false,i)}/>
        <label for={'radiox-'+i}></label>
        </div>

        </td>
        </tr>  
        )}    

      </table>
      <Row style={{'margin-top':'2%'}}>
      <Col style={{'justify-content':'right'}}><button type="button" class="btn btn-primary btn-lg mobverify" style={{'background':'#1d4298',color:'white'}} onClick={this.skip}>SKIP NOW</button></Col>
      <Col style={{display: 'block','text-align': 'right'}}><button type="button" class="btn btn-primary btn-lg mobverify" style={{'background':'#ef8701',color:'white',width:'57%'}} onClick={this.nextSubmit}>NEXT</button></Col>
      </Row>

      </form>
      </ModalBody>
      </div>
      )
  }
}
