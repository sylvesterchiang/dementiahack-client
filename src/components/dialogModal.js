import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class DialogModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { open: false, username: '', password: '' };

    this.handleClose = this.handleClose.bind(this);
    this.onTouchTap = this.onTouchTap.bind(this);
    this.login = this.login.bind(this);
    this.logout= this.logout.bind(this);
  }

  onTouchTap() {
    this.login();
    this.handleClose();
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  onUsernameChange(ev) {
    this.setState({username: ev.target.value});
  };

  onPasswordChange(ev) {
    this.setState({password: ev.target.value});
  };


  login() {
    const { username, password } = this.state;
    console.log('username: ', username);
    //this.props.login({username, password});
    this.setState({ username: '', password: '' });
  }

  logout() {
    //this.props.logout();
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.onTouchTap}
      />,
    ];

    // this.props.user ? 'Logout' : 'Login'  (jason, do that)
    return (
      <div>
        <RaisedButton
          primary
          className="loginbtn"
          label={"Login"}
          />
        <Dialog
          title="Sign in to save your portfolio!"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            onChange={ev => this.onUsernameChange(ev)}
            value={this.state.username}
            hintText="Username"
          />
          <TextField
            onChange={ev => this.onPasswordChange(ev)}
            value={this.state.password}
            type="password"
            hintText="Password"
          />
        </Dialog>
      </div>
    );
  }
}
