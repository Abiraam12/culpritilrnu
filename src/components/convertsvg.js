import React from 'react';
import { Samy, SvgProxy } from 'react-samy-svg';
export default class ConvertSVG extends React.Component {
	

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Samy className={`activepath ${this.props.activecolor}`} path={this.props.svgpath}>
		</Samy>
		);
	}
}
