import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

export default class CustomizePage extends Component {
	render() {
		return (
			<DocumentTitle title="Build Form">
			<div className='container'>
				<div className='row text-center'>
					<h1>Build Cognitive Assessment Form</h1>
					<div>You can customize shit! Ha!</div>
				</div>
			</div>
			</DocumentTitle>
		)
	}
}