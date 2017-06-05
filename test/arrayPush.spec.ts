import {arrayPush} from '../src/frozen';

describe('arrayPush', () => {
	type MyArray = ReadonlyArray<string | number>;

	it('New value', () => {
		const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
		const actual: MyArray = arrayPush(initial, 333);
		expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
		expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
		expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
		expect(actual).toEqual(['zero', 111, 'TWO', 333], 'Actual added the new value');
	});
	it('Existing value', () => {
		const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
		const actual: MyArray = arrayPush(initial, 111);
		expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
		expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
		expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
		expect(actual).toEqual(['zero', 111, 'TWO', 111], 'Actual added the new value');
	});
	it('NaN', () => {
		const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
		const actual: MyArray = arrayPush(initial, NaN);
		expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
		expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
		expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
		expect(actual).toEqual(['zero', 111, 'TWO', NaN], 'Actual added the new value');
	});

	//-----------------------------------------------------------------------//
	// Those shouldn't even compile
	//-----------------------------------------------------------------------//
	// it('undefined', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayPush(initial, undefined); // This should be a syntax error
	// 	expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
	// 	expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
	// 	expect(actual).toEqual(['zero', 111, 'TWO', undefined], 'Actual added the new value');
	// });
	// it('null', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayPush(initial, null); // This should be a syntax error
	// 	expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
	// 	expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
	// 	expect(actual).toEqual(['zero', 111, 'TWO', null], 'Actual added the new value');
	// });
	// it('{}', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayPush(initial, {}); // This should be a syntax error
	// 	expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
	// 	expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
	// 	expect(actual).toEqual(['zero', 111, 'TWO', {}], 'Actual added the new value');
	// });
	// it('true', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayPush(initial, true); // This is a syntax error as expected
	// 	expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
	// 	expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
	// 	expect(actual).toEqual(['zero', 111, 'TWO', true], 'Actual added the new value');
	// });
	// it('false', () => {
	// 	const initial: MyArray = Object.freeze(['zero', 111, 'TWO']);
	// 	const actual: MyArray = arrayPush(initial, false); // This is a syntax error as expected
	// 	expect(initial).toEqual(['zero', 111, 'TWO'], 'Initial remains unchanged');
	// 	expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
	// 	expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
	// 	expect(actual).toEqual(['zero', 111, 'TWO', false], 'Actual added the new value');
	// });
});
