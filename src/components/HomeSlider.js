import React,{useState} from 'react';
import colors from '../helpers/colors.js';
import Hall from '../img/hall.png';
import ArrowIcon from '../icon/arrow_icon.svg';
import Swiper from 'react-id-swiper';
import { Navigation } from 'swiper/dist/js/swiper.esm';

const HomeSlider = (props) => {

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
  	freeMode: true,
  	slidesPerView: 'auto',
      spaceBetween: 12,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },  
    };
		return (
			<div style={styles.container}>
			<div style={styles.row} className="homesliderrow">
			<div style={styles.col3} className="col3">
			<p style={styles.homeslidetext} className="homeslidetext removemargin">
			{props.text}
			</p>
			<p style={styles.homeslidesubtext} className="homeslidesubtext removemargin">
			{props.subtext}
			{props.arrow&&
			<img src={ArrowIcon} style={styles.rotateimg} className="rotate90minus"/>
		}
			</p>
			</div>
			<div style={styles.col6} className="col6">
				<Swiper {...params} getSwiper={updateSwiper} modules={[Navigation]}>
			<div style={styles.imagehomecontainer} className="imagehomecontainer">
    		<img style={styles.image} src={Hall}/>
    		</div>
    		<div style={styles.imagehomecontainer} className="imagehomecontainer">
    		<img style={styles.image} src={Hall}/>
    		</div>
    		<div style={styles.imagehomecontainer} className="imagehomecontainer">
    		<img style={styles.image} src={Hall}/>
    		</div>
    		<div style={styles.imagehomecontainer} className="imagehomecontainer">
    		<img style={styles.image} src={Hall}/>
    		</div>
    		</Swiper>
			</div>
			<div className="col05">
			<img src={ArrowIcon} className="rotate90minus" onClick={goNext}/>
			</div>
			</div>
			</div>
		);
	}
	export default HomeSlider;
const styles={
	rotateimg:{
			width: '2.5vw',
    		height: '2.5vw'
	},
	container:{
		borderBottom:'0.3px solid #c8c6c6'
	},
	row:{
		display:'flex',
		// alignItems:'center'
	},
	col3:{
		display:'flex',
		flexDirection:'column',
		justifyContent:'flex-end'
		// flex:0.4
	},
	col6:{
		// flex:0.6
	},
	homeslidetext:{
		color:colors.blueactive,
		paddingBottom:4
	},
	homeslidesubtext:{
		color:colors.orange
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
	
}
