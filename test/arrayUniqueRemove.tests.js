'use strict';
/* eslint-env mocha */
/* eslint-disable no-undefined */
const assert = require('assert');
const {arrayUniqueRemove} = require('..');

describe('arrayUniqueRemove', () => {
	it('Numeric value', () => {
		const fromArray = ['111', 111, 'TWO'];
		Object.freeze(fromArray);
		const newArray = arrayUniqueRemove(fromArray, 111);
		assert.deepStrictEqual(fromArray, ['111', 111, 'TWO'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, ['111', 'TWO'], 'The new array removed the value');
	});
	it('String value', () => {
		const fromArray = ['111', 111, 'TWO'];
		Object.freeze(fromArray);
		const newArray = arrayUniqueRemove(fromArray, '111');
		assert.deepStrictEqual(fromArray, ['111', 111, 'TWO'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, [111, 'TWO'], 'The new array removed the value');
	});
	it('Invalid value', () => {
		const fromArray = ['111', 111, 'TWO'];
		Object.freeze(fromArray);
		const newArray = arrayUniqueRemove(fromArray, 'kittens');
		assert.deepStrictEqual(fromArray, ['111', 111, 'TWO'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, ['111', 111, 'TWO'], 'The new array still has all values');
	});
	it('Undefined', () => {
		const fromArray = ['111', 111, 'TWO'];
		Object.freeze(fromArray);
		const newArray = arrayUniqueRemove(fromArray, undefined);
		assert.deepStrictEqual(fromArray, ['111', 111, 'TWO'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, ['111', 111, 'TWO'], 'The new array still has all values');
	});
	it('Non-unique array', () => {
		const fromArray = ['111', 111, 'TWO', 111];
		Object.freeze(fromArray);
		const newArray = arrayUniqueRemove(fromArray, 111);
		assert.deepStrictEqual(fromArray, ['111', 111, 'TWO', 111], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, ['111', 'TWO', 111], 'The new array removed only the first occurence of the value');
	});

	// Those can be either valid or invalid based on whether the function contains them,
	// although I most likely would never have a unique array of values that contains those values,
	// so they should be seen as invalid, in theory:
	//
	// it('null', () => {
	// 	const fromArray = ['111', 111, 'TWO'];
	// 	Object.freeze(fromArray);
	// 	const newArray = arrayUniqueRemove(fromArray, null);
	// 	assert.deepStrictEqual(fromArray, ['111', 111, 'TWO'], 'The initial array remains unchanged');
	// 	assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
	// 	assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
	// 	assert.deepStrictEqual(newArray, ['111', 111, 'TWO'], 'The new array still has all values');
	// });
	// it('false', () => {
	// 	const fromArray = ['111', 111, 'TWO'];
	// 	Object.freeze(fromArray);
	// 	const newArray = arrayUniqueRemove(fromArray, false);
	// 	assert.deepStrictEqual(fromArray, ['111', 111, 'TWO'], 'The initial array remains unchanged');
	// 	assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
	// 	assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
	// 	assert.deepStrictEqual(newArray, ['111', 111, 'TWO'], 'The new array still has all values');
	// });
	// it('true', () => {
	// 	const fromArray = ['111', 111, 'TWO'];
	// 	Object.freeze(fromArray);
	// 	const newArray = arrayUniqueRemove(fromArray, true);
	// 	assert.deepStrictEqual(fromArray, ['111', 111, 'TWO'], 'The initial array remains unchanged');
	// 	assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
	// 	assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
	// 	assert.deepStrictEqual(newArray, ['111', 111, 'TWO'], 'The new array still has all values');
	// });
	// it('NaN', () => {
	// 	const fromArray = ['111', 111, 'TWO'];
	// 	Object.freeze(fromArray);
	// 	const newArray = arrayUniqueRemove(fromArray, NaN);
	// 	assert.deepStrictEqual(fromArray, ['111', 111, 'TWO'], 'The initial array remains unchanged');
	// 	assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
	// 	assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
	// 	assert.deepStrictEqual(newArray, ['111', 111, 'TWO'], 'The new array still has all values');
	// });
});
