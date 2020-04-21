import React, { Component } from 'react';
import './App.css';
import {Button, Container, Row, Col } from 'reactstrap';
import { DatePicker, Select, Input,Modal} from 'antd';
import "antd/dist/antd.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Icofont from 'react-icofont';

import AccessibilitySVG from './icon/venue-amenities/AccessibilitySVG';
import BathroomSVG from './icon/venue-amenities/BathroomSVG';
import ChairSVG from './icon/venue-amenities/ChairSVG';
import CoffeeSVG from './icon/venue-amenities/CoffeeSVG';
import DeskSVG from './icon/venue-amenities/DeskSVG';
import DoorSVG from './icon/venue-amenities/DoorSVG';
import LaptopSVG from './icon/venue-amenities/LaptopSVG';
import ParkingSVG from './icon/venue-amenities/ParkingSVG';
import SeatsSVG from './icon/venue-amenities/SeatsSVG';
import ShapeSVG from './icon/venue-amenities/ShapeSVG';


const InputGroup = Input.Group;
const Option = Select.Option;
const table_content=[{name:'Locker',id:1,state:false,curr_amt:0,curr:'USD',daysweek:'Day'},{name:'Lift',id:2,state:false,curr_amt:0,curr:'USD',daysweek:'Day'},{name:'AC',id:3,state:false,curr_amt:0,curr:'USD',daysweek:'Day'},{name:'Power Backup',id:4,state:false,curr_amt:0,curr:'USD',daysweek:'Day'},{name:'Reception',id:5,state:false,curr_amt:0,curr:'USD',daysweek:'Day'}]
class SelectedArray
{
    constructor()
    {
       var  selectedItemsArray = JSON.parse(JSON.stringify(table_content));
       return selectedItemsArray;
    }

}
const btn_details=[{'icon':<ChairSVG/>,'name':'Seating','badge':0,id:1,state:false,data_array:new SelectedArray()},{'icon':<ShapeSVG />,'name':'Physical Infrastructure','badge':0,id:2,state:false,data_array:new SelectedArray()},{'icon':<AccessibilitySVG/>,'name':'Accessibility','badge':0,id:3,state:false,data_array:new SelectedArray()},{'icon':<LaptopSVG/>,'name':'Training Equipments','badge':0,id:4,state:false,data_array:new SelectedArray()},{'icon':<DeskSVG/>,'name':'IT Infra','badge':0,id:5,state:false,data_array:new SelectedArray()},{'icon':<SeatsSVG />,'name':'Resource','badge':0,id:6,state:false,data_array:new SelectedArray()},{'icon':<BathroomSVG />,'name':'Toilets','badge':0,id:7,state:false,data_array:new SelectedArray()},{'icon':<ParkingSVG />,'name':'Parking','badge':0,id:8,state:false,data_array:new SelectedArray()},{'icon':<CoffeeSVG />,'name':'Pantry','badge':0,id:9,state:false,data_array:new SelectedArray()},{'icon':<DoorSVG />,'name':'Additonal Rooms','badge':0,id:9,state:false,data_array:new SelectedArray()}];

const btn_details_2=[{'icon':'icofont-building','name':'Pantry'},{'icon':'icofont-building-alt','name':'Additional Rooms'}];


const options = [
{ key: 'angular', text: 'Angular', value: 'angular' },
{ key: 'css', text: 'CSS', value: 'css' },
{ key: 'design', text: 'Graphic Design', value: 'design' },
{ key: 'ember', text: 'Ember', value: 'ember' }
]



