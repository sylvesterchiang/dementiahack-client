 import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import TextField from 'material-ui/TextField';

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
    status: 'Employed',
    selected: true,
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
    selected: true,
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
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
		              <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
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
		          <TableFooter
		            adjustForCheckbox={this.state.showCheckboxes}
		          >
		            <TableRow>
		              <TableRowColumn>ID</TableRowColumn>
		              <TableRowColumn>Name</TableRowColumn>
		              <TableRowColumn>Status</TableRowColumn>
		            </TableRow>
		            <TableRow>
		              <TableRowColumn colSpan="3" style={{textAlign: 'center'}}>
		                Super Footer
		              </TableRowColumn>
		            </TableRow>
		          </TableFooter>
		        </Table>
			</DocumentTitle>
		)
	}
}