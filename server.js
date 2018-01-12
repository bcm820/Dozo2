
'use strict';

// express
const express = require('express');
const app = express();

// require configs
require('./server/config/middleware')(app);
require('./server/config/mongoose');

// specify routers and routes
const router = express.Router();
require('./server/routes/auth.js')(router);
require('./server/routes/user.js')(router);
app.use('/api', router);

// redirect all URL errors to Angular index
const path = require('path');
// app.all("*", (req, res) => { res.sendFile(path.resolve("./client/dist/index.html")) });

// launch server
app.listen(8000);