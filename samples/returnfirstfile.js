// Imports KSDQ
const ksdq = require('../ksdq')

// Adds a nwe KSDQ Structured protocol.
const Request = new ksdq({
    folder: "HelloWorldQuery"
})
const newfile = new ksdq.FileWriter('./HelloWorldQuery/id', '123');


Request.query = ["hello"]

// Gets the first member in the data query.
// KSDQ 1.0
let id = Request.ResolveItemContentByString('id').shift()
console.log(id); // returns '123'

