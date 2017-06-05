import {arrayUniqueRemove} from '../src/frozen';

describe('arrayUniqueRemove', () => {
	type MyArray = ReadonlyArray<string | number>;

	it('Numeric value', () => {
		const initial: MyArray = Object.freeze(['111', 111, 'TWO']);
		const actual: MyArray = arrayUniqueRemove(initial, 111);
		expect(initial).toEqual(['111', 111, 'TWO'], 'Initial remains unchanged');
		expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
		expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
		expect(actual).toEqual(['111', 'TWO'], 'Actual removed the value');
	});
	it('String value', () => {
		const initial: MyArray = Object.freeze(['111', 111, 'TWO']);
		const actual: MyArray = arrayUniqueRemove(initial, '111');
		expect(initial).toEqual(['111', 111, 'TWO'], 'Initial remains unchanged');
		expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
		expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
		expect(actual).toEqual([111, 'TWO'], 'Actual removed the value');
	});
	it('Invalid value', () => {
		const initial: MyArray = Object.freeze(['111', 111, 'TWO']);
		const actual: MyArray = arrayUniqueRemove(initial, 'BAD');
		expect(initial).toEqual(['111', 111, 'TWO'], 'Initial remains unchanged');
		expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
		expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
		expect(actual).toEqual(['111', 111, 'TWO'], 'Actual still has all values');
	});
	it('Non-unique array', () => {
		const initial: MyArray = Object.freeze(['222', 222, 'TWO', 222]);
		const actual: MyArray = arrayUniqueRemove(initial, 222);
		expect(initial).toEqual(['222', 222, 'TWO', 222], 'Initial remains unchanged');
		expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
		expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
		expect(actual).toEqual(['222', 'TWO', 222], 'Actual only removed the first occurence');
	});
	it('NaN', () => {
		const initial: MyArray = Object.freeze(['111', 111, 'TWO']);
		const actual: MyArray = arrayUniqueRemove(initial, NaN);
		expect(initial).toEqual(['111', 111, 'TWO'], 'Initial remains unchanged');
		expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
		expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
		expect(actual).toEqual(['111', 111, 'TWO'], 'Actual still has all values');
	});

	//-----------------------------------------------------------------------//
	// Those shouldn't even compile
	//-----------------------------------------------------------------------//
	// it('Undefined', () => {
	// 	const initial: MyArray = Object.freeze(['111', 111, 'TWO']);
	// 	const actual: MyArray = arrayUniqueRemove(initial, undefined); // This should be a syntax error
	// 	expect(initial).toEqual(['111', 111, 'TWO'], 'Initial remains unchanged');
	// 	expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
	// 	expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
	// 	expect(actual).toEqual(['111', 111, 'TWO'], 'Actual still has all values');
	// });
	// it('null', () => {
	// 	const initial: MyArray = Object.freeze(['111', 111, 'TWO']);
	// 	const actual: MyArray = arrayUniqueRemove(initial, null); // This should be a syntax error
	// 	expect(initial).toEqual(['111', 111, 'TWO'], 'Initial remains unchanged');
	// 	expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
	// 	expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
	// 	expect(actual).toEqual(['111', 111, 'TWO'], 'Actual still has all values');
	// });
	// it('{}', () => {
	// 	const initial: MyArray = Object.freeze(['111', 111, 'TWO']);
	// 	const actual: MyArray = arrayUniqueRemove(initial, {}); // This should be a syntax error
	// 	expect(initial).toEqual(['111', 111, 'TWO'], 'Initial remains unchanged');
	// 	expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
	// 	expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
	// 	expect(actual).toEqual(['111', 111, 'TWO'], 'Actual still has all values');
	// });
	// it('true', () => {
	// 	const initial: MyArray = Object.freeze(['111', 111, 'TWO']);
	// 	const actual: MyArray = arrayUniqueRemove(initial, true); // This is a syntax error as expected
	// 	expect(initial).toEqual(['111', 111, 'TWO'], 'Initial remains unchanged');
	// 	expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
	// 	expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
	// 	expect(actual).toEqual(['111', 111, 'TWO'], 'Actual still has all values');
	// });
	// it('false', () => {
	// 	const initial: MyArray = Object.freeze(['111', 111, 'TWO']);
	// 	const actual: MyArray = arrayUniqueRemove(initial, false); // This is a syntax error as expected
	// 	expect(initial).toEqual(['111', 111, 'TWO'], 'Initial remains unchanged');
	// 	expect(Array.isArray(actual)).toBe(true, 'Actual is an Array');
	// 	expect(Object.isFrozen(actual)).toBe(true, 'Actual is frozen');
	// 	expect(actual).toEqual(['111', 111, 'TWO'], 'Actual still has all values');
	// });
});
