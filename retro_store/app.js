const path = require("path");

const homeRouter = require("./routers/homeRouter");
const gameRouter = require("./routers/gameRouter");
const consoleRouter = require("./routers/consoleRouter");
const newItemRouter = require("./routers/newItemRouter");
const searchRouter = require("./routers/searchRouter");
const updateItemRouter = require("./routers/updateItemRouter");
const deleteRouter = require("./routers/deleteRouter.js")

const express = require("express");
const app = express();

// Ejs setup
app.set("view engine", "ejs");

// Body parser setup
app.use(express.urlencoded({ extended: true }));

// Css
const assetPath = path.join(__dirname, "styles");
app.use(express.static(assetPath));

// The homepage with all items
// Also handles searches
app.use("/", homeRouter);

// Shows games only and individual games
app.use("/games", gameRouter);

// Shows consoles only and individual consoles
app.use("/consoles", consoleRouter);

// Edit specific item
app.use("/update",updateItemRouter)
// app.use("/update", updateRouter);

// Delete Specific
app.use("/delete",deleteRouter)

// Add new item to the db
app.use("/new", newItemRouter);

// Seearch Item
app.use("/search", searchRouter);

PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server created at port ${PORT}`);
});

