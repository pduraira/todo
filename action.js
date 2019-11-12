// require adapter
const run = require('probot-actions-adapter');

//require pardot adapter
const app = require('./index');

//adapt the probot app
run(app);
