import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import './searchbox.css';
import Apilink from '../helpers/apilink';
import { Popover, Button } from 'antd';
export default class Searchbox extends React.Component {
	constructor(props) {
		super(props);
		this.state={checked:false,searchText:'',visible: false,}

	}
handleChange=(data)=>{
	this.setState({
		checked:data 
	});
}
changeSearchText=(data)=>{
	this.setState({
		searchText:data 
	});
}
searchData=(data)=>{
fetch(Apilink.apiurl+'commonSearch', {
      method:'POST',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body:JSON.stringify(data),
    }).then((response)=>response.json())
.then((responsejson)=>{
	// alert(JSON.stringify(responsejson));
	if(responsejson.status==0){
		this.props.sendSearchedData&&this.props.sendSearchedData(responsejson.data);
	}else{
		this.props.sendSearchedData&&this.props.sendSearchedData([]);
	}
})
}
hide = () => {
    this.setState({
      visible: false,
    });
  };

  handleVisibleChange = visible => {
    this.setState({ visible });
  };
submitSearch=()=>{

	 navigator.geolocation.getCurrentPosition(position => {
	var searchObj={searchContent:this.state.searchText,offset:0,lat:position.coords.latitude,long:position.coords.longitude,nearme:this.state.checked};
	// alert(JSON.stringify(searchObj));
	this.searchData(searchObj);

})
}


	render() {
		return (
			<div className="searchboxcomp">
				
			<p style={{ fontfamily:" SFProDisplay-Regular"}} >Explore and Book  various Venues {<br/>}  instantly  <Popover
			 className="popoverquestionbox"
        content={<p style={{width:150,wordBreak:'break-word',margin:0}}>Search your venue by <br/>Venue Name, Location, Category or Type.</p>}
        placement="right"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
      >
       <Button className="popover_quest"><i class="fa fa-question-circle" aria-hidden="true"></i></Button>
      </Popover></p>
			<div className="searchinputbox">
			<input onChange={(e)=>this.changeSearchText(e.target.value)}/>
			<SearchIcon/>
			</div>
			<div className="additionalBoxes">
			 <FormControlLabel
        control={
          <Checkbox
            checked={this.state.checked}
            onChange={()=>this.handleChange(!this.state.checked)}
            value="checkedB"
            color="primary"
          />
        }
        label="Near Me"
      />
      	<a>Advance Search</a>
			</div>
			<div className="submitBtnClass">
			<button onClick={()=>this.submitSearch()}>Search Venues</button>
			</div>
			</div>
		);
	}
}
