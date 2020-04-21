import React, { Component } from 'react';
import './App.css';
import {Button, Container, Row, Col } from 'reactstrap';
import { Input, Dropdown } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icofont from 'react-icofont';

import Appartments from './icon/venue-type/Appartments';
import CoBuilding from './icon/venue-type/CoBuilding';
import Hotel from './icon/venue-type/Hotel';
import IndepHouse from './icon/venue-type/IndepHouse';
import InSports from './icon/venue-type/InSports';
import BrandPromation from './icon/venue-type/BrandPromation';
import Institution from './icon/venue-type/Institution';
import PlayGround from './icon/venue-type/PlayGround';

const btn_details=[{'icon':<CoBuilding/>,'name':'Corporate',id:1},{'icon':<PlayGround/>,'name':'Private Playground',id:2},{'icon':<IndepHouse/>,'name':'Independent Home',id:3},{'icon':<Appartments/>,'name':'Apartments',id:4},{'icon':<Institution/>,'name':'Institution',id:5},{'icon':<Hotel/>,'name':'Hotel',id:6},{'icon':<BrandPromation/>,'name':'Brand Promotions',id:7},{'icon':<InSports/>,'name':'Indoor Sports',id:8}];


class RoundButton extends Component {
 
  loadvenutype=(data)=>{
    this.props.loadvenutype(data);
  }
  componentWillReceiveProps(props){
    if(props.venuedetails){
    }
  }
  gotoNext=()=>{
    this.props.nexttab('list2');
  }
  render() {
    return (
      <div className="App">
      <div style={{width: '100%',margin:'5px 0px'}}>
      <div style={{display:'flex',flexWrap:'wrap'}} className="venuetype">

     {/* {btn_details.map((item) => 
        <div style={{'text-align':'center','margin':'20px 0px 10px'}}>
        <button onClick={()=>this.loadvenutype(item)} className="btn tab_round_btn" >
        <i class={item.icon}></i>
        </button>
        <div class="item-name" style={{}}>{item.name}</div>
        </div>
        )} */}

                {btn_details.map((item,i) => 
            <div className='radio_btn mobradiobtn' style={{'text-align':'center','margin':'20px 0px 10px'}}>

            <input className="round_svg" checked={item.id==this.props.venuedetails.trn_venue_type_id} type='radio' onClick={()=>this.loadvenutype(item)} name={`${'venuelist_radio'+this.props.keydrop}`}  id={`radio-id-${i+this.props.keydrop}`}/>
            <label for={`radio-id-${i+this.props.keydrop}`} className="btn svgstyleradio">
           {item.icon}
            </label>

            <div class="item-name">{item.name}</div>


            </div>
            )}


      </div>
    {/* <p class="borderbottom"></p>*/}
  <div className="webmodules button_change">
    <button class="btn btn_next btn-lg" onClick={this.gotoNext}>
    NEXT
    </button>
    </div>
      </div>
      </div>
      );
  }
}

export default RoundButton;
