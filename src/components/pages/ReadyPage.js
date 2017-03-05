import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';

export default class ReadyPage extends Component {
	render() {
		return (
			<DocumentTitle title="Ready">
				<div className='container'>
					<div className="row">
						<div className="col-md-offset-1 col-md-10">
							<div className="text-center">
								<h1 style={{'fontSize': '90px'}}>This is a cognitive evaluation.</h1>
								<h2 style={{'fontSize': '60px'}}>Please fill out the evluation to the best of your abilities. Start when you are ready! <img height='50px' src='../../../img/audio.png' /></h2>
							</div>
						</div>
					</div>

					<div className="row" style={{'marginTop': '50px'}}>
						<div className="text-center">
							<FlatButton backgroundColor="#29B6F6" label="READY" style={{'height': '70px', 'borderRadius': '10px'}} labelStyle={{'color':'white', 'fontSize': '80px'}} onClick={()=>browserHistory.push('/four')} />
						</div>
					</div>
				</div>
			</DocumentTitle>
		)
	}
}