class VenueAmenities extends Component {
    constructor(props) {
        super(props);
        var newtablecontent=JSON.parse(JSON.stringify(table_content))
        var newbtn_details=btn_details;
        console.log("ameneties",props.ameneties);
        this.state = {
            table_content:newtablecontent,
            btn_details:props.ameneties?props.ameneties:btn_details,
            selectedIndex:null,
            statevalue:false,
            amenities:props.amenities?props.amenities:''
        };
    }
    componentWillReceiveProps(props){

        if(props.ameneties){
        // console.log("ameneties",props.ameneties);
            this.setState({btn_details:props.ameneties})
        }
    }
    addAmenities =() =>{
        console.log("amenities",JSON.stringify(this.state.table_content));
        console.log("selectedIndex",this.state.selectedIndex);
        // var countlength=this.state.table_content.filter((obj)=>obj.state==true);
        var btndetailsfltr=this.state.btn_details.filter((obj)=>obj.state==true);
        var btndetailsfltrarray=this.state.btn_details[this.state.selectedIndex].data_array.filter((obj)=>obj.state==true);
        // console.log("btndetailsfltr",btndetailsfltr);
        // console.log("btndetailsfltr",countlength);
        var btn_details=this.state.btn_details;
        if(btndetailsfltrarray.length>0){

        btn_details[this.state.selectedIndex].badge=btndetailsfltrarray.length;
        btn_details[this.state.selectedIndex].state=true;
        }else{
        btn_details[this.state.selectedIndex].badge=btndetailsfltrarray.length;
        btn_details[this.state.selectedIndex].state=false;

        }
        
        this.setState({btn_details});
        this.setState({statevalue:null});



    // var array=[];
// for(var i=0 ;i<btndetailsfltr.length;i++){
// var firstobj=btndetailsfltr[i];
// console.log(firstobj)

// for(var j=0 ; j < firstobj.data_array.length;j++){
//     console.log(firstobj.data_array[j])
// var secondobj=firstobj.data_array[j];
// var obj={'trn_venue_amnts_id':firstobj.id,'trn_venue_amnts_name':secondobj.name,'trn_venue_amnts_qty':secondobj.curr_amt,'trn_venue_amnts_curr':secondobj.curr,'trn_venue_amnts_datetime':secondobj.daysweek
// }
// array.push(obj)
// }
// }
    // console.log("array",array);
    // var btn_details=this.state.btn_details;
    // btn_details[this.state.selectedIndex].data_array=countlength;
    
    var array=[];
    for(var i in btndetailsfltr){
        var obj={'trn_venue_amnts_id':btndetailsfltr[i].id,'trn_venue_amnts_name':'','trn_venue_amnts_qty':'','trn_venue_amnts_curr':'','trn_venue_amnts_datetime':''};
        for(var j in btndetailsfltr[i].data_array){
            var obj=Object.assign({},obj);
            if(btndetailsfltr[i].data_array[j].state==true){
            obj.trn_venue_amnts_name=btndetailsfltr[i].data_array[j].name;
            obj.trn_venue_amnts_qty=btndetailsfltr[i].data_array[j].curr_amt;
            obj.trn_venue_amnts_curr=btndetailsfltr[i].data_array[j].curr_amt;
            obj.trn_venue_amnts_datetime=btndetailsfltr[i].data_array[j].daysweek;
            array.push(obj);
        }
        }

    }
    this.props.receiveamendata({array:array,ameneties:this.state.btn_details});
    // console.log("newarray",array);
     // this.props.receiveamendata(btndetailsfltr);
// this.props.nexttab('list5');
//var obj={"trn_venue_amnts_id":}


}

onchangeData=(value,index,state,event)=>{


    // var table_content=this.state.table_content;
    // table_content[index][state]=value;
    // this.setState({table_content}); 
console.log(value)
    if(state=='curr_amt'){
            var reg = /^\d+$/;
        value=value.replace(/[^0-9]+/g, "");

        if(value==0 && event=='click'){
             console.log('valu',"emprt");
            value=value.slice(1);
        }
       if(value=="" && event=='blur'){
            console.log('valu',0);
            value=0;
        }
    }
    var btn_details=this.state.btn_details;
    btn_details[this.state.selectedIndex].data_array[index][state]=value;
    this.setState({btn_details});
    // console.log("table_content",this.state);
}
handleClick=(index,statevalue,item)=>{
    // console.log(this.state)
    console.log(statevalue);
    this.props.updateheight();
    this.setState({selectedIndex:index});
    var btn_details=this.state.btn_details;
    var condtionalstate=false;
    if(item.badge>0){
        btn_details[index].state=true;
        condtionalstate=true;
    }else{
        btn_details.map((obj)=>obj.badge>0?obj.state=true:obj.state=false);
        btn_details[index].state=!statevalue;
        condtionalstate=!statevalue;
    }
    // alert(condtionalstate);
    this.setState({statevalue:condtionalstate});
    this.setState({btn_details});
   
}
nextSubmit =()=>{
    var btndetailsfltr=this.state.btn_details.filter((obj)=>obj.state==true);
    
    // this.props.receiveamendata({array:array,ameneties:btndetailsfltr});
    // console.log(this.state.btn_details);
    this.props.nexttab('list5');  
}
focus(){
    alert("")
}

changeRoom=(e,index)=>{
    var btn_details=this.state.btn_details;
    btn_details[this.state.selectedIndex].data_array[index].state=!btn_details[this.state.selectedIndex].data_array[index].state;
    this.setState({btn_details});
        // alert("table_content",table_content);
        // var countlength=this.state.table_content.filter((obj)=>obj.state==true);
        // alert(countlength.length);

    // alert(e);
}
render() {
    return (
        <div className='formcomponent_' style={{margin:'10px 0px 10px 20px'}}>
        <div style={{padding:'20px 0px',background:'white'}}>
        <div className="main-div1">
        {this.state.btn_details.map((item,i) => 
            <div className={`check_btn arrowstyle ${this.state.statevalue==true&&this.state.selectedIndex==i?'active':''}`} style={{'text-align':'center','margin':'0px 10px 28px'}}>

            

            <input className="round_svg1" type='checkbox' onClick={(e)=>this.handleClick(i,item.state,item)} name='facility_radio'  id={`amen-radio-id-${i}`} />
           <label className="labelarrow">
            </label>
            <label className={item.state==true?'labelcircle btn badge1 check_btn_check svgstyleradio':'labelcircle btn badge1 svgstyleradio'} for={`amen-radio-id-${i}`} data-badge={item.badge>0?item.badge:null}>
            {item.icon}
            </label> 


            <div class="item-name">{item.name}</div>

            </div>
            )}

        </div>
        </div>
        {window.innerWidth<768&&
       <Modal className="antmodalmob"
          title={null}
          footer={null}
          style={{paddingTop:10}}
          onCancel={()=>this.setState({statevalue:0})}
          visible={this.state.statevalue==true}
        >
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',paddingTop:16}}>
            <div id="circle" className="svgorangebg">
    <div id="circle2" className='svgchange'>
   {this.state.selectedIndex!=null?this.state.btn_details[this.state.selectedIndex].icon:''}
    </div>
    </div>
    <p className="amenetiesText">
   {this.state.selectedIndex!=null?this.state.btn_details[this.state.selectedIndex].name:''}
   </p>
    </div>
        {this.state.statevalue==true && <div>
            <Row className="webmodules"  style={{'width':'100%','margin-left': '1%','margin-top': '0%',
            'margin-bottom': '1%'}}>  

            <div style={{'font-size':'18px','color':'#1f459e','width':'2%'}}>
            &gt; 
            </div>            

            <div style={{'font-size':'18px','color':'#1f459e','width':'98%'}}>
            <strong>Physical Infrastructure</strong> - Please add details
            </div>

            </Row>


            <table className='amenities_tab' cellpadding="10" style={{width:'100%' }}>
            {this.state.btn_details[this.state.selectedIndex].data_array.map((item,i) => 

                <tr style={{width:'100%' ,height:'59px'}}>
                <td style={{width:'5%'}}>
                <div>
                <div class="round">
                    <input onClick={(e)=>this.changeRoom(e,i)} type="checkbox" checked={item.state} id={"checkbox"+i} />
                <label for={"checkbox"+i}></label>
                </div>
                </div>
                </td>

                <td style={{width:'15%'}} className="amentiesfirstsection">
                    <div style={{ 'font-size': '18px' }}>{item.name}</div>
                </td>
                <td style={{width:'auto'}} className="amentiessecondsection">
                {item.state==true&&
                    <div className="amenetiessecondrow">

                    <InputGroup compact  className="inputGroupamn">
                        <div className="amentiesrowborder widthamn">
                            <input  onChange={(e)=>this.onchangeData(e.target.value,i,'curr_amt','')} className="amenetiescol40" value={item.curr_amt} />
                                <Select onChange={(e)=>this.onchangeData(e,i,'curr','')} value={item.curr} className="amenetiescol60">
                                    <Option value="INR">INR</Option>
                                    <Option value="USD">USD</Option>
                                </Select>    
                        </div>        

                            <Select onChange={(e)=>this.onchangeData(e,i,'daysweek','')}  className="amenetiesday30 widthamn" value={item.daysweek} style={{padding: '2px','margin-left':'3%',width: '25%' }}>
                            <Option value="Hour">Hour</Option>
                            <Option value="Day">Day</Option>
                    </Select>

                    </InputGroup>

                    </div>
                }
                </td>
                <td style={{width:'50%'}}>
                </td>
                </tr>
                )}
            </table>
            <div className="amenetiesBtn"  style={{width:'99%',display: 'flex','justify-content': 'flex-end',marginRight:'20px',marginTop:'-3%'}}>
            <button onClick={this.addAmenities} className="btn btn_next btn-lg btnclassamenties" style={{width:'auto'}}>
            ADD TO AMENITIES
            </button>
            </div>
            <div class='webmodules' style={{'flex': '1', height: '1px', background:'#c3c3c3','margin':'15px 0px'}}></div>
            </div>
        }
            </Modal>
        }
        {window.innerWidth>767&& this.state.statevalue==true && <div>
            <Row className="webmodules"  style={{'width':'100%','margin-left': '1%','margin-top': '0',
            'margin-bottom': '1%'}}>  

            <div style={{'font-size':'18px','color':'#1f459e','width':'2%'}}>
            &gt; 
            </div>            

            <div style={{'font-size':'18px','color':'#1f459e','width':'98%'}}>
            <strong>Physical Infrastructure</strong> - Please add details
            </div>

            </Row>


            <table className='amenities_tab' cellpadding="10" style={{width:'100%' }}>
            {this.state.btn_details[this.state.selectedIndex].data_array.map((item,i) => 

                <tr style={{width:'100%' ,height:'59px'}}>
                <td style={{width:'5%'}}>
                <div>
                <div class="round">
                    <input onClick={(e)=>this.changeRoom(e,i)} type="checkbox" checked={item.state} id={"checkbox"+i} />
                <label for={"checkbox"+i}></label>
                </div>
                </div>
                </td>

                <td style={{width:'15%'}} className="amentiesfirstsection">
                <div style={{ 'font-size': '18px' }}>{item.name}</div>
                </td>
                <td style={{width:'auto'}} className="amentiessecondsection">
                {item.state==true&&
                    <div className="amenetiessecondrow">

                    <InputGroup compact  className="inputGroupamn">
                    <div className="amentiesrowborder widthamn">
                    <Input onClick={(e)=>this.onchangeData(e.target.value,i,'curr_amt','click')} onBlur={(e)=>this.onchangeData(e.target.value,i,'curr_amt','blur')} onChange={(e)=>this.onchangeData(e.target.value,i,'curr_amt','')} className="amenetiescol40" value={item.curr_amt} />
                    <Select onChange={(e)=>this.onchangeData(e,i,'curr','')} value={item.curr} className="amenetiescol60">
                    <Option value="INR">INR</Option>
                    <Option value="USD">USD</Option>
                    </Select>    
                    </div>        

                    <Select onChange={(e)=>this.onchangeData(e,i,'daysweek','')}  className="amenetiesday30 widthamn" value={item.daysweek} style={{padding: '2px','margin-left':'3%',width: '25%' }}>
                    <Option value="Hour">Hour</Option>
                    <Option value="Day">Day</Option>
                    </Select>

                    </InputGroup>

                    </div>
                }
                </td>
                <td style={{width:'50%'}}>
                </td>
                </tr>
                )}
            </table>
            <div className="amenetiesBtn"  style={{width:'99%',display: 'flex','justify-content': 'flex-end',marginRight:'20px',marginTop:'-3%'}}>
            <button onClick={this.addAmenities} className="btn btn_next btn-lg btnclassamenties" style={{width:'auto'}}>
            ADD TO AMENITIES
            </button>
            </div>
            <div class='webmodules' style={{'flex': '1', height: '1px', background:'#c3c3c3','margin':'15px 0px'}}></div>
            </div>
        
        }
            
            

            <div class="webmodules button_change">
            <button class="btn btn_next btn-lg" onClick={this.nextSubmit}>
            NEXT
            </button>
            </div>
            </div>
            );
}
}

export default VenueAmenities;
