import React, { Component } from 'react';
import { Card} from 'antd';
import Slider from "react-slick";
import { Container, Row, Col } from 'reactstrap';
const Background=require("./img/left.png");
const RightArrow=require("./img/right.png");
const Join_group=require("./icon/Join_group_study.svg");
// const Join_group=require("./img/smallbanner.png");

function LeftNavButton(props){
	const {className,style,onClick} =props;
	return(

<div
//className="slick-arrow"
className={className}
 style={{ ...style, display: "block" }}
onClick={onClick} >
<img src={RightArrow} alt="Arrow Text" style={{width:'45px',height:'45px'}}/>
</div>
		)
} 
function RightNavButton(props){
	const {className,style,onClick} =props;
	return(

<div
//className="slick-arrow"
// style={{...style}}
className={className}
 style={{ ...style, display: "block" }}
onClick={onClick} >
<img src={Background} alt="Arrow Text" style={{width:'45px',height:'45px'}}/>
</div>
		)
} 
export default class StudyCenters extends React.Component{
	render(){
		const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: <RightNavButton />,
    };

		return(
<div>
<div class="studycenter">
	<div class="studycentermain">
		
<Card style={{height:'100%'}} className="crdbdy">

<div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%',flexWrap:'wrap'}}>
<div className="studycenter100 centertext" style={{width:'20%',height:'100%',flex:1,justifyContent:'center'}}>
<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
<div style={{'line-height':'33px'}}>
          <div class="studcls">Study  <span class="centercls">Centers</span></div>
          

          </div></div>
</div>
<div  className="studycenter100" style={{width:'80%',height:'100%'}}>
<div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}>
<img src={Join_group} alt="Arrow Text" class="join_group"/>

</div>
<div class="joingroupsty"><span>Join</span> <span class="grupstudyspan">GroupStudy</span><span class="joinspan"><i class="fas fa-chevron-right "></i></span></div>
</div></div>
	{/*<Row>
          <Col xs="12" md="4" sm="6" lg="4" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>

        { /* <div style={{'line-height':'33px'}}>
          <span class="studcls">Study</span> <br/>
          	<span class="centercls">Centers</span>

          </div>
          </Col>
          <Col xs="12" md="8" sm="6" lg="8">
{/*<Slider {...settings}>
          <div >
          <img src={Join_group} alt="Arrow Text" class="join_group"/>
          </div>
          </Slider>
          </Col>
          
        </Row>*/}
</Card>
	</div>
</div>
	<div class="lightborder"></div></div>
			)
	}

}