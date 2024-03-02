const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
)

console.log(fetchPromise)

fetchPromise.then((response) => {
  const responseJsonPromise = response.json()
  console.log("🚀 ~ fetchPromise.then ~ responseJsonPromise:", responseJsonPromise)
  responseJsonPromise.then((products) => {
    products.forEach((eachProduct) => {
      console.log(eachProduct)
    })
  })
  console.log(`Received response? ${response.ok ? "yes" : "no"}`)
  console.log(`Response Status: ${response.status}`)
  // console.log("🚀 ~ fetchPromise.then ~ response:", response)
  // execute code outside of the browser, outside of the main thread
})

console.log("Started request…")
