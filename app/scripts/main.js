'use strict';

require('../scss/critical.scss');

import Header from './components/header';
import Content from './components/content';

const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');

const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const Navigation = ReactRouter.Navigation;
const History = ReactRouter.History;
const createBrowserHistory = require('history/lib/createBrowserHistory');

const Rebase = require('re-base');

import 'babel-polyfill';

// <App />
var App = React.createClass({
  render : function() {
    return (
      <div>
        <Header />
        <Content />
      </div>
    )
  }
});

ReactDOM.render(<App />, document.querySelector('#app'));
