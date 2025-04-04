import { CreateReadStream, WriteStream } from "fs"

// Streams divide a file into chunks for easier reads and writes of large files
const readStream = CreateReadStream("./large_file.json")
const writeStream = WriteStream("./new_large_file.json")

readStream.on(data, (chunk)=>{
  console.log(chunk)
  writeStream.write(chunk)
})

// Pipes - Reading and writing simultaneously
// Same as the intial block of code
readStream.pipe(writeStream)