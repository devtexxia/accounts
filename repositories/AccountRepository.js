const IRepository = require('./IRepository');

class AccountRepository extends IRepository {
	constructor(config) {
		super(config);
	}
}

module.exports = AccountRepository;