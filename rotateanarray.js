// RotateanArrayto90Degree

function rotateMatrix90DegreesRight(matrix) {
  const rows = matrix.length; //4
  const cols = matrix[0].length; //3

  // Create a new matrix to hold the rotated result
  
  const rotatedMatrix = Array.from({ length: cols }, (_,i) => Array(rows).fill(0));


console.log(rotatedMatrix)
  // Transpose and reverse rows
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      rotatedMatrix[j][rows - 1 - i] = matrix[i][j];
    }
  }

  return rotatedMatrix;
}





// Example usage
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const rotated = rotateMatrix90DegreesRight(matrix);
console.log(rotated);


OUTPUT:

  [ 
    [ 7, 4, 1 ],
    [ 8, 5, 2 ],
    [ 9, 6, 3 ] 
  ]


