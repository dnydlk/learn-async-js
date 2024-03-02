const array2D = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

function sumOfARow(row) {
  return new Promise((resolve, reject) => {
    if (Array.isArray(row)) {
      let sum = row.reduce((acc, curr) => acc + curr, 0)
      resolve(sum)
    } else {
      reject("BAD INPUT: Invalid array or row index")
    }
  })
}

function sum2DArrayConcurrently(arr) {
  let rowSumPromises = arr.map((row) => sumOfARow(row))
  return Promise.all(rowSumPromises).then((totalSum) =>
    totalSum.reduce((acc, curr) => acc + curr, 0)
  )
}

sum2DArrayConcurrently(array2D)
  .then((totalSum) => console.log("Total sum: " + totalSum))
  .catch((error) => console.log("Error: " + error))
