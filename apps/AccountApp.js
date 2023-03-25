const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
//const cors = require('cors');

// TEXXIA ARTIFACTS
const AccountRepository = require('../repositories/AccountRepository');
const AccountService = require('../services/AccountService');
const AccountController = require('../controllers/AccountController');
const AccountRouter = require('../routers/AccountRouter');

app.use(express.urlencoded({ limit: '50mb', extended: false }));
app.use(express.json({limit: '50mb'}));
app.use(cookieParser());

app.use('/', (request, response, next) => {
	response.status(200).json({code:200, method:"GET", route:"/", status:"operational"}).end();
});

let repository = new AccountRepository({});
let service = new AccountService(repository);
let controller = new AccountController(service);
let router = new AccountRouter(controller);
app.use('/accounts', router.getMiddleware());

module.exports = app;
