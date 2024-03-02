const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
)

// Promise chain: chain promises that have dependencies on each other
fetchPromise // chain of then block, better than fetch-promise-result
  .then((response) => response.json())
  .then((products) => {
    products.forEach((product) => {
      console.log(product.name)
    })
  })

console.log("Chaining promises ... ")
