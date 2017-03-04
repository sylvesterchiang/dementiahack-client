import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';

// Custom Components
import Layout from './components/layout';
import HomePage from './components/pages/homePage';
import QuizPage from './components/pages/quizPage';
import LoginPage from './components/pages/loginPage';
import SignupPage from './components/pages/signupPage';
import ReferencePage from './components/pages/referencePage';
import CongratsPage from './components/pages/congratsPage';
import OnePage from './components/pages/onePage';
import TwoPage from './components/pages/twoPage';

console.log({Layout});

ReactDOM.render(
  <Router history={browserHistory}>
    <Route component={Layout}>
      <Route path="/" component={HomePage}></Route>
      <Route path="/quiz" component={QuizPage}></Route>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/one" component={OnePage}></Route>
      <Route path="/two/:qid" component={TwoPage}></Route>
    </Route>
  </Router>
  , document.getElementById('root'));
