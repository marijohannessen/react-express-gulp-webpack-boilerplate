const path = require('path');
const express = require('express');
const PORT = process.env.PORT || 8080
const ejs = require('ejs');
const fs = require('fs');

const app = express();

// gzip
app.use(require('compression')());

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);
app.set('views', 'app/views');

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req, res) {
  const criticalCSS = fs.readFileSync(path.join(__dirname, '/dist/css/critical.css'), 'utf8');
  res.render('index', { criticalCSS });
});

module.exports = app;
