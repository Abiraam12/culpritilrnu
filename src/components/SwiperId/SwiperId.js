import React,{useState} from 'react';
import  './SwiperId.css';
import Swiper from 'react-id-swiper';
import { Navigation } from 'swiper/dist/js/swiper.esm';
import  ArrowIcon  from '../../images/right.png';
import Square from '../square/square';


const SwiperId = (props) => {
console.table(props)
  const [swiper, updateSwiper] = useState(null);
 
  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
 
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };
		  const params = {
			slidesPerView:'auto',
			spaceBetween:12,
			freeMode:true,
			pagination:{
				el:'.swiper-pagination',
				clickable:true,
			},
    };
		return (
			<div className="swiper_components" >
			<div className="width_80">
			<div style={styles.col3} className="col3">
			<div className="you_may">
			Your <span style={{color:" #0f3eb0",fontSize:"bold"}}>Favourites Trainer/Coach </span>
			</div>
			</div>
			<div style={styles.row} className="homesliderrow">
			
			<div style={styles.col6} className="col6">

				{props.lookArray&&props.lookArray.length>0&&
					<Swiper {...params} getSwiper={updateSwiper} modules={[Navigation]}>
			
				{props.lookArray && props.lookArray.map((item,i) => 
						<div className="lookingforswiper" style={styles.imagecontainer}>
							<Square  width="120px" minHeight="100px" text={item.value} textcolor={'#ffffff'} backgroundColor={'#0f3eb0'}/>
						</div>
		
					)}
    		</Swiper>
    	}
			</div>
			<div className="col05 swiper_right_arrow" style={styles.image_div}>
				<img src={ArrowIcon} className="" onClick={goNext} style={styles.image_img}/>
			</div>
			</div>
			</div>
			</div>
		);
	}
	export default SwiperId;
const styles={
	rotateimg:{
			    width:'2.5vw',
    height:'2.5vw'
	},
	container:{
		borderBottom:'0.3px solid #c8c6c6'
	},
	row:{
		display:'flex',
		alignItems:'center'
	},
	col3:{
		display:'flex',
		flexDirection:'column',
		justifyContent:'flex-end',
		width:'100%'
	},
	col6:{
		
		width:'85%'
	},
	homeslidetext:{
		color:'orange',
		paddingBottom:4
	},
	homeslidesubtext:{
		color:'orange'
	},
	imagehomecontainer:{
		width:90,
		height:90
	},
	image:{
		width:'100%',
		height:'100%',
		borderRadius:5
	},
	image_img:{
		width:'100%',
		height:'100%',
	},
	imagecontainer:{
		width:90,
		height:90,
	},
	image_div:{
		width:'35px',
		height:'100%',
	},
	
}





