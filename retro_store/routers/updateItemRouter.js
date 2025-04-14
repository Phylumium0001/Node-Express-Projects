// const {Router} = require("express")
// const db = require("../model/queries")
//
// const updateItemRouter = Router()
//
// updateItemRouter.get("/:id", async (req,res)=>{
//     console.log(`Fetching item`);
//     const id = Number(req.params.id)
//     console.log(id);
//    try {
//     const item = await db.getById(id).rows
//     res.render("updateItem",{title:"Update Item",item:item})
//
//    } catch (error) {
//     console.error(error);
//    } 
//
// })
//
// module.exports = updateItemRouter

const { Router } = require("express");
const db = require("../model/queries");

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
updateRouter.post("/", async (req, res) => {
  console.log(req.body);

  try {
    const formObj = req.body;

    const newObj = {
      name: formObj.name,
      category_id: formObj.category_id,
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
    console.log(`Failed to add ${req.body.name} to the database`)
  }
});

module.exports = updateRouter;
