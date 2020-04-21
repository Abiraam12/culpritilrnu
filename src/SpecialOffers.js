import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Slider from "react-slick";
import { Card,Rate,Row,Col,Icon,Button  } from 'antd';
import { FontAwesome  } from "react-fontawesome";
// import "node_modules/video-react/dist/video-react.css"; 
import { Player,PosterImage ,BigPlayButton } from 'video-react';
const guitar=require("./icon/guitar.svg");
const table=require("./icon/chair_table.svg");
const gd=require("./icon/group_discussion.svg");
const girl=require("./icon/girl_venue.svg");
const meeting_room=require("./icon/meeting_room.svg");
const uncle=require("./icon/uncle.svg");
const boy=require("./icon/boy.svg");
const RightArrow=require("./img/forward_arrow.png");
const cooking=require("./icon/cooking_cls.svg");
const corp_meeting=require("./img/corporate_meet.jpg");
const corp=require("./img/corporate_meeting.jpg");
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
export default class SpecialOffers extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
 
  render(){
    const settings = {
      dots: true,
       dotsClass: "slick-dots slick-special",
      infinite: false ,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      rows: 2,
       draggable: false,
       responsive: [
       {
          breakpoint: 1490,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 1024,
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
            initialSlide: 2,
            variableWidth:true
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
      // slidesPerRow: 2
       
    };
    const firstnode = {
      dots: true,
      dotsClass: "slick-dots slick-special1",
      infinite: true ,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
       nextArrow: <LeftNavButton />,
       responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            variableWidth:true
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
    const secondnode = {
      dots: true,
      dotsClass: "slick-dots slick-special2",
      infinite: true ,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
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
      
<div style={{width:'100%',backgroundColor:'#f7f7f7'}}>
<h1 class="h1style">Your Special offers <i class="fas fa-chevron-down learndown"></i> </h1>
       <div style={{width:'90%',marginLeft:'5%'}}>
        <Slider {...settings}  className="flexWidth">
        <div class="cardpadd">
            <Card
      // title="Default size card"
      // extra={<a href="#">More</a>}
      
    >
    <div style={{flex:1}}>
      <div style={{flex:.3,}} className="widthCalc">
        <div class="homemakers">Home makers Time</div>
      <Button className="training_btn">12 Trainings<span class="traingspan">&nbsp;Today</span></Button>
        <Row gutter={24}>
      <Col className="gutter-row addtrain" span={14} >
    Add my Training <i class="fas fa-chevron-right addtrainspan"></i> 
      </Col>
      <Col className="gutter-row" span={10} style={{textAlign:'right','font-weight': 'bold',padding: '5px',marginLeft:'-17px'}}>
      
      </Col>
      </Row>
      </div>
      
      
      </div>

<Slider {...secondnode}>
  
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
     <img src={guitar} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
      </div>
      </div>
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={cooking} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
      </div>
      </div>
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={guitar} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
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
        <div class="homemakers">Best Trainers</div>
      <Button className="training_btn"><span class="traingspan">Minimum</span>&nbsp;  $500</Button>
        <Row gutter={24}>
      <Col className="gutter-row addtrain" span={14} >
    Join as Trainer <i class="fas fa-chevron-right addtrainspan"></i> 
      </Col>
      <Col className="gutter-row" span={10} style={{textAlign:'right','font-weight': 'bold',padding: '5px',marginLeft:'-17px'}}>
      
      </Col>
      </Row>
      </div>
      
      
      </div>

<Slider {...secondnode}>
  
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={uncle} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
      </div>
      </div>
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={boy} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
      </div>
      </div>
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={boy} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
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
        <div class="homemakers homeMakersNew">Low Rate Card Venues</div>
      <Button className="training_btn">$450 /<span class="traingspan">&nbsp; Day</span></Button>
        <Row gutter={24}>
      <Col className="gutter-row addtrain" span={14} >
    Add My Course <i class="fas fa-chevron-right addtrainspan"></i> 
      </Col>
      <Col className="gutter-row" span={10} style={{textAlign:'right','font-weight': 'bold',padding: '5px',marginLeft:'-17px'}}>
      
      </Col>
      </Row>
      </div>
      
      
      </div>

<Slider {...secondnode}>
  
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={meeting_room} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
      </div>
      </div>
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={gd} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
      </div>
      </div>
      <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={guitar} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
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
        <div class="homemakers homeMakersNew">Venues Around You</div>
     <Button className="training_btn"><span style={{opacity:'.7'}}>With in </span> &nbsp;2 Miles</Button>
        <Row gutter={24}>
      <Col className="gutter-row addtrain" span={14} >
    Add Your Venue <i class="fas fa-chevron-right addtrainspan"></i> 
      </Col>
      <Col className="gutter-row" span={10} style={{textAlign:'right','font-weight': 'bold',padding: '5px',marginLeft:'-17px'}}>
      
      </Col>
      </Row>
      </div>
      
      
      </div>

<Slider {...secondnode}>
  
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={table} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
      </div>
      </div>
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={girl} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
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
        <div class="homeMakersNew" style={{justifyContent:'flex-start',fontSize:'22px',color:'#1f459e'}}>Venues Around You</div>
      
        <Row gutter={24}>
      <Col className="gutter-row" span={14} style={{color:'orange'}}>
     Add Your Venue <span style={{color:'#8a8a8a','font-weight':'bold'}}> ></span>
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
      <img src={cooking} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
      </div>
      </div>
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={guitar} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
      </div>
      </div>
          
    </Slider>
    </Card>
    </div>

          
        </Slider>
        </div>
      </div>
      <div class="lightborder"></div>
      </div>
      )
  }
}
