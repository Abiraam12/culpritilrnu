import React from 'react';
import Swiper from 'react-id-swiper';
 

export default class HomeSwiper extends React.Component {
	

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Swiper>
    {this.props.list.map((obj)=>{
    	return(
    		<div style={styles.imagecontainer} className="imageContainer">
    		<img style={styles.image} src={obj.img}/>
    		</div>
    		)
    })}
  </Swiper>
		);
	}
}
const styles={
	imagecontainer:{
		height:190
	},
	image:{
		width:'100%',
		height:'100%'
	}

}

