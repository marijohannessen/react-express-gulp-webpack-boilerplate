const React = require('react');

// < />
const Content = React.createClass({
  render : function() {
    return (
      <div className="container">
        <h3>Getting started:</h3>
        <ul>
          <li>1. Clone/fork the GitHub Repo</li>
          <li>2. Run `npm install` to install all dependencies</li>
          <li>3. Run `npm run dev` to start the server and view your website at `localhost:3000`</li>
        </ul>
        <h3>Deploy your site to GitHub Pages:</h3>
        <ul>
          <li>1. Change the link in `tools/deploy.gh.js` to point to your GitHub username and repo</li>
          <li>2. Run `npm run deploy`</li>
          <li>3. View your website at `http://your-username.github.io/your-project-name`</li>
        </ul>
      </div>
    )
  }
});

export default Content;
