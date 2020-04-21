import React from 'react';
import Square from '../square/square';
import lookingcss from './Lookingfor.css';
import SwiperId from '../../components/SwiperId/SwiperId'
import Apilink from '../../helpers/apilink';


export default class LookingFor extends React.Component {
	
	constructor(props) {
		super(props);
		this.state={
			lookArray:[{id:1,value:"Soft Skills Trainer"},
			{id:2,value:"Math Tutor"},
			{id:3,value:"Yoga Trainer"},
			{id:4,value:"NEET Tutor"},
			{id:5,value:"Guitar Teacher"},
			{id:6,value:"Professional Trainer"},
			{id:7,value:"English Teacher"}
		]
		}
	}

  componentWillMount(){
    // xthis.LookforList();
  
  }
	// LookforList=()=>{
	// 	  fetch(Apilink.apiurl+'youMayLookFor', {
    //   method:'POST',
    //   headers:{
    //     Accept:'application/json',
    //     'Content-Type':'application/json',
    //   },
    //   body:"",
    // }).then((response)=>response.json())
    // .then((responseJson)=>{
    //   console.log("you may look for response",responseJson.data);
    //   this.setState({lookArray:responseJson})


    // })
	// }

	render() {
		return (
			<div style={{width:'100%',borderBottom:"1px solid #ddd"}} >
			<SwiperId  lookArray={this.state.lookArray}/>
			</div>
		);
	}
}
