import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

export default class ReadyPage extends Component {
	render() {
		return (
			<DocumentTitle title="Ready">
				<div className='container'>
					<div className="row">
						<div className="col-md-offset-3 col-md-6">
							<div className="text-center">
								<h1>This is a cognitive evaluation.</h1>
								<h2>Please fill out the evluation to the best of your abilities. Pleas start when you are ready!</h2>
							</div>
						</div>
					</div>

					<div className="row" style={{'marginTop': '50px'}}>
						<div className="text-center">
							<FlatButton backgroundColor="#29B6F6" label="Done" labelStyle={{'color':'white'}} onClick={()=>browserHistory.push('/one')} />
						</div>
					</div>
				</div>
			</DocumentTitle>
		)
	}
}