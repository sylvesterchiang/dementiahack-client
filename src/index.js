import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

// Custom Components
import Layout from './components/layout';
import HomePage from './components/pages/homePage';
import LoginPage from './components/pages/loginPage';
import SignupPage from './components/pages/signupPage';
import ReferencePage from './components/pages/referencePage';
import CustomizePage from './components/pages/customizePage';
import ReadyPage from './components/pages/readyPage';
import OnePage from './components/pages/onePage';
import TwoPage from './components/pages/twoPage';
import AnimalPage from './components/pages/AnimalPage';
import ThreePage from './components/pages/ThreePage';
import ThanksPage from './components/pages/ThanksPage';
import AnalyzePage from './components/pages/AnalyzePage';
import VisualizePage from './components/pages/VisualizePage';
import FourPage from './components/pages/FourPage';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={HomePage}></Route>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/customize" component={CustomizePage}></Route>
      <Route path="/ready" component={ReadyPage}></Route>
      <Route path="/one" component={OnePage}></Route>
      <Route path="/two" component={TwoPage}></Route>
      <Route path="/animal" component={AnimalPage}></Route>
      <Route path="/three" component={ThreePage}></Route>
      <Route path="/thanks" component={ThanksPage}></Route>
      <Route path="/analyze" component={AnalyzePage}></Route>
      <Route path="/visualize" component={VisualizePage}></Route>
      <Route path="/four" component={FourPage}></Route>
    </Route>
  </Router>
  , document.getElementById('root'));
