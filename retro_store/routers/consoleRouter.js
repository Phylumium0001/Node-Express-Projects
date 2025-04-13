const { Router } = require("express");
const db = require("../model/queries");

const consoleRouter = Router();

consoleRouter.get("/", async (req, res) => {
  console.log("Consoles");
  try {
    const items = await db.getConsolesOnly();
    const rows = items.rows;

    // Update values and to have links
    rows.forEach(element => {
      element.link = `/consoles/${element.id}`
    });

    res.render("categories", { title: "Consoles", items: rows });
  } catch (error) {
    console.error(`Failed fetching data : ${error}`);
    res.status(500).send("Internal Server Error");
  }
});

consoleRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  // Check if it is a number
  console.log(id);

  if (!isNaN(id)) {
    try {
      const item = await db.getById(id);

      const rows = item.rows[0];

      if (rows) {
        res.render("itemDisplay", { title: "Consoles", item: rows });
      } else {
        res.status(404).send("Console not found");
      }
    } catch (error) {
      console.error("Error fetching item:", error);

      res.status(500).send("Internal Server Error");
    }
  } else {
    res.redirect("/consoles");
  }
});

module.exports = consoleRouter;
