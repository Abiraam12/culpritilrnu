import React, { Component } from 'react';
import {Button, Container, Row, Col } from 'reactstrap';
import Apilink from './apilink';
import plus from './icon/plus.png';

var tags=[{'key':1,'name':<p className="tagbld"></p>,'data':[{'name':'Corporate Trainings','isChecked':false},{'name':'Course Trainings','isChecked':false},{'name':'Venue Special','isChecked':false},{'name':'Special Tag Items display here','isChecked':false},{'name':'Corporate Training','isChecked':false}]},{'key':2,'name':'Tag category of Venue Type?','data':[]},{'key':3,'name':'Suitable training-IT/Soft Skills/Handson...','data':[]}];

class TagDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tags:[],
      tagdetails:props.tagdetails.length>0?props.tagdetails:''
    };
  }

  componentWillMount() {
    this.ListTags();
  }

  ListTags=()=>{
    fetch(Apilink.apiurl+'get_tags', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: "",
    }).then((response)=>response.json())
    .then((responseJson)=>{
      
      var response=responseJson.data;
      console.log("response datas",response);
      response.map(v => v.data.map(d => d.isChecked = false));
        if(this.props.tagdetails.length>0){
          response=this.props.tagdetails;
        }
      this.props.updateheight('list5');
      this.setState({ tags: response});
      // console.log(this.state);
    })  
  }

  componentWillReceiveProps(props){
    if(props.tagdetails.length>0){
      this.setState({tagdetails:props.tagdetails})
    }
  }

  handleChange=(i1,i2,state)=> {

    var tags=this.state.tags;
    tags[i1].data[i2].isChecked=state;

    this.setState({tags: tags});
    var array=[];
    for(var i=0 ; i<tags.length ; i++){

      var data=tags[i].data;
    // tags[i].data=this.seperate_checked(data);
    var obj={'tag_cat_id':tags[i].key,'tag_details':this.seperate_checked(data)};
    array.push(obj)
  }
  this.props.receivetags(this.state.tags,array);

  }

 addcustomtags=(index,data)=>{

    if(data=="" || data==undefined){
      return;
    }

    var tags=this.state.tags;
    tags[index].data.push({'name':data,'isChecked':true});
    this.setState({tags});
    var array=[];
    for(var i=0 ; i<tags.length ; i++){

      var data=tags[i].data;
    // tags[i].data=this.seperate_checked(data);
    var obj={'tag_cat_id':tags[i].key,'tag_details':this.seperate_checked(data)};
    array.push(obj)
  }
  this.props.receivetags(this.state.tags,array);
    console.log({['custom'+index]:''})
    this.setState({['custom'+index]:''});
  }

  onSubmit=(value,index,state)=> {

    console.log(this.state.tags)
    
  this.props.nexttab('list6');
// var countlength=this.state.tags.filter((obj)=>obj.state==true);
//  console.log("tags",this.state.tags);
}

seperate_checked=(data)=>{

  var initial_data=data;
  var checked_data = initial_data.filter(obj => obj.isChecked == true)
  var final_data = checked_data.map(function(data){return data.name});
  return final_data;

}
render() {
   console.log(this.state)

   return (
     <div className='formcomponent_ tabcompmob' style={{margin:'10px 0px 10px 20px'}}>

     {/*<Row style={{'width':'100%'}}>  

     <div style={{'font-size':'18px','color':'#1f459e','width':'2%','margin-left':'15px'}}>
     &gt;
     </div>
     <div className='clr_blue' style={{'font-size':'18px','width':'40%'}}>
     Tag the Related Keywords
     </div>
     <div className='clr_blue' style={{'font-size':'18px','width':'40%'}}>
     <input type='text' class='form-control' placeholder='Add (or) Tag the related General Keywords' onChange={this.updateInput} value={this.state.values}/>
     </div>
     <div style={{'font-size':'18px','width':'2%','margin-left':'15px'}}>
     <button className="btn small_btn" onClick={this.add_tag}><i class="icofont-plus" style={{width:'10px'}}></i></button>
     </div>

     </Row>

     <div className='tag_check'>

     {this.state.tags.map((item,i) => 
       <span>    
       <input type="checkbox" id={'tag_'+i} name="ossm" value={item.name} onChange={(e) => this.handleChange(e,'RK')} checked={item.isChecked}/> 
       <label for={'tag_'+i}>{item.name}</label>
       </span>
       )
     </div>*/}
     {this.state.tags.map((item,i) => 
       <div className="borderrowtags">
       <Row style={{'width':'100%'}} className="tagmob">  

       <div className="webmodules" style={{'font-size':'18px','color':'#1f459e','width':'2%','margin-left':'15px'}}>
       &gt;
       </div>
       <div className='clr_blue webmodules ellipsis' style={{'font-size':'18px','width':'40%'}}>
       {item.name}
       </div>
       <div className='clr_blue inputdiv' style={{'font-size':'18px','width':'40%'}}>
       <input onChange={(e)=>this.setState({["custom"+i]:e.target.value})} type='text' class='form-control' placeholder={window.innerWidth>767?'Add (or) Tad the related General Keywords':item.name} value={this.state['custom'+i]}/>
       </div>
       <div style={{'font-size':'18px','width':'2%','margin-left':'15px'}}>
       <button onClick={(e)=>this.addcustomtags(i,this.state['custom'+i])} className="btn" style={{padding:'unset'}}><img src={plus} width='30' height='30'/></button>
       </div>

       </Row>

       <div className='tag_check'>

       {item.data.map((item2,li) => 
         <span style={{marginRight:5}}>    
         <input style={{display:'none'}} type="checkbox" id={'tag_'+i+li} name="ossm" value={item2.name} onChange={(e) => this.handleChange(i,li,!item2.isChecked)}  checked={item2.isChecked}/> 
         <label for={'tag_'+i+li}>{item2.name}</label>
         </span>
         )}
       </div>

       <div class="webmodules" style={{width:'100%',height:'2px','background':'#c3c3c3','margin':'15px 0px'}}></div>
       </div>
       )}


     {/*<Row style={{margin:'30px 0px'}}>

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


   <div style={{width:'100%',height:'2px','background':'#c3c3c3','margin':'15px 0px'}}></div>*/} 
   <div class="webmodules button_change">
   <button type="button" class="btn btn_next btn-lg" onClick={this.onSubmit}>
   NEXT
   </button>
   </div>
   </div>
   );
}
}

export default TagDetails;