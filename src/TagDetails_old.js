import React, { Component } from 'react';
import {Button, Container, Row, Col } from 'reactstrap';
import { DatePicker } from 'antd';
import { Input,Dropdown } from 'semantic-ui-react';
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const options = [
{ key: 'angular', text: 'Alternate Days', value: 'Alternate Days' },
{ key: 'css', text: 'Hour', value: 'Hour' },
{ key: 'design', text: 'Second', value: 'Second' },
]

const tags=['Corporate Trainings','course Trainings','Venue Special','Special Tag Items display here','Corporate Trainings']

class TagDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tags:tags
    };
  }

  add_tag=(e)=>{
   console.log(this.state.value);
  }

  updateInput=(evt)=>{
    this.state={value: evt.target.value};   
  }

  render() {



    return (
      <div className='formcomponent_' style={{margin:'10px 0px 10px 20px'}}>

      <Row style={{'width':'100%'}}>  

      <div style={{'font-size':'18px','color':'#1f459e','width':'2%','margin-left':'15px'}}>
      &gt;
      </div>
      <div className='clr_blue' style={{'font-size':'18px','width':'40%'}}>
      Tag the Related Keywords
      </div>
      <div className='clr_blue' style={{'font-size':'18px','width':'40%'}}>
      <input type='text' class='form-control' placeholder='Add (or) Tag the related General Keywords' onChange={this.updateInput} />
      </div>
      <div style={{'font-size':'18px','width':'2%','margin-left':'15px'}}>
      <button className="btn small_btn" onClick={this.add_tag}><i class="icofont-plus" style={{width:'10px'}}></i></button>
      </div>

      </Row>

      <div className='tag_check'>

      {this.state.tags.map((item,i) => 
        <span>        
        <input type="checkbox" id={'tag_'+i} name="ossm" value={item} /> 
        <label for={'tag_'+i}>{item}</label>
        </span>
        )}

      </div>

      <Row style={{margin:'30px 0px'}}>

      <div style={{width:'100%',height:'3px'}} className='arrow_box tag_line'></div>

      </Row>

      <Row style={{'width':'100%'}}>  

      <div style={{'font-size':'18px','color':'#1f459e','width':'2%','margin-left':'15px'}}>
      &gt;
      </div>
      <div className='clr_blue' style={{'font-size':'18px','width':'40%'}}>
      Tag category of venue type?
      </div>
      <div className='clr_blue' style={{'font-size':'18px','width':'40%'}}>
      <input type='text' class='form-control' placeholder='Add (or) Tag the related General Keywords' />
      </div>
      <div style={{'font-size':'18px','width':'2%','margin-left':'15px'}}>
      <button className="btn small_btn"><i class="icofont-plus" style={{width:'10px'}}></i></button>
      </div>

      </Row>

      <div style={{width:'100%',height:'2px','background':'#c3c3c3','margin':'15px 0px'}}></div>

      <Row style={{'width':'100%'}}>  

      <div style={{'font-size':'18px','color':'#1f459e','width':'2%','margin-left':'15px'}}>
      &gt;
      </div>
      <div className='clr_blue' style={{'font-size':'18px','width':'40%'}}>
      Suitable training-IT/Soft Skills/Handson Experiance
      </div>
      <div className='clr_blue' style={{'font-size':'18px','width':'40%'}}>
      <input type='text' class='form-control' placeholder='Add (or) Tag the related General Keywords' />
      </div>
      <div style={{'font-size':'18px','width':'2%','margin-left':'15px'}}>
      <button className="btn small_btn"><i class="icofont-plus" style={{width:'10px'}}></i></button>
      </div>

      </Row>   


      <div style={{width:'100%',height:'2px','background':'#c3c3c3','margin':'15px 0px'}}></div>
      <div style={{float:'right',marginRight:'20px'}}>
      <button type="button" class="btn btn_next btn-lg">
      Next
      </button>
      </div>
      </div>
      );
  }
}

export default TagDetails;