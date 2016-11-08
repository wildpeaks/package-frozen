# Frozen utilities

Javascript functions to **manipulate [frozen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) arrays and objects**.

All functions leave the original Array/Object untouched, and return a new frozen Array/Object with the modification.


Install:

	npm install @wildpeaks/frozen

Array functions:

 - `arrayPush`
 - `arrayRemove`
 - `arrayUniquePush`
 - `arrayUniqueRemove`


Object functions:

 - `objectSet`
 - `objectUnset`


---

## arrayPush

**Appends a single element** at the end of an Array.

Usage:

	arrayPush( frozenArray: Array, newValue: any ): Array

Example:

````js
const {arrayPush} = require('@wildpeaks/frozen');

const fromArray = ['zero', 111, 'TWO'];
Object.freeze(fromArray);

// Append value `333`
const newArray = arrayPush(fromArray, 333);

// Result:
//   fromArray  ['zero', 111, 'TWO']
//   newArray   ['zero', 111, 'TWO', 333]
````


---

## arrayRemove

**Removes a single element**, by index.

Usage:

	arrayPush( frozenArray: Array, index: Number ): Array

Example:

````js
const {arrayRemove} = require('@wildpeaks/frozen');

const fromArray = ['zero', 111, 'TWO'];
Object.freeze(fromArray);

// Remove index `0`
const newArray = arrayRemove(fromArray, 0);

// Result:
//   fromArray  ['zero', 111, 'TWO']
//   newArray   [111, 'TWO']
````


---

## arrayUniquePush

**Appends a single element** at the end of an Array like `arrayPush`, but only **if the array doesn't already contain the value**.
The Array is expected to contain only unique values.

Usage:

	arrayUniquePush( frozenArray: Array, newValue: any ): Array

Example (the Array doesn't contain the value):

````js
const {arrayUniquePush} = require('@wildpeaks/frozen');

const fromArray = ['zero', 111, 'TWO'];
Object.freeze(fromArray);

// Append value `333`
const newArray = arrayUniquePush(fromArray, 333);

// Result:
//   fromArray  ['zero', 111, 'TWO']
//   newArray   ['zero', 111, 'TWO', 333]
````

Example (the Array already contains the value):

````js
const {arrayUniquePush} = require('@wildpeaks/frozen');

const fromArray = ['zero', 111, 'TWO'];
Object.freeze(fromArray);

// Append value `111`
const newArray = arrayUniquePush(fromArray, 111);

// Result:
//   fromArray  ['zero', 111, 'TWO']
//   newArray   ['zero', 111, 'TWO']
````


---

## arrayUniqueRemove

**Removes a single element** from an Array, by value (whereas `arrayRemove` removes by index).
The Array is expected to contain only unique values.

Usage:

	arrayUniqueRemove( frozenArray: Array, value: any ): Array

Example:

````js
const {arrayUniqueRemove} = require('@wildpeaks/frozen');

const fromArray = ['zero', 111, 'TWO'];
Object.freeze(fromArray);

// Remove value `111`
const newArray = arrayUniqueRemove(fromArray, 111);

// Result:
//   fromArray  ['zero', 111, 'TWO']
//   newArray   ['zero', 'TWO']
````


---

## objectSet

**Sets the value of a single property** of an Object.

Usage:

	objectSet( frozenObject: Object, propertyId: String, value: any ): Object

Example (new property):

````js
const {objectSet} = require('@wildpeaks/frozen');

const fromObj = {};
Object.freeze(fromObj);

// Set a value for `fromObject.hello`
const newObj = objectSet(fromObj, 'hello', 123);

// Result:
//   fromObj  {}
//   newObj   {hello: 123}
````

Example (existing property):

````js
const {objectSet} = require('@wildpeaks/frozen');

const fromObj = {hello: 111};
Object.freeze(fromObj);

// Update the value of `fromObj.hello`
const newObj = objectSet(fromObj, 'hello', 222);

// Result:
//   fromObj  {hello: 111}
//   newObj   {hello: 222}
````


---

## objectUnset

**Deletes a single property** of an Object.

Usage:

	objectUnset( frozenObject: Object, propertyId: String ): Object

Example:

````js
const {objectUnset} = require('@wildpeaks/frozen');

const fromObj = {hello: 111};
Object.freeze(fromObj);

// Delete `fromObj.hello`
const newObj = objectUnset(fromObj, 'hello');

// Result:
//   fromObj  {hello: 111}
//   newObj   {}
````


---

