import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import FlatButton from 'material-ui/FlatButton';
import { cyan500 } from 'material-ui/styles/colors';
import { browserHistory } from 'react-router';

export default class OnePage extends Component {

	constructor(props){
		super(props);
	}

	render() {
		return (
			<DocumentTitle title="Question One">
				<div className="container">
					<div className="row">
						<div className="col-md-offset-3 col-md-6">
							<div className="text-center">
								<h1>Question One: Memory Recall</h1>
								<h4>Here are a list of words that will appear on the screen, study them and you will
								be asked to recall them on the next page.</h4>
							</div>
						</div>
					</div>

					<div className="row text-center" style={{fontSize:'40px'}}>FACE</div>
					<div className="row text-center" style={{fontSize:'40px'}}>VIOLET</div>
					<div className="row text-center" style={{fontSize:'40px'}}>CHURCH</div>
					<div className="row text-center" style={{fontSize:'40px'}}>DAISY </div>
					<div className="row text-center" style={{fontSize:'40px'}}>RED</div>

					<div className="row">
						<div className="text-center">
							<FlatButton backgroundColor="cyan500" label="Ready" onClick={()=>browserHistory.push('/two')} />
						</div>
					</div>
				</div>
			</DocumentTitle>
		)
	}
}