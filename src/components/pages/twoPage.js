import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import FlatButton from 'material-ui/FlatButton';
import { cyan500 } from 'material-ui/styles/colors';
import { browserHistory } from 'react-router';

export default class TwoPage extends Component {

	constructor(props){
		super(props);
		console.log(this.props.params.qid);
		this.state = {
			qid: this.props.params.qid
		};
		console.log('what');
		console.log(this.state.qid);
		//console.log(answers);
	}

	render() {
		return (
			<DocumentTitle title="Question One">
				<div className="container">
					<div className="row">
						<div className="col-md-offset-3 col-md-6">
							<div className="text-center">
								<h1>Recall the words.</h1>
								<h4>Check the words you remember from the last page.</h4>
							</div>
						</div>
					</div>

					<div className="row">
						<div className='col-md-offset-3 col-md-6'>
							<FlatButton label="RED" />
							<FlatButton label="BLUE" />
							<FlatButton label="CHURCH" />
							<FlatButton label="OFFICE" />
							<FlatButton label="DAISY" />
							<FlatButton label="ROSE" />
							<FlatButton label="FACE" />
							<FlatButton label="NOSE" />
							<FlatButton label="VIOLET" />
							<FlatButton label="STARCH" />
						</div>
					</div>

					<div className="row">
						<div className="text-center">
							<FlatButton backgroundColor="cyan500" label="Done" onClick={()=>browserHistory.push('/two')} />
						</div>
					</div>
				</div>
			</DocumentTitle>
		)
	}
}