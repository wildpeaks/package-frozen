'use strict';
/* eslint-env mocha */
const assert = require('assert');
const {arrayUniquePush} = require('..');

describe('arrayUniquePush', () => {
	it('New value', () => {
		const fromArray = ['zero', 111, 'TWO'];
		Object.freeze(fromArray);
		const newArray = arrayUniquePush(fromArray, 333);
		assert.deepStrictEqual(fromArray, ['zero', 111, 'TWO'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, ['zero', 111, 'TWO', 333], 'The new array has the additional value');
	});
	it('Existing value', () => {
		const fromArray = ['zero', 111, 'TWO'];
		Object.freeze(fromArray);
		const newArray = arrayUniquePush(fromArray, 111);
		assert.deepStrictEqual(fromArray, ['zero', 111, 'TWO'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, ['zero', 111, 'TWO'], 'The new array did not duplicate the existing value');
	});
});
