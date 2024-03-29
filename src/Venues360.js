import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Slider from "react-slick";
import { Card,Rate,Row,Col,Icon  } from 'antd';
import { FontAwesome  } from "react-fontawesome";
// import "node_modules/video-react/dist/video-react.css"; 
import { Player,PosterImage ,BigPlayButton } from 'video-react';
const Background=require("./img/left.png");
const RightArrow=require("./img/right.png");
const Videopost2=require("./icon/video_post2.svg");
const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string
};
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
export default class Venues360 extends React.Component{
	constructor(props){
		super(props);
		this.state={

		}
	}
	render(){
		const settings = {
      dots: true,
      infinite: false ,
      speed: 500,

      slidesToShow: 3,
      slidesToScroll: 3,
      draggable: false,
       nextArrow: <LeftNavButton />,
       prevArrow: <RightNavButton />,
       
    };
		return(
			<div>
			
<div style={{width:'100%',height:'45vh',backgroundColor:'#fff'}}>
<h1 class="h1style">Venues 360 View <i class="fas fa-chevron-down learndown"></i>  </h1>
       <div style={{width:'80%',marginLeft:'10%'}}>
        <Slider {...settings} edgeFriction={0}>
          <div class="cardpadd">
            <Card
      // title="Default size card"
      // extra={<a href="#">More</a>}
      
    ><div style={{flex:1,marginTop:'10px'}}>
      <div style={{flex:.3}}>
      	<div class="alex" >Alexandria</div>
      
      	<Row gutter={24}>
      <Col className="gutter-row" span={14}>
       <Rate  className="ratecolor" allowHalf defaultValue={4} />
      </Col>
      <Col className="gutter-row" span={10} style={{textAlign:'right',    marginLeft: '-10px','font-weight': 'bold',padding: '5px'}}>
       19 Reviews
      </Col>
      </Row>
      </div>
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px'}}>
      <Player
      
      poster={Videopost2}
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >	 
   
    <BigPlayButton position="center" />
    </Player>
      </div>
      </div>
    </Card>
          </div>
          <div class="cardpadd">
           <Card
      // title="Default size card"
      // extra={<a href="#">More</a>}
      
    ><div style={{flex:1,marginTop:'10px'}}>
      <div style={{flex:.3}}>
      	<div class="alex">Algona</div>
      
      	<Row  gutter={24}>
      <Col className="gutter-row" span={14}>
       <Rate className="ratecolor" allowHalf defaultValue={4} />
      </Col>
      <Col className="gutter-row" span={10} style={{textAlign:'right',    marginLeft: '-10px','font-weight': 'bold',padding: '5px'}}>
       92 Reviews
      </Col>
      </Row>
      </div>
      <div style={{flex:.7,marginTop:'5px'}}>
      <Player
      
      poster="https://www.paladinsoftwares.com/wp-content/uploads/2018/03/pexels-photo-374899-1.jpeg"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >	 
   
    <BigPlayButton position="center" />
    </Player>
      </div>
      </div>
    </Card>
          </div>
          <div class="cardpadd">
            <Card
       
      
    ><div style={{flex:1,marginTop:'10px'}}>
      <div style={{flex:.3}}>
      	
      <div class="alex">Adams Town</div>
      	<Row gutter={24}>
      <Col className="gutter-row" span={14}>
       <Rate className="ratecolor" allowHalf defaultValue={4} />
      </Col>
      <Col className="gutter-row" span={10} style={{textAlign:'right',    marginLeft: '-10px','font-weight': 'bold',padding: '5px'}}>
       37 Reviews
      </Col>
      </Row>
      </div>
      <div style={{flex:.7,marginTop:'5px'}}>
      <Player
      
      poster="https://www.paladinsoftwares.com/wp-content/uploads/2018/03/pexels-photo-374899-1.jpeg"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >	 
   
    <BigPlayButton position="center" />
    </Player>
      </div>
      </div>
    </Card>
          </div>
          <div class="cardpadd">
           <Card
      // title="Default size card"
      // extra={<a href="#">More</a>}
      
    ><div style={{flex:1,marginTop:'10px'}}>
      <div style={{flex:.3}}>
      	<div class="alex">How to Earn to Learn</div>
      
      	<Row gutter={24}>
      <Col className="gutter-row" span={14}>
       <Rate className="ratecolor" allowHalf defaultValue={3.5} />
      </Col>
      <Col className="gutter-row" span={10} style={{textAlign:'right',    marginLeft: '-10px','font-weight': 'bold',padding: '5px'}}>
       19 Reviews
      </Col>
      </Row>
      </div>
      <div style={{flex:.7,marginTop:'5px'}}>
      <Player
      
      poster="https://www.paladinsoftwares.com/wp-content/uploads/2018/03/pexels-photo-374899-1.jpeg"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >	 
   
    <BigPlayButton position="center" />
    </Player>
      </div>
      </div>
    </Card>
          </div>
          <div class="cardpadd">
           <Card
      // title="Default size card"
      // extra={<a href="#">More</a>}
      
    ><div style={{flex:1,marginTop:'10px'}}>
      <div style={{flex:.3}}>
      	<div style={{justifyContent:'flex-start',fontSize:'18px',color:'#1f459e',}}>How to Earn to Learn</div>
      
      	<Row gutter={24}>
      <Col className="gutter-row" span={14}>
       <Rate className="ratecolor" allowHalf defaultValue={3.5} />
      </Col>
      <Col className="gutter-row" span={10} style={{textAlign:'right',    marginLeft: '-10px','font-weight': 'bold',padding: '5px'}}>
       19 Reviews
      </Col>
      </Row>
      </div>
      <div style={{flex:.7,marginTop:'5px'}}>
      <Player
      
      poster="https://www.paladinsoftwares.com/wp-content/uploads/2018/03/pexels-photo-374899-1.jpeg"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >	 
   
    <BigPlayButton position="center" />
    </Player>
      </div>
      </div>
    </Card>
          </div>
          <div class="cardpadd">
           <Card
      // title="Default size card"
      // extra={<a href="#">More</a>}
      
    ><div style={{flex:1,marginTop:'10px'}}>
      <div style={{flex:.3}}>
      	<div style={{justifyContent:'flex-start',fontSize:'18px',color:'#1f459e',}}>How to Earn to Learn</div>
      
      	<Row gutter={24}>
      <Col className="gutter-row" span={14}>
       <Rate className="ratecolor" allowHalf defaultValue={3.5} />
      </Col>
     <Col className="gutter-row" span={10} style={{textAlign:'right',    marginLeft: '-10px','font-weight': 'bold',padding: '5px'}}>
       19 Reviews
      </Col>  
      </Row>
      </div>
      <div style={{flex:.7,marginTop:'5px'}}>
      <Player
      
      poster="https://www.paladinsoftwares.com/wp-content/uploads/2018/03/pexels-photo-374899-1.jpeg"
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    >	 
   
    <BigPlayButton position="center" />
    </Player>
      </div>
      </div>
    </Card>
          </div>
          
          
        </Slider>
        </div>
      </div>
      </div>
			)
	}
}
