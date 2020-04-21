import React, { Component } from "react";
import Slider from "react-slick";
const Background=require("./img/left.png");
const RightArrow=require("./img/right.png");
function LeftNavButton(props){
	const {className,style,onClick} =props;
	return(

<div
//className="slick-arrow"
className={`${className} rightpercent`}
 style={{ ...style, display: "block", marginRight:'24%'}}
onClick={onClick} >
<img src={RightArrow} alt="Arrow Text" style={{width:'30px',height:'30px'}}/>
</div>
		)
} 
function RightNavButton(props){
	const {className,style,onClick} =props;
	return(

<div
//className="slick-arrow"
// style={{...style}}
className={`${className} leftpercent`}
 style={{ ...style, display: "block" ,marginLeft:'24%'}}
onClick={onClick} >
<img src={Background} alt="Arrow Text" style={{width:'30px',height:'30px'}}/>
</div>
		)
} 
export default class LearnSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <LeftNavButton />,
       prevArrow: <RightNavButton />,
    };
    return (
      <div>
      <div class="sliderclass">
        <Slider {...settings}>
          <div className="slidertext">
            <h3 ><span class="earnspancls" >Earn to Learn</span> <span className='dlreansldr'>$</span><span class="earnspancls1" >Learn to Earn</span></h3> 
          </div>
          <div>
             <h3 ><span class="earnspancls" >Earn to Learn</span> <span className='dlreansldr'>$</span><span class="earnspancls1" >Learn to Earn</span></h3>
          </div>
          <div>
             <h3 ><span class="earnspancls" >Earn to Learn</span> <span className='dlreansldr'>$</span><span class="earnspancls1" >Learn to Earn</span></h3>
          </div>
          <div>
             <h3 ><span class="earnspancls" >Earn to Learn</span> <span className='dlreansldr'>$</span><span class="earnspancls1" >Learn to Earn</span></h3>
          </div>
          <div>
            <h3 ><span class="earnspancls" >Earn to Learn</span> <span className='dlreansldr'>$</span><span class="earnspancls1" >Learn to Earn</span></h3>
          </div>
          <div>
             <h3 ><span class="earnspancls" >Earn to Learn</span> <span className='dlreansldr'>$</span><span class="earnspancls1" >Learn to Earn</span></h3>
          </div>
        </Slider>
      </div>
      <div class="lightborder"></div>
      </div>
    );
  }
}