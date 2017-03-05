import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

export default class ThanksPage extends Component {
	render() {
		return (
			<DocumentTitle title="Thank You">
				<div className='container'>
					<div className="row">
						<div className="col-md-offset-1 col-md-10">
							<div className="text-center">
								<h1 style={{'fontSize': '90px'}}>You have finished the cognitive evaluation.</h1>
								<h2 style={{'fontSize': '60px'}}>Please complete any other assessments you have remaining. Thank you.</h2>
								<img height='50px' src='../../../img/audio.png' />
							</div>
						</div>
					</div>
				</div>
			</DocumentTitle>
		)
	}
}