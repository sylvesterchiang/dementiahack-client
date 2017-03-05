import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

export default class ThanksPage extends Component {
	render() {
		return (
			<DocumentTitle title="Thank You">
				<div className='container'>
					<div className="row">
						<div className="col-md-offset-3 col-md-6">
							<div className="text-center">
								<h1>You have finished the cognitive evaluation.</h1>
								<h2>Please complete any other assessments you have remaining. Thank you.</h2>
							</div>
						</div>
					</div>
				</div>
			</DocumentTitle>
		)
	}
}