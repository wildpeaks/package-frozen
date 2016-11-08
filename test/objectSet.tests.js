'use strict';
/* eslint-env mocha */
const assert = require('assert');
const {objectSet} = require('..');

describe('objectSet', () => {
	it('New value (numeric)', () => {
		const fromObj = {};
		Object.freeze(fromObj);
		const newObj = objectSet(fromObj, 'hello', 123);
		assert.strictEqual('hello' in fromObj, false, 'The initial object remains unchanged');
		assert.strictEqual(typeof newObj, 'object', 'The new object is an Object');
		assert.strictEqual(Object.isFrozen(newObj), true, 'The new object is frozen');
		assert.strictEqual(newObj.hello, 123, 'The new object has the new value');
	});
	it('Update value (numeric)', () => {
		const fromObj = {hello: 111};
		Object.freeze(fromObj);
		const newObj = objectSet(fromObj, 'hello', 222);
		assert.strictEqual(fromObj.hello, 111, 'The initial object remains unchanged');
		assert.strictEqual(typeof newObj, 'object', 'The new object is an Object');
		assert.strictEqual(Object.isFrozen(newObj), true, 'The new object is frozen');
		assert.strictEqual(newObj.hello, 222, 'The new object has the new value');
	});
	it('Update value (reference)', () => {
		const referencedObject = { // not frozen so that I can mutate it, to make sure it's the same reference in both objects
			myparam: 'AAA'
		};
		const fromObj = {mytest: referencedObject};
		Object.freeze(fromObj);
		const newObj = objectSet(fromObj, 'hello', 123);
		referencedObject.myparam = 'BBB';
		assert.strictEqual(fromObj.mytest.myparam, 'BBB', 'The initial object still has the reference');
		assert.strictEqual(typeof newObj, 'object', 'The new object is an Object');
		assert.strictEqual(Object.isFrozen(newObj), true, 'The new object is frozen');
		assert.strictEqual(newObj.mytest.myparam, 'BBB', 'The new object has the same reference');
	});
});
