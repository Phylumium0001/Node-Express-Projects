const { Router } = require("express");
const db = require("../model/queries");

const gameRouter = Router();

gameRouter.get("/", async (req, res) => {
  console.log("Games");
  try {
    const items = (await db.getGamesOnly()).rows;
    // Update values and to have links
    items.forEach((element) => {
      element.link = `/games/${element.id}`;
    });
    res.status(200);
    res.render("categories", { items: items, title: "Games" });
  } catch (error) {
    console.error("Error fetching items:", error);
    res.status(500).send("Internal Server Error");
  }
});

gameRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  // Check if it is a number
  console.log(id);

  if (!isNaN(id)) {
    try {
      const item = await db.getById(id);
      const rows = item.rows[0];

      if (rows) {
        res.render("itemDisplay", { title: "Game", item: rows });
      } else {
        res.status(404).send("Game not found");
      }
    } catch (error) {
      console.error("Error fetching item:", error);
      res.status(500).send("Internal Server Error");
    }
  } else {
    res.redirect("/games");
  }
});

module.exports = gameRouter;
