function customMap(data, callback) {
  const result = []; // empty array to store data
  for (let i = 0; i < data.length; i++) {
    result.push(callback(data[i], i, data)); // Apply the callback function to each element
  }
  return result;
}

const data = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
  { name: "Daisy", age: 22 }
];

const condition = (d) => d.age > 20;

const result = customMap(data, (d) => condition(d));
console.log(result);  // Output: [false, true, true, true]
