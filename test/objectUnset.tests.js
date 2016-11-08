'use strict';
/* eslint-env mocha */
const assert = require('assert');
const {objectUnset} = require('..');

describe('objectUnset', () => {
	it('Existing property', () => {
		const fromObj = {hello: 111};
		Object.freeze(fromObj);
		const newObj = objectUnset(fromObj, 'hello');
		assert.strictEqual(fromObj.hello, 111, 'The initial object remains unchanged');
		assert.strictEqual(typeof newObj, 'object', 'The new object is an Object');
		assert.strictEqual(Object.isFrozen(newObj), true, 'The new object is frozen');
		assert.strictEqual('hello' in newObj, false, 'The new object does not contain the deleted property');
	});
	it('Non-existing property', () => {
		const fromObj = {};
		Object.freeze(fromObj);
		const newObj = objectUnset(fromObj, 'hello');
		assert.strictEqual('hello' in fromObj, false, 'The initial object remains unchanged');
		assert.strictEqual(typeof newObj, 'object', 'The new object is an Object');
		assert.strictEqual(Object.isFrozen(newObj), true, 'The new object is frozen');
		assert.strictEqual('hello' in newObj, false, 'The new object does not contain the deleted property');
	});
});
