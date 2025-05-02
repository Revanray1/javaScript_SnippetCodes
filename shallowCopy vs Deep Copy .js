const arr = [
  { id: 1, name: 'Apple', details: { color: 'Red' } },
  { id: 2, name: 'Banana', details: { color: 'Yellow' } },
  { id: 3, name: 'Cherry', details: { color: 'Dark Red' } }
];

const index = 1; // We want to remove "Banana"
const newArr1 = JSON.parse(JSON.stringify(arr.slice(0, index)))
  .concat(JSON.parse(JSON.stringify(arr.slice(index + 1))));

// Modify nested data in newArr1
newArr1[0].details.color = 'Green';

console.log("Approach 1 - newArr1:", newArr1);
console.log("Approach 1 - original arr:", arr);

OUTPUT :
--------
Approach 1 - newArr1:
[
  { id: 1, name: 'Apple', details: { color: 'Green' } },
  { id: 3, name: 'Cherry', details: { color: 'Dark Red' } }
]

Approach 1 - original arr:
[
  { id: 1, name: 'Apple', details: { color: 'Red' } },
  { id: 2, name: 'Banana', details: { color: 'Yellow' } },
  { id: 3, name: 'Cherry', details: { color: 'Dark Red' } }
]
arr is unaffected — changes to newArr1 don’t touch the original because it’s fully deep cloned.



  const newArr2 = arr.slice(0, index)
  .concat(JSON.parse(JSON.stringify(arr.slice(index + 1))));

// Modify nested data in newArr2
newArr2[0].details.color = 'Blue';

console.log("Approach 2 - newArr2:", newArr2);
console.log("Approach 2 - original arr:", arr);


OUTPUT :
--------

Approach 2 - newArr2:
[
  { id: 1, name: 'Apple', details: { color: 'Blue' } },
  { id: 3, name: 'Cherry', details: { color: 'Dark Red' } }
]

Approach 2 - original arr:
[
  { id: 1, name: 'Apple', details: { color: 'Blue' } },
  { id: 2, name: 'Banana', details: { color: 'Yellow' } },
  { id: 3, name: 'Cherry', details: { color: 'Dark Red' } }
]


**arr was mutated — because newArr2[0] and arr[0] are the same object due to the shallow copy.


methods

SHALLOW COPY 


1. Using Object.assign():
const original = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, original);
 
2. Using the Spread Syntax (...) (for objects):
const original = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original };

3.Using Spread Syntax (...) for Arrays
const originalArray = [1, 2, 3];
const shallowCopyArray = [...originalArray];

4.Using Array.prototype.slice() (for arrays):
const originalArray = [1, 2, 3];
const shallowCopyArray = originalArray.slice();

5.Using Array.from() (for Arrays)
const originalArray = [1, 2, 3];
const shallowCopyArray = Array.from(originalArray);



DEEP Copy

1. Using JSON.parse() and JSON.stringify():
const original = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original));

2. Using a Custom Recursive Function

function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  
  // Handle Date objects
  if (obj instanceof Date) return new Date(obj);

  // Handle Array objects
  if (Array.isArray(obj)) return obj.map(item => deepCopy(item));

  // Handle Object type
  const copy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}

const original = { a: 1, b: { c: 2 }, d: [3, 4] };
const deepCopyObj = deepCopy(original);

3. Using External Libraries (e.g., Lodash)
const _ = require('lodash');

const original = { a: 1, b: { c: 2 } };
const deepCopy = _.cloneDeep(original);

4. Using a Custom Solution with StructuredClone() (Browser environment only)
const original = { a: 1, b: { c: 2 }, d: new Date() };
const deepCopy = structuredClone(original);

5.


