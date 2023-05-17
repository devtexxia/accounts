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

app.delete('/', (request, response, next) => {
	response.status(404).json({code:404, method:"DELETE", route:"/", status:"not found"}).end();
});
app.get('/', (request, response, next) => {
	response.status(200).json({code:200, method:"GET", route:"/", status:"operational"}).end();
});
app.head('/', (request, response, next) => {
	response.status(404).json({code:404, method:"DELETE", route:"/", status:"not found"}).end();
});
app.options('/', (request, response, next) => {
	response.status(404).json({code:404, method:"OPTIONS", route:"/", status:"not found"}).end();
});
app.patch('/', (request, response, next) => {
	response.status(404).json({code:404, method:"PATCH", route:"/", status:"not found"}).end();
});
app.post('/', (request, response, next) => {
	response.status(404).json({code:404, method:"POST", route:"/", status:"not found"}).end();
});
app.put('/', (request, response, next) => {
	response.status(404).json({code:404, method:"PUT", route:"/", status:"not found"}).end();
});

let repository = new AccountRepository({});
let service = new AccountService(repository);
let controller = new AccountController(service);
let router = new AccountRouter(controller);
app.use('/accounts', router.getMiddleware());

module.exports = app;
