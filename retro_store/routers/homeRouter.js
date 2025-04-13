const { Router } = require("express");
const db = require("../model/queries");

const homeRouter = Router();

homeRouter.get("/", async (req, res) => {
  console.log("Home");
  const games = (await db.getGamesOnly(10)).rows;
  const consoles = (await db.getConsolesOnly(10)).rows;
  console.log(games);

  // update values and to have links
  games.forEach((element) => {
    element.link = `/games/${element.id}`;
  });

  // update values and to have links
  consoles.forEach((element) => {
    element.link = `/consoles/${element.id}`;
  });

  res.render("home", { title: "Home", games: games, consoles: consoles });
});

module.exports = homeRouter;
