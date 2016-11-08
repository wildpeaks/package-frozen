'use strict';
/* eslint-env mocha */
/* eslint-disable no-undefined */
const assert = require('assert');
const {arrayRemove} = require('..');

describe('arrayRemove', () => {
	it('0 (valid)', () => {
		const fromArray = ['zero', 111, 'TWO'];
		Object.freeze(fromArray);
		const newArray = arrayRemove(fromArray, 0);
		assert.deepStrictEqual(fromArray, ['zero', 111, 'TWO'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, [111, 'TWO'], 'The new array removed the value');
	});
	it('1 (valid)', () => {
		const fromArray = ['zero', 111, 'TWO'];
		Object.freeze(fromArray);
		const newArray = arrayRemove(fromArray, 1);
		assert.deepStrictEqual(fromArray, ['zero', 111, 'TWO'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, ['zero', 'TWO'], 'The new array removed the value');
	});
	it('1 (invalid)', () => {
		const fromArray = ['zero'];
		Object.freeze(fromArray);
		const newArray = arrayRemove(fromArray, 1);
		assert.deepStrictEqual(fromArray, ['zero'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, ['zero'], 'The new array still has all values');
	});
	it('3 (invalid)', () => {
		const fromArray = ['zero', 111, 'TWO'];
		Object.freeze(fromArray);
		const newArray = arrayRemove(fromArray, 3);
		assert.deepStrictEqual(fromArray, ['zero', 111, 'TWO'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, ['zero', 111, 'TWO'], 'The new array still has all values');
	});
	it('5 (invalid)', () => {
		const fromArray = ['zero', 111, 'TWO'];
		Object.freeze(fromArray);
		const newArray = arrayRemove(fromArray, 5);
		assert.deepStrictEqual(fromArray, ['zero', 111, 'TWO'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, ['zero', 111, 'TWO'], 'The new array still has all values');
	});
	it('-1', () => {
		const fromArray = ['zero', 111, 'TWO'];
		Object.freeze(fromArray);
		const newArray = arrayRemove(fromArray, -1);
		assert.deepStrictEqual(fromArray, ['zero', 111, 'TWO'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, ['zero', 111, 'TWO'], 'The new array still has all values');
	});
	it('undefined', () => {
		const fromArray = ['zero', 111, 'TWO'];
		Object.freeze(fromArray);
		const newArray = arrayRemove(fromArray, undefined);
		assert.deepStrictEqual(fromArray, ['zero', 111, 'TWO'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, ['zero', 111, 'TWO'], 'The new array still has all values');
	});
	it('null', () => {
		const fromArray = ['zero', 111, 'TWO'];
		Object.freeze(fromArray);
		const newArray = arrayRemove(fromArray, null);
		assert.deepStrictEqual(fromArray, ['zero', 111, 'TWO'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, ['zero', 111, 'TWO'], 'The new array still has all values');
	});
	it('false', () => {
		const fromArray = ['zero', 111, 'TWO'];
		Object.freeze(fromArray);
		const newArray = arrayRemove(fromArray, false);
		assert.deepStrictEqual(fromArray, ['zero', 111, 'TWO'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, ['zero', 111, 'TWO'], 'The new array still has all values');
	});
	it('true', () => {
		const fromArray = ['zero', 111, 'TWO'];
		Object.freeze(fromArray);
		const newArray = arrayRemove(fromArray, true);
		assert.deepStrictEqual(fromArray, ['zero', 111, 'TWO'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, ['zero', 111, 'TWO'], 'The new array still has all values');
	});
	it('{}', () => {
		const fromArray = ['zero', 111, 'TWO'];
		Object.freeze(fromArray);
		const newArray = arrayRemove(fromArray, {});
		assert.deepStrictEqual(fromArray, ['zero', 111, 'TWO'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, ['zero', 111, 'TWO'], 'The new array still has all values');
	});
	it('[]', () => {
		const fromArray = ['zero', 111, 'TWO'];
		Object.freeze(fromArray);
		const newArray = arrayRemove(fromArray, []);
		assert.deepStrictEqual(fromArray, ['zero', 111, 'TWO'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, ['zero', 111, 'TWO'], 'The new array still has all values');
	});
	it('NaN', () => {
		const fromArray = ['zero', 111, 'TWO'];
		Object.freeze(fromArray);
		const newArray = arrayRemove(fromArray, NaN);
		assert.deepStrictEqual(fromArray, ['zero', 111, 'TWO'], 'The initial array remains unchanged');
		assert.strictEqual(Array.isArray(newArray), true, 'The new array is an Array');
		assert.strictEqual(Object.isFrozen(newArray), true, 'The new array is frozen');
		assert.deepStrictEqual(newArray, ['zero', 111, 'TWO'], 'The new array still has all values');
	});
});
