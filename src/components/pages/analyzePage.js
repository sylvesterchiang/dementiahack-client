 import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { browserHistory } from 'react-router';
import Dialog from 'material-ui/Dialog';

const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};

const tableData = [
  {
    name: 'John Smith',
    status: 'Patient',
    selected: true,
  },
  {
    name: 'Randal White',
    status: 'Patient',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Patient',
    selected: true,
  },
  {
    name: 'Steve Brown',
    status: 'Patient',
  },
  {
    name: 'Joyce Whitten',
    status: 'Patient',
  },
  {
    name: 'Samuel Roberts',
    status: 'Patient',
  },
  {
    name: 'Adam Moore',
    status: 'Patient',
  },
];

export default class AnalyzePage extends Component {

	constructor() {
	    super();
	    console.log('ha');
	    this.state = {
	      fixedHeader: true,
	      fixedFooter: true,
	      stripedRows: false,
	      showRowHover: false,
	      selectable: true,
	      multiSelectable: false,
	      enableSelectAll: false,
	      deselectOnClickaway: true,
	      showCheckboxes: true,
	      height: '300px',
	    };
	  }

	render() {
		return (
			<DocumentTitle title="Sign Up">
				<div>

					<div className='row'>
						<FlatButton label='Export to CSV'/>
						<FlatButton label='Visualize' onClick={()=>browserHistory.push('/visualize')}/>
					</div>
					<Table
			          height={this.state.height}
			          fixedHeader={this.state.fixedHeader}
			          fixedFooter={this.state.fixedFooter}
			          selectable={this.state.selectable}
			          multiSelectable={this.state.multiSelectable}
			        >
			          <TableHeader
			            displaySelectAll={this.state.showCheckboxes}
			            adjustForCheckbox={this.state.showCheckboxes}
			            enableSelectAll={this.state.enableSelectAll}
			          >
			            <TableRow>
			              <TableHeaderColumn colSpan="3" tooltip="Patient Assessments" style={{textAlign: 'center'}}>
			                Super Header
			              </TableHeaderColumn>
			            </TableRow>
			            <TableRow>
			              <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
			              <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
			              <TableHeaderColumn tooltip="The Status">Status</TableHeaderColumn>
			            </TableRow>
			          </TableHeader>
			          <TableBody
			            displayRowCheckbox={this.state.showCheckboxes}
			            deselectOnClickaway={this.state.deselectOnClickaway}
			            showRowHover={this.state.showRowHover}
			            stripedRows={this.state.stripedRows}
			          >
			            {tableData.map( (row, index) => (
			              <TableRow key={index} selected={row.selected}>
			                <TableRowColumn>{index}</TableRowColumn>
			                <TableRowColumn>{row.name}</TableRowColumn>
			                <TableRowColumn>{row.status}</TableRowColumn>
			              </TableRow>
			              ))}
			          </TableBody>
			        </Table>
		        </div>
			</DocumentTitle>
		)
	}
}