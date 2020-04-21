import React, {Component} from 'react';


class Specific extends Component
{
constructor(props) {
	  super(props);
	  this.state = {

			  	
	  };
  	}

// changeColor(){
//         this.setState({circle1:!this.state.circle1})
//     }
specifictraining=()=>{
	this.props.specifictraining();
}

render()
{
	return(
		<div className={`${this.props.disabled?'disabledMain':''}`}>	

		{!this.props.dummy&&
		 <div  onClick={()=>this.props.disabled==true?null:this.specifictraining()} className={`specific1 text ${this.props.disabled?'disabled':''}`} style={{width:this.props.width,height:this.props.height,backgroundColor:(this.props.active?this.props.activecolor:(this.props.countactive?this.props.activecolor:''))}}>
		 {this.props.countactive&&
		 <div className="circleProp"><span>{this.props.countactive}</span></div>
			}
		<div className={`${this.props.svg?'svgblock activesvg':'specificimage'}`} style={{filter:this.props.active?this.props.filter:(this.props.countactive?this.props.filter:'')}}>{this.props.img}</div>

		</div>
		}
		<div className={`under-text ${this.props.disabled?'disabled':''}`}>{this.props.undertext}</div>
		<div className={this.props.active && this.props.Skew?"main-menu main-menu-select1":"main-menu nomenuselect"}>
		</div>
		</div>		
		)
	
}
}
export default Specific;

