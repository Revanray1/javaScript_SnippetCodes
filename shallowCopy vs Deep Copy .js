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



