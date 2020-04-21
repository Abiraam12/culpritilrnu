import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Slider from "react-slick";
import { Card,Rate,Row,Col,Icon,Button  } from 'antd';
import { FontAwesome  } from "react-fontawesome";
// import "node_modules/video-react/dist/video-react.css"; 
import { Player,PosterImage ,BigPlayButton } from 'video-react';
const RightArrow=require("./img/forward_arrow.png");
const guitar=require("./icon/guitar.svg");
const gd=require("./icon/group_discussion.svg");
const cooking=require("./icon/cooking_cls.svg");
const girl=require("./icon/girl_venue.svg");
const meeting_room=require("./icon/meeting_room.svg");
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
 style={{ ...style, display: "block",marginRight:'9px' }}
onClick={onClick} >
<img src={RightArrow} alt="Arrow Text" style={{width:'25px',height:'25px','margin-left': '-20px'}}/>
</div>
    )
} 

export default class MostDemandSkills extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
   plusClick =() =>{
    alert("hii");
  }
  render(){
    const settings = {
      dots: true,
      infinite: false ,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      draggable: false,
       responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            centerMode:true,
            dots: true
          }
        },
         {
          breakpoint: 1100,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode:true,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            centerMode:false,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
       
    };
    const firstnode = {
      dots: true,
      dotsClass: "slick-dots slick-first",
      infinite: true ,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      draggable: false,
       nextArrow: <LeftNavButton />,
       
    };
    const secondnode = {
      dots: true,
      dotsClass: "slick-dots slick-second topslickdots",
      infinite: true ,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      draggable: false,
       nextArrow: <LeftNavButton />,
         responsive: [
       {
          breakpoint: 1450,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
       
    };
    return(
      <div>
      
<div style={{width:'100%',backgroundColor:'#fff'}}>
<h1 class="h1style">Most demanding Skills <i class="fas fa-chevron-down learndown"></i> </h1>
       <div style={{width:'90%',marginLeft:'5%'}}>
        <Slider {...settings}>
        <div class="cardpadd">
            <Card
      // title="Default size card"
      // extra={<a href="#">More</a>}
      
    >
    <div style={{flex:1}}>
      <div style={{flex:.3}}>
        <div class="homemakers homeMakersNew">Master Chef</div>
        <Row gutter={24}>
      
      <Col className="gutter-row addtrain" span={14} >
    More detail about the skill <i class="fas fa-chevron-right addtrainspan"></i> 
      </Col>
      <Col className="gutter-row" span={10} style={{textAlign:'right','font-weight': 'bold',padding: '5px',marginLeft:'-17px'}}>
       78 Reviews
      </Col>
      </Row>
      </div>
      
      
      </div>

<Slider {...secondnode}>
  
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
     <img src={guitar} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
<div className="plusiconup"><Icon type="plus" className="plusiconcls" style={{color:'orange'}} onClick={this.plusClick} /></div>
      </div>
      </div>
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={cooking} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
<div className="plusiconup"><Icon type="plus" className="plusiconcls" style={{color:'orange'}} onClick={this.plusClick} /></div>
      </div>
      </div>
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={guitar} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
<div className="plusiconup"><Icon type="plus" className="plusiconcls" style={{color:'orange'}} onClick={this.plusClick} /></div>
      </div>
      </div>
    </Slider>
    </Card>
    </div>
       
           <div class="cardpadd">
            <Card
      // title="Default size card"
      // extra={<a href="#">More</a>}
      
    >
   
      <div style={{flex:1}}>
      <div style={{flex:.3}}>
      <div class="homemakers homeMakersNew">Corporate Language</div>
      
        <Row gutter={24}>
      
      <Col className="gutter-row addtrain" span={14} >
    More detail about the skill <i class="fas fa-chevron-right addtrainspan"></i> 
      </Col>
      <Col className="gutter-row" span={10} style={{textAlign:'right','font-weight': 'bold',padding: '5px',marginLeft:'-17px'}}>
       35 Reviews
      </Col>
      </Row>
      </div>
      
      
      </div>

<Slider {...secondnode}>
  
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
     <img src={meeting_room} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
<div className="plusiconup"><Icon type="plus" className="plusiconcls" style={{color:'orange'}} onClick={this.plusClick} /></div>
      </div>
      </div>
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={gd} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
<div className="plusiconup"><Icon type="plus" className="plusiconcls" style={{color:'orange'}} onClick={this.plusClick} /></div>
      </div>
      </div>
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={gd} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
<div className="plusiconup"><Icon type="plus" className="plusiconcls" style={{color:'orange'}} onClick={this.plusClick} /></div>
      </div>
      </div>
    </Slider>
    </Card>
    </div>

          
 <div class="cardpadd">
            <Card
      // title="Default size card"
      // extra={<a href="#">More</a>}
      
    >
   
      <div style={{flex:1}}>
      <div style={{flex:.3}}>
      <div class="homemakers homeMakersNew">Corporate Language</div>
      
        <Row gutter={24}>
      
      <Col className="gutter-row addtrain" span={14} >
    More detail about the skill <i class="fas fa-chevron-right addtrainspan"></i> 
      </Col>
      <Col className="gutter-row" span={10} style={{textAlign:'right','font-weight': 'bold',padding: '5px',marginLeft:'-17px'}}>
       35 Reviews
      </Col>
      </Row>
      </div>
      
      
      </div>

<Slider {...secondnode}>
  
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
     <img src={meeting_room} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
<div className="plusiconup"><Icon type="plus" className="plusiconcls" style={{color:'orange'}} onClick={this.plusClick} /></div>
      </div>
      </div>
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={gd} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
<div className="plusiconup"><Icon type="plus" className="plusiconcls" style={{color:'orange'}} onClick={this.plusClick} /></div>
      </div>
      </div>
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={gd} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
<div className="plusiconup"><Icon type="plus" className="plusiconcls" style={{color:'orange'}} onClick={this.plusClick} /></div>
      </div>
      </div>
    </Slider>
    </Card>
    </div>

     
          
          
        </Slider>
        </div>
      </div>
      </div>
      )
  }
}
