/* eslint-env node, jasmine */
import {arrayRemove} from '../src/frozen';

describe('arrayRemove', () => {
	type MyArray = ReadonlyArray<string | number>;

	it('0 (valid)', () => {
		const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
		const actual: MyArray = arrayRemove(initial, 0);
		expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
		expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
		expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
		expect(actual).toEqual([111, 'TWO'], 'Actual removed the value');
	});
	it('1 (valid)', () => {
		const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
		const actual: MyArray = arrayRemove(initial, 1);
		expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
		expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
		expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
		expect(actual).toEqual(['zero', 'TWO'], 'Actual removed the value');
	});
	it('1 (invalid)', () => {
		const initial: MyArray = Object.freeze(['zero']);
		const actual: MyArray = arrayRemove(initial, 1);
		expect(initial).toEqual(['zero'], 'Initial remains unchanged');
		expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
		expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
		expect(actual).toEqual(['zero'], 'Actual still has all values');
	});
	it('3 (invalid)', () => {
		const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
		const actual: MyArray = arrayRemove(initial, 3);
		expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
		expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
		expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
		expect(actual).toEqual(['zero', 111, 'TWO'], 'Actual still has all values');
	});
	it('5 (invalid)', () => {
		const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
		const actual: MyArray = arrayRemove(initial, 5);
		expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
		expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
		expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
		expect(actual).toEqual(['zero', 111, 'TWO'], 'Actual still has all values');
	});
	it('-1', () => {
		const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
		const actual: MyArray = arrayRemove(initial, -1);
		expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
		expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
		expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
		expect(actual).toEqual(['zero', 111, 'TWO'], 'Actual still has all values');
	});
	it('NaN', () => {
		const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
		const actual: MyArray = arrayRemove(initial, NaN);
		expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
		expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
		expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
		expect(actual).toEqual(['zero', 111, 'TWO'], 'Actual still has all values');
	});

	//-----------------------------------------------------------------------//
	// Those shouldn't even compile
	//-----------------------------------------------------------------------//
	// it('undefined', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayRemove(initial, undefined); // This is a syntax error as expected
	// 	expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
	// 	expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
	// 	expect(actual).toEqual(['zero', 111, 'TWO', undefined], 'Actual added the new value');
	// });
	// it('null', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayRemove(initial, null); // This is a syntax error as expected
	// 	expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
	// 	expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
	// 	expect(actual).toEqual(['zero', 111, 'TWO', null], 'Actual added the new value');
	// });
	// it('{}', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayRemove(initial, {}); // This is a syntax error as expected
	// 	expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
	// 	expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
	// 	expect(actual).toEqual(['zero', 111, 'TWO', {}], 'Actual added the new value');
	// });
	// it('true', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayRemove(initial, true); // This is a syntax error as expected
	// 	expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
	// 	expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
	// 	expect(actual).toEqual(['zero', 111, 'TWO', true], 'Actual added the new value');
	// });
	// it('false', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayRemove(initial, false); // This is a syntax error as expected
	// 	expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
	// 	expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
	// 	expect(actual).toEqual(['zero', 111, 'TWO', false], 'Actual added the new value');
	// });
});
