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
						<div className="col-md-offset-0 col-md-12">
							<div className="text-center">
								<h1 style={{'fontSize': '50px', 'color': '#43A047'}}>Question Three: Naming</h1>
								<h2 style={{'fontSize': '30px'}}>Name the object or animal you see.<img height='50px' src='../../../img/audio.png' /></h2>
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
							<TextField hintText='question one' inputStyle={{'fontSize': '30px'}} fullWidth={true} />
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
							<FlatButton backgroundColor="#29B6F6" label="DONE" style={{'height': '70px', 'borderRadius': '10px'}} labelStyle={{'color':'white', 'fontSize': '80px'}} onClick={()=>browserHistory.push('/thanks')} />
						</div>
					</div>
				</div>
			</DocumentTitle>
		)
	}
}