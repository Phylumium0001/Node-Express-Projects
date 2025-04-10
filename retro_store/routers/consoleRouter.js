const { Router } = require("express");
const db = require("../model/queries");

const consoleRouter = Router();

consoleRouter.get("/", async (req, res) => {
  console.log("Consoles");
  try {
    const items = await db.getConsolesOnly();
    const rows = items.rows;
    res.render("categories", { title: "Consoles", items: rows });
  } catch (error) {
    console.error(`Failed fetching data : ${error}`);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = consoleRouter;
