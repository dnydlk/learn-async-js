const fetchPromise = fetch(
  // Bad url
  "https://mdn.github.io/learningarea/javascript/apis/fetching-data/can-store/products.json"
)

fetchPromise
  .then((response) => {
    if (response.ok) {
      return response.json()
    }
    throw new Error(`Bad Response : ${response.status}`)
  })
  .then((products) => {
    products.forEach((product) => {
      console.log(product.name)
    })
  })
  //! catch block also runs async
  .catch((error) => {
    console.error(`Failed to get products: ${error}`)
  })

console.log("Chaining promises ... ")
