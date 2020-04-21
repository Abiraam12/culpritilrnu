import React from 'react';
import ControlledLottie from '../../../src/components/LottieComp/LottieComp';
import calendarData from '../../FormJSON/calendar.json' 
export default class NoAvailability extends React.Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="Noavailability">
			<p>Availability Not Updated</p>
				<ControlledLottie animationData={calendarData}/>
				<div className="controlledDiv">
				<p>Venue host  has not updated the availability</p>
				<p>Please add your availability</p>
				</div>
			</div>
		);
	}
}
