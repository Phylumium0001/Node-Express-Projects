const { randomUUID } = require("crypto")
const express = require("express")
const db = require("./models/queries")
const path = require("path")
const { log } = require("console")
const app = express()

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(express.urlencoded())

const assetPath = path.join(__dirname, "public")
app.use(express.static(assetPath))

app.get("/", async (req, res) => {
  console.log("Home");
  const messages = (await db.getAllMessages()).rows
  // if (messages) {
  //   res.render("pages/home", { title: "Home", messages: messages })
  // } else {
  //   res.send("No Messages Found")
  // }
  res.render("pages/home", { title: "Home", messages: messages })

})

app.get("/message/:id",async (req, res) => {
  const id = req.params.id
  console.log(`Getting message : ${id}`)
  message = await db.getById(id)
  // if (message) {
  //   res.render("pages/message", { title: "Message", message: message })
  // } else {
  //   res.send("Failed to get message")
  // }
  res.render("pages/message", { title: "Message", message: message })

})

app.get("/new", (req, res) => {
  res.render("pages/newMessage", { title: "New Message" })
})

app.post("/new",async (req, res) => {
  const message = req.body
  const id = randomUUID()
  message.id = id
  message.link = `/message/${id}`
  // messages.push(req.body)
  console.log(`Adding :${message}`)
  // Add to database
  response = await db.createMessage(message)
  if (response) {
    console.log(`Message saved to databse`)
    res.redirect("/")
  }
})

const PORT = process.env.PORT | 5000
app.listen(PORT, () => {
  console.log(`Server Initated at port : ${PORT}`)
})
