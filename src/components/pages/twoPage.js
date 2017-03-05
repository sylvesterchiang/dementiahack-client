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
			//qid: this.props.params.qid, 
			options: ['RED', 'BLUE', 'ROSE', 'OFFICE', 'DAISY', 'CHURCH', 'FACE', 'NOSE', 'VIOLET', 'INDIGO', 'BIRD', 'HOUSE'],
			isSelected: [false, false, false, false, false, false, false, false, false, false, false, false],
			users: [
			 {name: "John", id: 120, age: 22, gender: "male"},
			 {name: "Beth", id: 443, age: 24, gender: "female"},
			 {name: "Jane", id: 510, age: 19, gender: "female"}
			]
		};
		console.log('what');
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
			<DocumentTitle title="Question Two">
				<div className="container">
					<div className="row" style={{'marginBottom': '50px'}}>
						<div className="col-md-offset-0 col-md-12">
							<div className="text-center">
								<h1 style={{'fontSize': '80px'}}>Recall the words.</h1>
								<h2 style={{'fontSize': '50px'}}>Check the words you remember from the last page.</h2>
							</div>
						</div>
					</div>

					<div className="row text-center">
					     {this.state.options.map((user, i)=>{
					        return (
					        	<div className="col-md-2 text-center" key={i} style={{'marginTop': '20px'}}>
					       			<FlatButton label={user} onClick={()=>this.toggleSelected(i)} backgroundColor={this.state.isSelected[i] == 0 ? 'white': '#EF5350'} labelStyle={{fontSize:'40px'}} style={{height:'50px'}}></FlatButton>
					     		</div>
					     	)
					     })}
				   </div>

					<div className="row" style={{'marginTop': '50px'}}>
						<div className="text-center">
							<FlatButton backgroundColor="#29B6F6" label="DONE" style={{'height': '70px', 'borderRadius': '10px'}} labelStyle={{'color':'white', 'fontSize': '80px'}} onClick={()=>browserHistory.push('/three')} />
						</div>
					</div>
				</div>
			</DocumentTitle>
		)
	}
}