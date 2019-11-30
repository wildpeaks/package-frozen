/* eslint-env node */
import {strictEqual, deepStrictEqual} from 'assert';
import {describe, it} from 'mocha';
import {arrayRemove} from '../src/frozen';


describe('arrayRemove', () => {
	type MyArray = ReadonlyArray<string | number>;

	it('0 (valid)', () => {
		const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
		const actual: MyArray = arrayRemove(initial, 0);
		deepStrictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
		strictEqual(Array.isArray(actual), true, 'Actual is an Array');
		strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
		deepStrictEqual(actual, [111, 'TWO'], 'Actual removed the value');
	});
	it('1 (valid)', () => {
		const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
		const actual: MyArray = arrayRemove(initial, 1);
		deepStrictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
		strictEqual(Array.isArray(actual), true, 'Actual is an Array');
		strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
		deepStrictEqual(actual, ['zero', 'TWO'], 'Actual removed the value');
	});
	it('1 (invalid)', () => {
		const initial: MyArray = Object.freeze(['zero']);
		const actual: MyArray = arrayRemove(initial, 1);
		deepStrictEqual(initial, ['zero'], 'Initial remains unchanged');
		strictEqual(Array.isArray(actual), true, 'Actual is an Array');
		strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
		deepStrictEqual(actual, ['zero'], 'Actual still has all values');
	});
	it('3 (invalid)', () => {
		const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
		const actual: MyArray = arrayRemove(initial, 3);
		deepStrictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
		strictEqual(Array.isArray(actual), true, 'Actual is an Array');
		strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
		deepStrictEqual(actual, ['zero', 111, 'TWO'], 'Actual still has all values');
	});
	it('5 (invalid)', () => {
		const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
		const actual: MyArray = arrayRemove(initial, 5);
		deepStrictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
		strictEqual(Array.isArray(actual), true, 'Actual is an Array');
		strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
		deepStrictEqual(actual, ['zero', 111, 'TWO'], 'Actual still has all values');
	});
	it('-1', () => {
		const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
		const actual: MyArray = arrayRemove(initial, -1);
		deepStrictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
		strictEqual(Array.isArray(actual), true, 'Actual is an Array');
		strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
		deepStrictEqual(actual, ['zero', 111, 'TWO'], 'Actual still has all values');
	});
	it('NaN', () => {
		const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
		const actual: MyArray = arrayRemove(initial, NaN);
		deepStrictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
		strictEqual(Array.isArray(actual), true, 'Actual is an Array');
		strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
		deepStrictEqual(actual, ['zero', 111, 'TWO'], 'Actual still has all values');
	});

	//-----------------------------------------------------------------------//
	// Those shouldn't even compile
	//-----------------------------------------------------------------------//
	// it('undefined', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayRemove(initial, undefined); // This is a syntax error as expected
	// 	strictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	strictEqual(Array.isArray(actual), true, 'Actual is an Array');
	// 	strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
	// 	strictEqual(actual, ['zero', 111, 'TWO', undefined], 'Actual added the new value');
	// });
	// it('null', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayRemove(initial, null); // This is a syntax error as expected
	// 	strictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	strictEqual(Array.isArray(actual), true, 'Actual is an Array');
	// 	strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
	// 	strictEqual(actual, ['zero', 111, 'TWO', null], 'Actual added the new value');
	// });
	// it('{}', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayRemove(initial, {}); // This is a syntax error as expected
	// 	strictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	strictEqual(Array.isArray(actual), true, 'Actual is an Array');
	// 	strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
	// 	strictEqual(actual, ['zero', 111, 'TWO', {}], 'Actual added the new value');
	// });
	// it('true', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayRemove(initial, true); // This is a syntax error as expected
	// 	strictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	strictEqual(Array.isArray(actual), true, 'Actual is an Array');
	// 	strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
	// 	strictEqual(actual, ['zero', 111, 'TWO', true], 'Actual added the new value');
	// });
	// it('false', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayRemove(initial, false); // This is a syntax error as expected
	// 	strictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	strictEqual(Array.isArray(actual), true, 'Actual is an Array');
	// 	strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
	// 	strictEqual(actual, ['zero', 111, 'TWO', false], 'Actual added the new value');
	// });
});
