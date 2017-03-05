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
			<DocumentTitle title="Question Two">
				<div className="container">
					<div className="row">
						<div className="col-md-offset-0 col-md-12">
							<div className="text-center">
								<h1 style={{'fontSize': '80px', 'color':'#FF5722'}}>Question One: Memory Recall</h1>
								<h2 style={{'fontSize': '60px'}}>Try to memorize these words! </h2>
								<img height='50px' src='../../../img/audio.png' />
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-4 text-center" style={{fontSize:'70px', 'color':'#d32f2f'}}>FACE</div>
						<div className="col-md-4 text-center" style={{fontSize:'70px', 'color':'#d32f2f'}}>VIOLET</div>
						<div className="col-md-4 text-center" style={{fontSize:'70px', 'color':'#d32f2f'}}>CHURCH</div>
						<div className="col-md-4 text-center" style={{fontSize:'70px', 'color':'#d32f2f'}}>DAISY </div>
						<div className="col-md-4 text-center" style={{fontSize:'70px', 'color':'#d32f2f'}}>BLUE</div>
						<div className="col-md-4 text-center" style={{fontSize:'70px', 'color':'#d32f2f'}}>HOUSE</div>
					</div>
					
					<div className="row" style={{"marginTop":"40px"}}>
						<div className="text-center">
							<FlatButton backgroundColor="#29B6F6" label="READY" style={{'height': '70px', 'borderRadius': '10px'}} labelStyle={{'color':'white', 'fontSize': '80px'}} onClick={()=>browserHistory.push('/two')} />
						</div>
					</div>
				</div>
			</DocumentTitle>
		)
	}
}