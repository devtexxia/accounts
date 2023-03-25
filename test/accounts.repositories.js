var assert = require('assert');
describe('Repositories', function () {
	describe('AccountRepository', function () {
		it('should return -1 when the value is not present', function () {
			assert.equal([1, 2, 3].indexOf(4), -1);
		});
	});
});