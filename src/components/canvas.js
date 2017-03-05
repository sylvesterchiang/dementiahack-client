import React, { Component } from 'react';

export default class Canvas extends Component {

	render() {
		return (
			//returns canvas
			<div onClick={()=>this.props.clickEvent()} >
				<img src='../../img/canvas.png' width='400px' />
			</div>
		)
	}
}