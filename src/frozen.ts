
/**
 * Clones an array, and adds a single value at the end.
 * @param frozenArray Array to clone
 * @param newValue The value to add
 */
export function arrayPush<T>(frozenArray: ReadonlyArray<T>, newValue: T): ReadonlyArray<T> {
	const newArray = frozenArray.concat([newValue]);
	return Object.freeze(newArray);
}

/**
 * Clones an Array, and removes a single element (by index).
 * @param frozenArray Array to clone
 * @param index The index of the value to remove
 */
export function arrayRemove<T>(frozenArray: ReadonlyArray<T>, index: number): ReadonlyArray<T> {
	const isValidIndex = (typeof index === 'number') && (index > -1);
	return isValidIndex ? Object.freeze(frozenArray.slice(0, index).concat(frozenArray.slice(index + 1))) : frozenArray;
}

/**
 * Clones an array of unique values, and adds an element if the value isn't already in it.
 * @param frozenArray Array to clone
 * @param newValue The value to add
 */
export function arrayUniquePush<T>(frozenArray: ReadonlyArray<T>, newValue: T): ReadonlyArray<T> {
	return (frozenArray.indexOf(newValue) === -1) ? arrayPush(frozenArray, newValue) : frozenArray;
}

/**
 * Clones an array of unique values, and shortens it by removing one element (by value, not index).
 * @param frozenArray Array to clone
 * @param value The value to remove
 */
export function arrayUniqueRemove<T>(frozenArray: ReadonlyArray<T>, value: T): ReadonlyArray<T> {
	const index = frozenArray.indexOf(value);
	return (index > -1) ? arrayRemove(frozenArray, index) : frozenArray;
}
