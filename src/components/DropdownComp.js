import { Select, Radio } from 'antd';
import React, { Component } from 'react';
const arrow=require("../icon/arrow_icon.svg");
const Option = Select.Option;





class DropdownComp extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = { size: 'default',
    selectedValue:props.selected};
  }
  
 handleChange=(value)=>{
   this.props.selectedValue(value);
   this.setState({selectedValue:value});
}
  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  }

  render() {
    const { size } = this.state;
    return (
      <div>
        
        <Select
         	
          size={size}
          defaultValue={this.state.selectedValue}
          onChange={this.handleChange}
          style={{ width: '100%' }}
          className="dropselection"
          suffixIcon={ <img src={arrow} /> }
        >
          <Option className="dropvalues" value="Alternate Days">Alternate Days</Option>

    <Option className="dropvalues" value="Except Few Days">Except Few Days</Option>
    <Option className="dropvalues" value="Only Weekdays">Only Weekdays</Option>
    <Option className="dropvalues" value="Only Weekends">Only Weekends</Option>
    <Option className="dropvalues" value="All Days">All Days</Option>
        </Select>
        <br />
        
      </div>
    );
  }
}

export default DropdownComp;