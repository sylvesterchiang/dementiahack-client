import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { indigo800 } from 'material-ui/styles/colors'; //#283593
import { cyan500 } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { Link } from 'react-router';

// Material UI Components
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';


const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    color: cyan500,
    height: 75,
  },
});

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={ <IconButton><MoreVertIcon /></IconButton>}
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);

export default class Layout extends Component {

  constructor() {
    super();
    injectTapEventPlugin();
    this.state = {
      isDrawerVisible: false,
      isLoggedIn: false,
      menuItems: [
        {path: '/', title: 'Home'},
        {path: '/quiz', title: 'Your Tests'},
        {path: '/customize', title: 'Cusomize'},
        {path: '/analyze', title: 'Analyze'}
      ],
    }
    this.getQuestion = this.getQuestion.bind(this);
  }

  changeAnswers(key, value){
    temp = this.state.answers;
    temp.key = value; 
    this.setState({answers: newAnswers});

  }

  incrementQuestion(){
    this.setState({currentQuestion: this.state.currentQuestion+1});
  }

  resetQuestions(){
    this.setState({currentQuestion: 0});
  }

  getQuestion(){
    return this.state.currentQuestion;
  }

  // Shows/Hides the left hand side drawer onClick
  toggleDrawer() {
    const { isDrawerVisible } = this.state;
    this.setState({ isDrawerVisible: !isDrawerVisible });
  }

  // Renders menu items for the Drawer, with links
  // to their respective page with react-router
  renderMenuItems() {
    return this.state.menuItems.map((item, i) => {
      return (
        <Link to={item.path} key={i} onTouchTap={() => this.toggleDrawer()}>
          <MenuItem>{item.title}</MenuItem>
        </Link>
      )
    });
  }

  render() {
    const { isDrawerVisible } = this.state;

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar
            title='CogTO'
            iconElementRight={this.state.logged ? <Logged /> : <Login />}
            onLeftIconButtonTouchTap={() => this.toggleDrawer()}
            onTitleTouchTap={() => this.setState({isDrawerVisible: false})}
          />
          <Drawer open={isDrawerVisible}>
            {this.renderMenuItems()}
          </Drawer>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}