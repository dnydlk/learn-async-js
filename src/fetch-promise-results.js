const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
)

fetchPromise.then((response) => {
  console.log("🚀 ~ fetchPromise entered")
  const jsonPromise = response.json() // Problem: can't do jsonPromise unless fetchPromise is complete. Not solving the callback-hell problem
  console.log("🚀 ~ Got jsonPromise")
  jsonPromise.then((products) => {
    console.log("🚀 ~ Calling jsonPromise.then")
    products.forEach((product) => {
      console.log("🚀 ~ Calling products.forEach\n")
      // console.log(product.name)
      console.log(product)
    })
  })
})

console.log("Fetching products ... \n")
