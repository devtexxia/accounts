const express = require('express');
const router = express.Router();

class AccountRouter {
	constructor(controller) {
		this._controller = controller;
		this.#config();
	}
	#config() {
		router.get('/', this._controller.get);
		router.post('/', this._controller.post);
	}
	getMiddleware() {
		return router;
	}
}

module.exports = AccountRouter;