const ksdq = require('../ksdq')


const client = new ksdq({
    folder: "HelloWorldQuery"
})
client.query = ["hello"]
// Introduces another way to insert data source.
const databuffer = new client.DataSource('HelloWorldQuery', "id", "1234")
console.log(client.ResolveItemContentByString('id').shift())