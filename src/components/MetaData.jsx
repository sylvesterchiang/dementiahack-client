import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import { cyan500 } from 'material-ui/styles/colors';

export default class Next extends Component {

	constructor(){
		super();
		injectTapEventPlugin();
    	this.state = {
	      answers: {},
	      currentQuestion: 0
		}
	}

	render() {
		return (
			<div></div>
		)
	}
}