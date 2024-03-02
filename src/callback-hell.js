// init initial value
function doStep1(init, callback) {
  const result = init + 1
  console.log("🚀 ~ doStep1 ~ result:", result)
  callback(result)
}

function doStep2(init, callback) {
  const result = init + 2
  console.log("🚀 ~ doStep2 ~ result:", result)
  callback(result)
}

function doStep3(init, callback) {
  const result = init + 3
  console.log("🚀 ~ doStep3 ~ result:", result)
  callback(result)
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`)
      })
    })
  })
}

doOperation()
