const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');

// Setup
const app = express();
const port = 3003;
const config = require('./webpack.config.dev.js');
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: "/",
  serverSideRender: true,
});
app.use(middleware);
app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(
    'Launching app... http://localhost:' + port + '\n'
  );
});