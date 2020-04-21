import React from 'react';
import './checkbox-form.css';
import plus from '../../images/+.png';
import Popupbox from '../popupbox/popupbox';

// import { Checkbox } from 'antd';

var playarray={value:'id',name:'name',dropdown:[{id:1,name:'play'},{id:2,name:'work'},{id:3,name:'enjoty'}]}

export default class Checkboxform extends React.Component {


	constructor(props) {
		super(props);
		console.log(props);
		// console.log(props.editobj&&props.editobj.data.seconddata)
		this.state={top:0,height:0,left:0,visible:props.editobj?props.editobj.visible:false,firstdropdown:{value:'id',name:'name',dropdown:[]}}
		  this._onBlur = this._onBlur.bind(this)
      this._onFocus = this._onFocus.bind(this)
	}
	componentWillReceiveProps(props){
		console.log("newDataprops",props);
		
	}
_onFocus() {
      console.log('focusing')
      if(this.state.count==''||this.state.count==0){
      this.setState({count:''})
  }
    }
     _onBlur() {
      
      console.log('blurrin')
      if(this.state.count==''||this.state.count==0){
      this.setState({count:0})
      }
    }
checkedChange=(data)=>{


	// console.log(data);
	var checkboxData=JSON.parse(JSON.stringify(this.props.currentCheckbox));
	this.setState({visible:!this.state.visible},function(){
// this.props.currentCheckbox.
var obj={visible:this.state.visible,id:checkboxData.amenities_det_id,type:'',key:'',currentCheckbox:checkboxData};
			this.props.checkboxdata(obj);
// this.props.checkbo
	});
// 		var obj={visible:this.state.visible,data:{firstdata:this.state.firstdata,seconddata:this.state.seconddata,count:this.state.count,firstdropdown:[],seconddropdown:[]},id:this.props.currentCheckbox.amenities_det_id}
// 		if(this.state.visible==true){
// 			var dropdownobj=[];
// 			var seconddropdownobj=[];
// 			var firstdropdownvalues=this.props.currentCheckbox.amenities_det_datavalue2.split(',').map((obj,key)=>{
// 				console.log(obj);
// 					dropdownobj.push({id:key+1,name:obj})
// 			});
// 			var seconddropdownvalues=this.props.currentCheckbox.amenities_det_datavalue3.split(',').map((obj,key)=>{
// 					seconddropdownobj.push({id:key+1,name:obj})
// 			});
// 			var firstdropdown=this.state.firstdropdown;
// 			var seconddropdown=this.state.seconddropdown;
// 			var firstdata=this.state.firstdata;
// 			firstdata=dropdownobj[0];
// 			var seconddata=this.state.seconddata;
// 			seconddata=seconddropdownobj[0];
// 			firstdropdown.dropdown=dropdownobj;
// 			seconddropdown.dropdown=seconddropdownobj;
// 			this.setState({firstdropdown});
// 			this.setState({seconddropdown});
// 			this.setState({firstdata:!this.state.firstdata?firstdata:this.state.firstdata});
// 			this.setState({seconddata:!this.state.seconddata?seconddata:this.state.seconddata});
// 			obj.data.firstdata=!this.state.firstdata?firstdata:this.state.firstdata;
// 			obj.data.seconddata=!this.state.seconddata?seconddata:this.state.seconddata;
// 			obj.data.firstdropdown=firstdropdown;
// 			obj.data.seconddropdown=seconddropdown;
// 			this.props.checkboxdata(obj);
// 		// this.setState({top:this.instance.getBoundingClientRect().top});
// 	// this.setState({height:this.instance.getBoundingClientRect().height});
// 	// this.setState({left:this.instance.getBoundingClientRect().left});
	
// }else{

// 			this.props.checkboxdata(obj);
// }
// 	})
}
onChangeText=(e,key,type,typedata,valuedata)=>{
console.log(e.target.value);
// this.props.
var currentCheckbox=JSON.parse(JSON.stringify(this.props.currentCheckbox));
currentCheckbox[typedata]=type;
currentCheckbox[valuedata]=e.target.value;
var obj={id:this.props.currentCheckbox.amenities_det_id,visible:this.state.visible,key:key,value:e.target.value,type:type,currentCheckbox:currentCheckbox};
this.props.checkboxdata(obj);
this.setState({[valuedata]:e.target.value});
	// var checknumber=/^[0-9]*$/g;
	// // alert(checknumber.test(e.target.value));
	// var countvalue=e.target.value;
	// if(checknumber.test(countvalue)){
	// 	// countvalue=countvalue;

	// this.setState({count:countvalue});
	// }else{
	// 	// countvalue=0
	// // this.setState({count:0});
	// }

	// var obj={visible:this.state.visible,data:{firstdropdown:this.state.firstdropdown,seconddropdown:this.state.seconddropdown,firstdata:this.state.firstdata,seconddata:this.state.seconddata,count:countvalue},id:this.props.currentCheckbox.amenities_det_id}
	// this.props.checkboxdata(obj);
}
receivePopupData=(data,key,type,typedata,valuedata,dropKey)=>{
	// this.setState({[key]})
	// console.log(data);
	var currentCheckbox=JSON.parse(JSON.stringify(this.props.currentCheckbox));
currentCheckbox[typedata]=type;
currentCheckbox[dropKey]=data.name;
	var obj={visible:this.state.visible,key:key,value:data.name,id:this.props.currentCheckbox.amenities_det_id,type:type,currentCheckbox:currentCheckbox};
	this.props.checkboxdata(obj);
	this.setState({[dropKey]:data.name})
	// this.setState({[key]:data},function(){
	// var obj={visible:this.state.visible,data:{firstdropdown:this.state.firstdropdown,seconddropdown:this.state.seconddropdown,firstdata:this.state.firstdata,seconddata:this.state.seconddata,count:this.state.count},id:this.props.currentCheckbox.amenities_det_id}
	// this.props.checkboxdata(obj);
	// })

}
componentDidMount(){
	
}

renderInput=(data,value,key,typedata,valuedata,dropKey)=>{

	if(data=='number' || data=='text'){

		return(
<div className="number1"><input  min="0" onFocus={this._onFocus}
                        onBlur={this._onBlur} onChange={(e)=>this.onChangeText(e,key,data,typedata,valuedata)} type={data} value={this.state[valuedata]>0?this.state[valuedata]:value} className="number"/></div>
			)

	}else if(data=='dropdown'){
		var dropdownData=[];
		console.log("value",value);
		value.split(',').map((obj,key)=>{
					dropdownData.push({id:key+1,name:obj})
			})
		console.log("dropdownData",dropdownData);
		return(
<div className="dropdown-in-box" ref={(el) => this.instance = el } >
			 <Popupbox sendPopupData={(data1)=>this.receivePopupData(data1,key,data,typedata,valuedata,dropKey)} top={this.state.top} left={this.state.left} height={'100%'} buttonText={this.state[dropKey]?this.state[dropKey]:(!this.props.currentCheckbox[dropKey]?dropdownData[0].name:this.props.currentCheckbox[dropKey])}  dropdown={{name:'name',id:'id',dropdown:dropdownData}}  buttonColor={'transparent'} buttonTextColor={'black'} popupColor={'white'} popupTextColor={'black'}/>
			</div>
			)
	}else{
return(
<div></div>
	)
	}
}

