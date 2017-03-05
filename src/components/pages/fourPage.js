import React, { Component } from 'react';
import Canvas from '../canvas';
import DocumentTitle from 'react-document-title';
import FlatButton from 'material-ui/FlatButton';
import { cyan500 } from 'material-ui/styles/colors';
import { browserHistory } from 'react-router';

export default class FourPage extends Component {

	constructor(){
		super();
		this.state ={
			countLeft: 8
		}
	}

	decrement(){
		console.log(this.state.countLeft);
		this.setState({countLeft: this.state.countLeft-1});
	}

	render() {
		return (
			<DocumentTitle title="Thank You">
				<div className='container'>
					<div className="row">
						<div className="col-md-offset-2 col-md-8">
							<div className="text-center">
								<h1 style={{'fontSize': '70px'}}>Question One: Visual</h1>
								<h2 style={{'fontSize': '40px'}}>Trace out the characters in the order:</h2>
								<div style={{'fontSize': '50px', 'color':"#29B6F6"}}>1-A-2-B-3-C-4-D.</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-md-offset-2 col-md-4'>
							<Canvas clickEvent={this.decrement.bind(this)} />
						</div>
						<div className='col-md-4 text-center'>
							<div style={{'marginTop': '40px'}}>
								<div style={{'fontSize': '30px'}}>Characters</div>
								<div style={{'fontSize': '30px'}}>Remaining</div>
							</div>
							<div className='text-center' style={{'marginTop': '10px'}}>
								<div style={{'fontSize': '50px', 'color': '#EF5350'}}>{this.state.countLeft}</div>
							</div>
						</div>
					</div>
					<div className="row" style={{"marginTop":"20px"}}>
						<div className="text-center">
							<FlatButton backgroundColor="#29B6F6" label={this.state.countLeft == 0 ? "DONE": "NOT YET"} style={{'height': '70px', 'borderRadius': '10px'}} labelStyle={{'color':'white', 'fontSize': '80px'}} onClick={()=>browserHistory.push('/two')} />
						</div>
					</div>
				</div>
			</DocumentTitle>
		)
	}
}