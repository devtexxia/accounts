const express = require('express');
const router = express.Router();

class AccountRouter {
	constructor(controller) {
		this._controller = controller;
		this.#config();
	}
	#config() {
		router.delete('/', this._controller.deleteAll);
		router.delete('/:accountId', this._controller.deleteOne);
		router.get('/', this._controller.getAll);
		router.get('/:accountId', this._controller.getOne);
		router.head('/', this._controller.headAll);
		router.head('/:accountId', this._controller.headOne);
		router.options('/', this._controller.optionsAll);
		router.options('/:accountId', this._controller.optionsOne);
		router.patch('/', this._controller.patchAll);
		router.patch('/:accountId', this._controller.patchOne);
		router.post('/', this._controller.postAll);
		router.post('/:accountId', this._controller.postOne);
		router.put('/', this._controller.putAll);
		router.put('/:accountId', this._controller.putOne);
	}
	getMiddleware() {
		return router;
	}
}

module.exports = AccountRouter;