import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import FlatButton from 'material-ui/FlatButton';
import { cyan500 } from 'material-ui/styles/colors';
import { red500 } from 'material-ui/styles/colors';
import { browserHistory } from 'react-router';

export default class TwoPage extends Component {

	constructor(props){
		super(props);
		console.log(this.props.params.qid);
		this.state = {
			qid: this.props.params.qid, 
			options: ['RED', 'BLUE', 'CHURCH', 'OFFICE', 'DAISY', 'ROSE', 'FACE', 'NOSE', 'VIOLET', 'INDIGO'],
			isSelected: [false, false, false, false, false, false, false, false, false, false],
			users: [
			 {name: "John", id: 120, age: 22, gender: "male"},
			 {name: "Beth", id: 443, age: 24, gender: "female"},
			 {name: "Jane", id: 510, age: 19, gender: "female"}
			]
		};
		console.log('what');
		console.log(this.state.qid);
		console.log(this.state.options);
		const numbers = [1, 2, 3, 4, 5];
		const doubled = numbers.map((number) => number * 2);
		console.log(doubled);
		//console.log(answers);
	}

	toggleSelected(i){
		var temp = this.state.isSelected.slice();
		temp[i] = !temp[i]
		this.setState({isSelected: temp});
	}

	render() {
		return (
			<DocumentTitle title="Question One">
				<div className="container">
					<div className="row" style={{'marginBottom': '50px'}}>
						<div className="col-md-offset-3 col-md-6">
							<div className="text-center">
								<h1>Recall the words.</h1>
								<h4>Check the words you remember from the last page.</h4>
							</div>
						</div>
					</div>

					<div className="row text-center">
						<div className="col-md-offset-2 col-md-8">
					     {this.state.options.map((user, i)=>{
					        return (
					       		<FlatButton label={user} onClick={()=>this.toggleSelected(i)} backgroundColor={this.state.isSelected[i] == 0 ? 'white': '#EF5350'} labelStyle={{fontSize:'40px'}} style={{height:'40px'}}></FlatButton>
					     	)
					     })}
					     </div>
				   </div>

					<div className="row" style={{'marginTop': '50px'}}>
						<div className="text-center">
							<FlatButton backgroundColor="cyan500" label="Done" onClick={()=>browserHistory.push('/two')} />
						</div>
					</div>
				</div>
			</DocumentTitle>
		)
	}
}