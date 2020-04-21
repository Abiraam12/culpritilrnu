import React from 'react';
import {Button, Container, Row, Col } from 'reactstrap';
export default class SubHeader extends React.Component {


  constructor(props) {
    super(props);
     this.state = {
      visible:false,
      userloggedin:false,
      dropdown:''
    }
    console.log("subheader props",this.props)
  }
   dropdownClick=(data)=>{
    this.setState({dropdown:data});
  }
    getDropdown = (event, value) => {
    console.log(value);
    if(localStorage['userloggedin']=='yes'){
      this.props.loadvenue();
    }else{
      this.setState({visible:true});
      this.setState({dropdown:''});
    }

  }

  render() {
    return (
      <div className="sec-div">
        {this.props.children}
    </div>
    );
  }
}
