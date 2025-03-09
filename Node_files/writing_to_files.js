const fs = require("node:fs")

const content = {name:"Kofi",age:21, gender:"Male"}
const jsonString = JSON.stringify(content)

fs.writeFile("./Node_files/dummy.json", jsonString, err=>{
  if (err){
    console.error(err)
  }else{
    console.log("Successful")
  }
})
