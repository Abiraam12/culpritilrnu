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
 style={{ ...style, display: "block" }}
onClick={onClick} >
<img src={RightArrow} alt="Arrow Text" style={{width:'25px',height:'25px','margin-left': '-20px'}}/>
</div>
    )
} 

export default class MostDemandLocation extends React.Component{
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
      dotsClass: "slick-dots slick-special1",
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <LeftNavButton />,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
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
            slidesToShow: 3,
            slidesToScroll: 3,
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
    return(
      <div>
      <div style={{width:'100%',backgroundColor:'#f7f7f7'}}>
<h1 class="h1style">Most demand locations <i class="fas fa-chevron-down learndown"></i> </h1>
<div style={{width:'90%',marginLeft:'5%'}}>
<Card>
 <div style={{flex:1}}>
      <div style={{flex:.3}}>
        <div class="homemakers ">NewYork <span className="changeclr">Change</span></div>
         <Button className="training_btn">12 Trainings<span class="traingspan">&nbsp;Today</span></Button>
              </div>
      
      
      </div>
      <div style={{marginTop:'10px'}}>
<Slider {...settings}>
         <div>
           <img src={cooking} alt="Arrow Text" class="specialimg"/>
          </div>
          <div>
           <img src={guitar} alt="Arrow Text" class="specialimg"/>
          </div>
          <div>
           <img src={meeting_room} alt="Arrow Text" class="specialimg"/>
          </div>
          <div>
           <img src={gd} alt="Arrow Text" class="specialimg"/>
          </div>
    </Slider>
    </div>
        </Card>

</div>
    </div>  
    {/*  
<div style={{width:'100%',height:'45vh',backgroundColor:'#fff'}}>
       <div style={{width:'80%',marginLeft:'10%'}}>
        <Slider {...settings}>
        <Card></Card>*/}
     {/*   <div class="cardpadd">
            <Card
      // title="Default size card"
      // extra={<a href="#">More</a>}
      
    >
    <div style={{flex:1}}>
      <div style={{flex:.3}}>
        <div class="homemakers">Master Chef</div>
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
<div className="plusiconup"><Icon type="plus" style={{color:'orange'}} onClick={this.plusClick} /></div>
      </div>
      </div>
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={cooking} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
<div className="plusiconup"><Icon type="plus" style={{color:'orange'}} onClick={this.plusClick} /></div>
      </div>
      </div>
          <div style={{flex:1}}>
      
      <div style={{flex:.7,marginTop:'5px',borderRadius:'50px',position:'relative'}}>
      <img src={guitar} alt="Arrow Text" class="specialimg"/>
<Rate className="rateup" allowHalf defaultValue={3.5} />
<div className="plusiconup"><Icon type="plus" style={{color:'orange'}} onClick={this.plusClick} /></div>
      </div>
      </div>
    </Slider>
    </Card>
    </div> 
       
          

          
 

     
          
          
        </Slider>
        </div>
      </div>*/}
      </div>
      )
  }
}
