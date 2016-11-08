'use strict';


/**
 * Clones an array, and adds a single value at the end.
 * @param   {Array}  frozenArray  Array to clone
 * @param   {*}      newValue     The value to add
 * @return  {Array}
 */
function arrayPush(frozenArray, newValue){
	const newArray = frozenArray.concat([newValue]);
	Object.freeze(newArray);
	return newArray;
}


/**
 * Clones an Array, and removes a single element (by index).
 * @param   {Array}   frozenArray  Array to clone
 * @param   {Number}  index        The index of the value to remove
 * @return  {Array}
 */
function arrayRemove(frozenArray, index){
	const newArray = ((typeof index === 'number') && (index > -1)) ? frozenArray.slice(0, index).concat(frozenArray.slice(index + 1)) : frozenArray;
	Object.freeze(newArray);
	return newArray;
}


/**
 * Clones an array of unique values, and adds an element if the value isn't already in it.
 * @param   {Array}  frozenArray  Array to clone
 * @param   {*}      newValue     The value to add
 * @return  {Array}
 */
function arrayUniquePush(frozenArray, newValue){
	return (frozenArray.indexOf(newValue) === -1) ? arrayPush(frozenArray, newValue) : frozenArray;
}


/**
 * Clones an array of unique values, and shortens it by removing one element (by value, not index).
 * @param   {Array}  frozenArray  Array to clone
 * @param   {*}      value        The value to remove
 * @return  {Array}
 */
function arrayUniqueRemove(frozenArray, value){
	const index = frozenArray.indexOf(value);
	return (index > -1) ? arrayRemove(frozenArray, index) : frozenArray;
}


/**
 * Clones an Object, and set the value of a specific property.
 * @param  {Object}  frozenObject
 * @param  {String}  propertyId
 * @param  {*}       value
 * @return {Object}
 */
function objectSet(frozenObject, propertyId, value){
	const newObject = Object.assign({}, frozenObject);
	newObject[propertyId] = value;
	Object.freeze(newObject);
	return newObject;
}


/**
 * Clones an Object, and deletes the value of a specific property.
 * @param  {Object}  frozenObject
 * @param  {String}  propertyId
 * @return {Object}
 */
function objectUnset(frozenObject, propertyId){
	const newObject = Object.assign({}, frozenObject);
	delete newObject[propertyId];
	Object.freeze(newObject);
	return newObject;
}


module.exports = {
	arrayPush,
	arrayRemove,
	arrayUniquePush,
	arrayUniqueRemove,
	objectSet,
	objectUnset
};