	render() {
		console.log("adfadsf",this.state)
		console.log("adfadsfprops",this.props)
		return (
			<div className="checkform-maindiv">
			
			<div className="checkbox-div">

			
			<div className="checkbox">
				<input onfocus={()=>alert('focusing')} onChange={()=>this.checkedChange()} class="styled-checkbox" id={`styled-checkbox1-${this.props.keydata}`} type="checkbox" checked={this.state.visible} value="value1"/>
				<label for={`styled-checkbox1-${this.props.keydata}`}></label>
			<span className="addellipsisClamp2">{this.props.currentCheckbox.amenities_det_name}</span>
			</div>
			{this.state.visible==true&&
			<div className="drop-part2">
				<div className="dummyauto"></div>
				{this.props.currentCheckbox.amenities_det_datatype1!=""&&this.renderInput(this.props.currentCheckbox.amenities_det_datatype1,this.props.currentCheckbox.amenities_det_datavalue1,'venue_amnts_det_datavalue1','amenities_det_datatype1','amenities_det_datavalue1','amenities_det_datavalued1')}
				{this.props.currentCheckbox.amenities_det_datatype2!=""&&this.renderInput(this.props.currentCheckbox.amenities_det_datatype2,this.props.currentCheckbox.amenities_det_datavalue2,'venue_amnts_det_datavalue2','amenities_det_datatype2','amenities_det_datavalue2','amenities_det_datavalued2')}
				{this.props.currentCheckbox.amenities_det_datatype3!=""&&this.renderInput(this.props.currentCheckbox.amenities_det_datatype3,this.props.currentCheckbox.amenities_det_datavalue3,'venue_amnts_det_datavalue3','amenities_det_datatype3','amenities_det_datavalue3','amenities_det_datavalued3')}	
		
			</div>
		}

			</div>
			</div>
			);
	}
}
