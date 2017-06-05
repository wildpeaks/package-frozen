# Frozen arrays utilities

[![Build Status](https://travis-ci.org/wildpeaks/package-frozen.svg?branch=master)](https://travis-ci.org/wildpeaks/package-frozen)

Typescript functions to **manipulate [frozen](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) arrays**.

All functions leave the original Array untouched, and return a new frozen Array with the modification.


Install:

	npm install @wildpeaks/frozen


---

## Function: arrayPush

**Appends a single element** at the end of an Array.

Usage:


````ts
function arrayPush<T>(frozenArray: ReadonlyArray<T>, newValue: T): ReadonlyArray<T>
````

Example:

````ts
import {arrayPush} from '@wildpeaks/frozen';

type MyArray = ReadonlyArray<string | number>;
const srcArray: MyArray = Object.freeze(['zero', 111, 'TWO']);
const newArray: MyArray = arrayPush(srcArray, 333);

// Result:
//  srcArray  ['zero', 111, 'TWO']
//  newArray  ['zero', 111, 'TWO', 333]
````


---

## arrayRemove

**Removes a single element**, by index.

Usage:

````ts
function arrayRemove<T>(frozenArray: ReadonlyArray<T>, index: number): ReadonlyArray<T>
````

Example:

````ts
import {arrayRemove} from '@wildpeaks/frozen';

type MyArray = ReadonlyArray<string | number>;
const srcArray: MyArray = Object.freeze(['zero', 111, 'TWO']);
const newArray: MyArray = arrayRemove(srcArray, 0);

// Result:
//   srcArray  ['zero', 111, 'TWO']
//   newArray    [111, 'TWO']
````


---

## arrayUniquePush

**Appends a single element** at the end of an Array like `arrayPush`, but only **if the array doesn't already contain the value**.
The Array is expected to contain only unique values.

Usage:

````ts
function arrayUniquePush<T>(frozenArray: ReadonlyArray<T>, newValue: T): ReadonlyArray<T>
````

Example (the Array doesn't contain the value):

````ts
import {arrayUniquePush} from '@wildpeaks/frozen';

type MyArray = ReadonlyArray<string | number>;
const srcArray: MyArray = Object.freeze(['zero', 111, 'TWO']);
const newArray: MyArray = arrayUniquePush(srcArray, 333);

// Result:
//   srcArray  ['zero', 111, 'TWO']
//   newArray    ['zero', 111, 'TWO', 333]
````

Example (the Array already contains the value):

````ts
import {arrayUniquePush} from '@wildpeaks/frozen';

type MyArray = ReadonlyArray<string | number>;
const srcArray: MyArray = Object.freeze(['zero', 111, 'TWO']);
const newArray: MyArray = arrayUniquePush(srcArray, 111);

// Result:
//   srcArray  ['zero', 111, 'TWO']
//   newArray  ['zero', 111, 'TWO']
````


---

## arrayUniqueRemove

**Removes a single element** from an Array, by value (whereas `arrayRemove` removes by index).
The Array is expected to contain only unique values.

Usage:

````ts
function arrayUniqueRemove<T>(frozenArray: ReadonlyArray<T>, value: T): ReadonlyArray<T>
````

Example:

````ts
import {arrayUniqueRemove} from '@wildpeaks/frozen';

type MyArray = ReadonlyArray<string | number>;
const srcArray: MyArray = Object.freeze(['zero', 111, 'TWO']);
const newArray: MyArray = arrayUniqueRemove(srcArray, 111);

// Result:
//   srcArray  ['zero', 111, 'TWO']
//   newArray  ['zero', 'TWO']
````

---

