import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';

export default class ThreePage extends Component {
	render() {
		return (
			<DocumentTitle title="Question Three">
				<div className='container'>
					<div className="row">
						<div className="col-md-offset-3 col-md-6">
							<div className="text-center">
								<h1>Question Two: Naming</h1>
								<h2>Name the object or animal you see.</h2>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-4">
							<h1>1)</h1>
							<img src='../../../img/camel.png' />
						</div>
						<div className="col-md-4">
							<h1>2)</h1>
							<img src='../../../img/lion.png' />
						</div>
						<div className="col-md-4">
							<h1>3)</h1>
							<img src='../../../img/rhino.png' />
						</div>
					</div>

					<div className="row">
						<div className="col-md-4">
							<TextField hintText='question one' fullWidth={true} />
						</div>
						<div className="col-md-4">
							<TextField hintText='question two' fullWidth={true} />
						</div>
						<div className="col-md-4">
							<TextField hintText='question three' fullWidth={true} />
						</div>
					</div>
				
					<div className="row" style={{'marginTop': '50px'}}>
						<div className="text-center">
							<FlatButton backgroundColor="cyan500" label="Done" onClick={()=>browserHistory.push('/thanks')} />
						</div>
					</div>
				</div>
			</DocumentTitle>
		)
	}
}