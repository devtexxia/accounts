const assert = require('assert');

class IRepository {
	constructor(config) {
		assert(config != undefined && config != null);
		this._config = config;
	}
	deleteOne(query) {
		throw new Error("Not Implemented");
	}
	findOne(query, options) {
		throw new Error("Not Implemented");
	}
	insertOne(record) {
		throw new Error("Not Implemented");
	}
	updateOne(filter, record, options) {
		throw new Error("Not Implemented");
	}
}

module.exports = IRepository;