---
title: the-nodejs-fs-module
displayTitle: 'The Node.js fs module'
description: 'The fs module of Node.js provides useful functions to interact with the file system'
authors: flaviocopes, MylesBorins, fhemberger, LaRuaNa, ahmadawais, clean99
category: learn
---

The `fs` module provides a lot of very useful functionality to access and interact with the file system.

There is no need to install it. Being part of the Node.js core, it can be used by simply requiring it:

```js
const fs = require('fs');
```

Once you do so, you have access to all its methods, which include:

* `fs.access()`: check if the file exists and Node.js can access it with its permissions
* `fs.appendFile()`: append data to a file. If the file does not exist, it's created
* `fs.chmod()`: change the permissions of a file specified by the filename passed. Related: `fs.lchmod()`, `fs.fchmod()`
* `fs.chown()`: change the owner and group of a file specified by the filename passed. Related: `fs.fchown()`, `fs.lchown()`
* `fs.close()`: close a file descriptor
* `fs.copyFile()`: copies a file
* `fs.createReadStream()`: create a readable file stream
* `fs.createWriteStream()`: create a writable file stream
* `fs.link()`: create a new hard link to a file
* `fs.mkdir()`: create a new folder
* `fs.mkdtemp()`: create a temporary directory
* `fs.open()`: opens the file and returns a file descriptor to allow file manipulation
* `fs.readdir()`: read the contents of a directory
* `fs.readFile()`: read the content of a file. Related: `fs.read()`
* `fs.readlink()`: read the value of a symbolic link
* `fs.realpath()`: resolve relative file path pointers (`.`, `..`) to the full path
* `fs.rename()`: rename a file or folder
* `fs.rmdir()`: remove a folder
* `fs.stat()`: returns the status of the file identified by the filename passed. Related: `fs.fstat()`, `fs.lstat()`
* `fs.symlink()`: create a new symbolic link to a file
* `fs.truncate()`: truncate to the specified length the file identified by the filename passed. Related: `fs.ftruncate()`
* `fs.unlink()`: remove a file or a symbolic link
* `fs.unwatchFile()`: stop watching for changes on a file
* `fs.utimes()`: change the timestamp of the file identified by the filename passed. Related: `fs.futimes()`
* `fs.watchFile()`: start watching for changes on a file. Related: `fs.watch()`
* `fs.writeFile()`: write data to a file. Related: `fs.write()`

One peculiar thing about the `fs` module is that all the methods are asynchronous by default, but they can also work synchronously by appending `Sync`.

For example:

* `fs.rename()`
* `fs.renameSync()`
* `fs.write()`
* `fs.writeSync()`

This makes a huge difference in your application flow.

> Node.js 10 includes [experimental support](https://nodejs.org/api/fs.html#fs_fs_promises_api) for a promise based API

For example let's examine the `fs.rename()` method. The asynchronous API is used with a callback:

```js
const fs = require('fs');

fs.rename('before.json', 'after.json', err => {
  if (err) {
    return console.error(err);
  }

  // done
});
```

A synchronous API can be used like this, with a try/catch block to handle errors:

```js
const fs = require('fs');

try {
  fs.renameSync('before.json', 'after.json');
  // done
} catch (err) {
  console.error(err);
}
```

The key difference here is that the execution of your script will block in the second example, until the file operation succeeded.

You can use promise-based API provided by `fs/promises` module to avoid using callback-based API, which may cause [callback hell](http://callbackhell.com/). Here is an example:

```js
// Example: Read a file and change its content and read
// it again using callback-based API.
const fs = require('fs');

const fileName = '/Users/joe/test.txt';
fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
  const content = 'Some content!';
  fs.writeFile(fileName, content, err2 => {
    if (err2) {
      console.log(err2);
      return;
    }
    console.log('Wrote some content!');
    fs.readFile(fileName, 'utf8', (err3, data3) => {
      if (err3) {
        console.log(err3);
        return;
      }
      console.log(data3);
    });
  });
});
```

The callback-based API may rise a callback hell when there are too many nested callbacks. We can simply use promise-based API to avoid it:

```js
// Example: Read a file and change its content and read
// it again using promise-based API.
const fs = require('fs/promises');

async function example() {
  const fileName = '/Users/joe/test.txt';
  try {
    const data = await fs.readFile(fileName, 'utf8');
    console.log(data);
    const content = 'Some content!';
    await fs.writeFile(fileName, content);
    console.log('Wrote some content!');
    const newData = await fs.readFile(fileName, 'utf8');
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
}
example();
```


# Streams
When we read files, the data is loaded into the memory. So, reading large files will cause alot memory and processing power.
It is better to read in streams

```javascript 
import fs from 'fs';
import path from 'path';
import { pipeline } from 'node:stream/promises';

const fileUrl = 'https://www.gutenberg.org/files/2701/2701-0.txt';
const outputFilePath = path.join(process.cwd(), 'moby.md');

async function downloadFile(url, outoutPath) {
  const response = await fetch(url);

  if (!response.ok || !response.body) {
    throw new Error(`Failed to fetch ${url}. Status: ${response.status}`);
  }

  const fileStream = fs.createWriteStream(outoutPath);
  console.log(`Downloading file from ${url} to ${outoutPath}`);

  await pipeline(response.body, fileStream);
  console.log('File downloaded successfully');
}

async function readFile(filePath) {
  const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

  try {
    for await (const chunk of readStream) {
      console.log('--- File chunk start ---');
      console.log(chunk);
      console.log('--- File chunk end ---');
    }
    console.log('Finished reading the file.');
  } catch (error) {
    console.error(`Error reading file: ${error.message}`);
  }
}

try {
  await downloadFile(fileUrl, outputFilePath);
  await readFile(outputFilePath);
} catch (error) {
  console.error(`Error: ${error.message}`);
}
```
