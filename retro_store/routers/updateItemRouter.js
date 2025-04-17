const { Router } = require("express");
const db = require("../model/queries");
const { waitingCount } = require("../model/pool");

const updateRouter = Router();

// Editing Item
updateRouter.get("/:id", async (req, res) => {
  console.log("Editing Item");
  const id = req.params.id
  if (!isNaN(id)) {
    try {
      // Get the item from database
      const item = (await db.getById(id)).rows[0]

      console.log("===============================")
      console.log("UPDATING ITEM")
      console.log("===============================")

      console.log(item)
      res.render("updateItem", { title: "Update Item", item: item });

    } catch (err) {
      console.error(`Failed to get id ${id} for editing`);
    }
  }
  else {
    console.log(`Invalid id : ${id}`)
  }
});


// Adding item
updateRouter.post("/:id", async (req, res) => {
  console.log(req.params)
  try {
    const formObj = req.body;

    const newObj = {
      id: req.params.id,
      name: formObj.name,
      category_id: formObj.category,
      price: Number(formObj.price),
      quantity: Number(formObj.quantity),
      platform: formObj.platform,
      condition: formObj.condition,
      description:formObj.description
    };
    console.log("New Object")
    console.log(newObj)

    const response = await db.updateItem(newObj);

    if (response == "success") {
      console.log(`Successfully updated ${newObj.name} to the database`)
      res.redirect("/");
    }
  } catch (error) {
    console.log(`Failed to update ${req.body.name} to the database`)
  }
});

module.exports = updateRouter;
