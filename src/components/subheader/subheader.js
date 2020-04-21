import React, {Component} from 'react';
import '../../components/subheader/subheader.css';
import {Breadcrumb} from 'antd';

class Subheader extends Component
{
	constructor(props) {
		super(props);

		this.state = {
			width: window.innerWidth
		};


	}
	render()
	{
		console.log("width",this.state.width)

		return(
			<div className="rectangle to_be_hidden">
			<div className="in-header" >
	
			{this.props.children}

			</div>
			</div>
			)
	}
}
export default Subheader; 