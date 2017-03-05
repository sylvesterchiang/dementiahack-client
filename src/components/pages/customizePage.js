import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

export default class CustomizePage extends Component {

	constructor(){
		super();
		this.state = {
			questions:[1],
			number: 1
		}
		console.log(this.state.number);
	}

	addQuestion(){
		console.log('adding question');
		var temp = this.state.questions
		temp.push(this.state.number+1);
		console.log(temp);
		this.setState({
			questions: temp,
			number: this.state.number+1
		})
	}

	render() {
		return (
			<DocumentTitle title="Build Form">
			<div className='container'>
				<div className='row text-center'>
					<h1>Build Cognitive Assessment Form</h1>
					<div style={{marginBottom: '30px'}}>Customize questionnaire</div>
					{
						this.state.questions.map((q, i)=>{
					        return (
					       		//<FlatButton key={i} label={q} labelStyle={{fontSize:'40px'}} style={{height:'40px'}}></FlatButton>
					     		<Card exandable={false} key={i}>
					     			<CardHeader 
										className='text-center'
										style={{padding:'0px'}}
										textStyle={{'padding':'0px', 'fontSize': '30px'}}
										title={"Question " + q}
										subtitle="make your own question"
									/>
									<div>
										<span>Select Question Type:</span>
										<DropDownMenu value={1} openImmediately={false}>
									        <MenuItem value={1} primaryText="Multiple Choice" />
									        <MenuItem value={2} primaryText="Ranking" />
									        <MenuItem value={3} primaryText="Sketching" />
									        <MenuItem value={4} primaryText="Memory Recall" />
									        <MenuItem value={5} primaryText="Free Text" />
									    </DropDownMenu>
									</div>
					     		</Card>
					     	)
					     })
					}
				</div>
				<div className="row text-center">
					<FlatButton label='ADD QUESTION' onClick={()=>this.addQuestion()} backgroundColor="#29B6F6" labelStyle={{color: 'white'}} style={{'marginTop':'30px'}} />
				</div>
			</div>
			</DocumentTitle>
		)
	}
}