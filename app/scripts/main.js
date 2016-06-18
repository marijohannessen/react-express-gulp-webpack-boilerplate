var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');

var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var History = ReactRouter.History;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var Rebase = require('re-base');

import 'babel-polyfill';

// <App />
var App = React.createClass({
  render : function() {
    return (
      <div class="container">
        <h1>React + Express + Gulp + Webpack Boilerplate</h1>
      </div>
    )
  }
});

ReactDOM.render(<App />, document.querySelector('#app'));
