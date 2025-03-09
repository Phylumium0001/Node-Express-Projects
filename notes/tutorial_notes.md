# Node.js
Node.js is a javascript runtime which enables us to run javascript on the server.
- It is asynchronous(Single Threaded)
- When the event is fired, it moves on but adds response to the loop
- Anything that is not CPU intensive is good for node.js. Such as IO and CRUD apps.

## Installing modules
`npm init` Creates the package.json file
`npm install package`
`npm install -g package` Installs globally

```javascript
const person = {
    name:"Ben",
    age:12
}

module.exports = person


// Importing the file
// This is called common js import
const person = require("./person")
// Also works for functions, classes
```
