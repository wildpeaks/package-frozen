/* eslint-env node */
import {strictEqual, deepStrictEqual} from 'assert';
import {describe, it} from 'mocha';
import {arrayUniquePush} from '../src/frozen';


describe('arrayUniquePush', () => {
	type MyArray = ReadonlyArray<string | number>;

	it('New value', () => {
		const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
		const actual: MyArray = arrayUniquePush(initial, 333);
		deepStrictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
		strictEqual(Array.isArray(actual), true, 'Actual is an Array');
		strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
		deepStrictEqual(actual, ['zero', 111, 'TWO', 333], 'Actual added the new value');
	});
	it('Existing value', () => {
		const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
		const actual: MyArray = arrayUniquePush(initial, 111);
		deepStrictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
		strictEqual(Array.isArray(actual), true, 'Actual is an Array');
		strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
		deepStrictEqual(actual, ['zero', 111, 'TWO'], `Actual didn't duplicate the new value`);
	});
	it('NaN', () => {
		const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
		const actual: MyArray = arrayUniquePush(initial, NaN);
		deepStrictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
		strictEqual(Array.isArray(actual), true, 'Actual is an Array');
		strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
		deepStrictEqual(actual, ['zero', 111, 'TWO', NaN], 'Actual added the new value');
	});

	//-----------------------------------------------------------------------//
	// Those shouldn't even compile
	//-----------------------------------------------------------------------//
	// it('undefined', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayUniquePush(initial, undefined); // This should be a syntax error
	// 	deepStrictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	strictEqual(Array.isArray(actual), true, 'Actual is an Array');
	// 	strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
	// 	deepStrictEqual(actual, ['zero', 111, 'TWO', undefined], 'Actual added the new value');
	// });
	// it('null', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayUniquePush(initial, null); // This should be a syntax error
	// 	deepStrictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	strictEqual(Array.isArray(actual), true, 'Actual is an Array');
	// 	strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
	// 	deepStrictEqual(actual, ['zero', 111, 'TWO', null], 'Actual added the new value');
	// });
	// it('{}', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayUniquePush(initial, {}); // This should be a syntax error
	// 	deepStrictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	strictEqual(Array.isArray(actual), true, 'Actual is an Array');
	// 	strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
	// 	deepStrictEqual(actual, ['zero', 111, 'TWO', {}], 'Actual added the new value');
	// });
	// it('true', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayUniquePush(initial, true); // This is a syntax error as expected
	// 	deepStrictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	strictEqual(Array.isArray(actual), true, 'Actual is an Array');
	// 	strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
	// 	deepStrictEqual(actual, ['zero', 111, 'TWO', true], 'Actual added the new value');
	// });
	// it('false', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayUniquePush(initial, false); // This is a syntax error as expected
	// 	deepStrictEqual(initial, ['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	strictEqual(Array.isArray(actual), true, 'Actual is an Array');
	// 	strictEqual(Object.isFrozen(actual), true, 'Actual is frozen');
	// 	deepStrictEqual(actual, ['zero', 111, 'TWO', false], 'Actual added the new value');
	// });
});
