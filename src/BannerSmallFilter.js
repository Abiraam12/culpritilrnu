import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
const Blue_Holder=require("./icon/Blue_Holder.svg");
const Add_plus=require("./icon/Add_Plus.svg");
const menu = (
  <div>
    
  </div>
);

// const menu = (
//   <Menu>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" >Type1</a>
//     </Menu.Item>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" >Type2</a>
//     </Menu.Item>
//     <Menu.Item>
//       <a target="_blank" rel="noopener noreferrer" >Type3</a>
//     </Menu.Item>
//   </Menu>
// );

const menu1 = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" >USA</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" >California</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" >California</a>
    </Menu.Item>
  </Menu>
);
class BannerSmallFilter extends React.Component{
	render(){
		return(
<div className="slidefiltermain smallban" >
<div className="slideinsidefilter">
<div className="slidedata firstborderradius"><p className="sction1pcls">List Your <br/> Training Venue</p></div>
<div className="slidedata directioncolumn paddingRighslid"><div class="sec2train">Training</div>
<Dropdown overlay={menu}>
    <a className="ant-dropdown-link" >
      Venue Type <Icon type="down"  />
    </a>
  </Dropdown></div>
<div className="slidedata directioncolumn paddingRighslid"><div class="sec2train">Training</div>
<Dropdown overlay={menu}>
    <a className="ant-dropdown-link" >
      Venue Facility <Icon type="down"  />
    </a>
  </Dropdown></div>
<div className="slidedata paddingRighslid"><Dropdown overlay={menu}>
    <a className="ant-dropdown-link" >
      Venue Location <Icon type="down"  />
    </a>
  </Dropdown></div>
<div className="rightplusdata">
<img src={Blue_Holder} style={{height:'10vh'}}/>
<div className="add_plus">
<img src={Add_plus} style={{width:'100%',height:'100%'}}/>
</div>
</div>
</div>

</div>
			)
	}
}
export default BannerSmallFilter;