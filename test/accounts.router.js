const assert = require('assert');
const axios = require('axios');

// Environment Variables
const ACCOUNTS_SERVER_URL = process.env.ACCOUNTS_SERVER_URL;
assert(ACCOUNTS_SERVER_URL != undefined && ACCOUNTS_SERVER_URL != null);

// Constants
const HTTP_STATUS_CODE = {
	BAD_REQUEST: 400,
	NOT_FOUND: 404,
	OK: 200
}
const MESSAGES = {
	BAD_REQUEST: "bad request",
	NOT_FOUND: "not found",
	OK: "ok"
}

//console.log(`» error.response.data: ${JSON.stringify(error.response.data)}`);

describe('Routers', function () {
	describe('AccountsRouter', function () {
		describe('Route /', function () {
			it('DELETE', async () => {
				try {
					const route = "/";
					let url = ACCOUNTS_SERVER_URL + route;
					await axios.delete(url);
				} catch (error) {
					assert.equal(error.response.status, HTTP_STATUS_CODE.NOT_FOUND);
					assert.equal(error.response.data.status, MESSAGES.NOT_FOUND);
				}
			});
			it('GET', async () => {
				const route = "/";
				let url = ACCOUNTS_SERVER_URL + route;
				axios.get(url)
					.then((response) => {
						assert.equal(response.status, 200);
						assert.equal(response.data.status, "operational");
					});
			});
			it('HEAD', async () => {
				try {
					const route = "/";
					let url = ACCOUNTS_SERVER_URL + route;
					await axios.head(url);
				} catch (error) {
					assert.equal(error.response.status, HTTP_STATUS_CODE.NOT_FOUND);
					assert.equal(error.response.data.status, MESSAGES.NOT_FOUND);
				}
			});
			it('OPTIONS', async () => {
				try {
					const route = "/";
					let url = ACCOUNTS_SERVER_URL + route;
					await axios.options(url);
				} catch (error) {
					assert.equal(error.response.status, HTTP_STATUS_CODE.NOT_FOUND);
					assert.equal(error.response.data.status, MESSAGES.NOT_FOUND);
				}
			});
			it('PATCH', async () => {
				try {
					const route = "/";
					let url = ACCOUNTS_SERVER_URL + route;
					await axios.patch(url);
				} catch (error) {
					assert.equal(error.response.status, HTTP_STATUS_CODE.NOT_FOUND);
					assert.equal(error.response.data.status, MESSAGES.NOT_FOUND);
				}
			});
			it('POST', async () => {
				try {
					const route = "/";
					let url = ACCOUNTS_SERVER_URL + route;
					await axios.post(url);
				} catch (error) {
					assert.equal(error.response.status, HTTP_STATUS_CODE.NOT_FOUND);
					assert.equal(error.response.data.status, MESSAGES.NOT_FOUND);
				}
			});
			it('PUT', async () => {
				try {
					const route = "/";
					let url = ACCOUNTS_SERVER_URL + route;
					await axios.put(url);
				} catch (error) {
					assert.equal(error.response.status, HTTP_STATUS_CODE.NOT_FOUND);
					assert.equal(error.response.data.status, MESSAGES.NOT_FOUND);
				}
			});
		});
		describe('Route /accounts', function () {
			it('DELETE', async () => {
				try {
					const route = "/accounts";
					let url = ACCOUNTS_SERVER_URL + route;
					await axios.delete(url);
				} catch (error) {
					assert.equal(error.response.status, HTTP_STATUS_CODE.NOT_FOUND);
					assert.equal(error.response.data.status, MESSAGES.NOT_FOUND);
				}
			});
			it('GET', async () => {
				try {
					const route = "/accounts";
					let url = ACCOUNTS_SERVER_URL + route;
					await axios.get(url);
				} catch (error) {
					assert.equal(error.response.status, HTTP_STATUS_CODE.NOT_FOUND);
					assert.equal(error.response.data.status, MESSAGES.NOT_FOUND);
				}
			});
			it('HEAD', async () => {
				try {
					const route = "/accounts";
					let url = ACCOUNTS_SERVER_URL + route;
					await axios.head(url);
				} catch (error) {
					assert.equal(error.response.status, HTTP_STATUS_CODE.NOT_FOUND);
					assert.equal(error.response.data.status, MESSAGES.NOT_FOUND);
				}
			});
			it('OPTIONS', async () => {
				try {
					const route = "/accounts";
					let url = ACCOUNTS_SERVER_URL + route;
					await axios.options(url);
				} catch (error) {
					assert.equal(error.response.status, HTTP_STATUS_CODE.NOT_FOUND);
					assert.equal(error.response.data.status, MESSAGES.NOT_FOUND);
				}
			});
			it('PATCH', async () => {
				try {
					const route = "/accounts";
					let url = ACCOUNTS_SERVER_URL + route;
					await axios.patch(url);
				} catch (error) {
					assert.equal(error.response.status, HTTP_STATUS_CODE.NOT_FOUND);
					assert.equal(error.response.data.status, MESSAGES.NOT_FOUND);
				}
			});
			it('POST', async () => {
				try {
					const route = "/accounts";
					let url = ACCOUNTS_SERVER_URL + route;
					await axios.post(url);
				} catch (error) {
					assert.equal(error.response.status, HTTP_STATUS_CODE.BAD_REQUEST);
					assert.equal(error.response.data.status, MESSAGES.BAD_REQUEST);
				}
			});
			it('PUT', async () => {
				try {
					const route = "/accounts";
					let url = ACCOUNTS_SERVER_URL + route;
					await axios.put(url);
				} catch (error) {
					assert.equal(error.response.status, HTTP_STATUS_CODE.NOT_FOUND);
					assert.equal(error.response.data.status, MESSAGES.NOT_FOUND);
				}
			});
		});
	});
});