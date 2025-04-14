const { Router } = require("express");
const db = require("../model/queries");

const editRouter = Router();

// Editing Item
editRouter.get("/:id", async (req, res) => {
  console.log("Editing Item");
  const id = req.params.id
  if (!isNaN(id)) {
    try {
      // Get the item from database
      const item = await db.getById(id)
      res.render("editItem", { title: "Update Item", item: item });

    } catch (err) {
      console.error(`Failed to get id ${id} for editing`);
    }
  }
  else {
    console.log(`Invalid id : ${id}`)
  }
});

// Adding item
editRouter.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const formObj = req.body;

    const newObj = {
      name: formObj.name,
      category_id: convertCategoryToId(formObj),
      price: Number(formObj.price),
      quantity: Number(formObj.quantity),
      platform: formObj.platform,
      condition: formObj.condition,
    };

    const resposne = await db.addItem(newObj);
    if (response == "success") {
      console.log(`Successfully added ${newObj.name} to the database`)
      res.redirect("/");
    }
  } catch (error) {
    console.log(`Failed to add ${newObj.name} to the database`)
  }
});

module.exports = editRouter;
