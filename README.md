# sdkDB
SDK's Branch Of KSDQ.
KSDQ Is an open sourced database algorithm written in javascript.
## Tests & Samples
You can find examples in samples/.
# Features
- File I\O
- Simple Macros and classes for database handling.
- Data Indexing I\O
- JavaScript OOP API.
- Mostly class based
- Promise API
# Promise?
A Promise is an event that fires when one function has finished execution.

You can see this if you use the `ResolveItemByString` function. You can use .then() to run another event after.

```js
const sdksdq = require('sdksdq')

const newclient = new sdksdq({
    folder: "myQuery"
})

newclient.ResolveItemByString("myfile").then(() => {
    console.log("Finished a task.")
}) 
```
