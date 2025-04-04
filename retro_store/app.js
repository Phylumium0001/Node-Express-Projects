const homeRouter = require('./routers/homeRouter');
const gameRouter = require('./routers/gameRouter');
const consoleRouter = require('./routers/consoleRouter');
const editRouter = require('./routers/editRouter');
const newItemRouter = require('./routers/newItemRouter');

const app = require("express").app()
// The homepage with all categories and items
// Handle searches
app.use("/",homeRouter)

// Shows games only and individual games
app.use("/games",gameRouter)

// Shows consoles only and individual consoles
app.use("/console",consoleRouter)

// Edit specific item
app.use("/edit",editRouter)

// Add new item to the db
app.use("/new",newItemRouter)


PORT = 5000
app.listen(PORT, ()=>{
    console.log(`Server created at port ${PORT}`);
})