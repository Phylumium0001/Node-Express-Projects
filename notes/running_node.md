# Running Node scripts fomr the command line
`node app.js`
This is telling the shell ot run your script with node
You can also use the *"shebang"*.This is the first line in the file,
which tells the OS whcih interperter to use for running the script. Below
is the first line of javaScript.

```javascript app.js
#!/usr/bin/node
// Some of the systems have node installed in the env directory
#!/usr/bin/env node

```

### Making the file executable
`chmod u+x app.js`

## Passing string as argument to
- ### Expression argument
You can run an expression using the eval argument
`node -e "console.log(123)"`
*cmd* does not recognise '' as quotations unless "".
But bash recognises both

- ### Restarting application automatically
`node --watch app.js`
The application restarts automatically when it detects file changes

- ## Running a task with Node.js
Node.js provides a built-in task runner that allows you to execue specific commands defined in your `package.json` file. This can be particularly useful for automating repetitive tasks such as running tests, building your project or linting your code

- ### Using the `--run` flag
```json
{
    "type":"module",
    "scripts":{
        "start" : "node app.js",
        "dev" : "node --run -- --watch",
        "test" : "node --test"
    }
}
```

You can run `test` scripts using the `--run` flag:
`node --run test`


