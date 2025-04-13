const pool = require("./pool")


async function getById(id) {
  try {
    console.log(`Getting data on id : ${id}`)
    const parsedId = parseInt(id);
    const results = await pool.query("SELECT * FROM item WHERE id=$1", [parsedId])
    // console.log(results);

    return results
  }catch (error) {
  console.error(`Failed to get data : ${error}`);
}
}

// Get 10 latest items
async function getLatestItemsLimited() {
  try {
    console.log("Getting latest entries");
    return await pool.query("SELECT * FROM item ORDER BY id ASC LIMIT 10")
  } catch (error) {
    console.log(error);

  }
}

async function getGamesOnly(limit = 10) {
  try {
    console.log("Getting all games")
    return await pool.query("SELECT * FROM item WHERE category_id=1 ORDER BY id DESC LIMIT $1", [limit])
  } catch (error) {
    console.error(error);
  }
}

async function getConsolesOnly(limit = 10) {
  try {
    console.log("Getting all Consoles");
    return await pool.query("SELECT * FROM item WHERE category_id=2 ORDER BY id DESC LIMIT $1", [limit])
  } catch (error) {
    console.error(error);
  }
}

async function getByName(name) {
  try {
    console.log(`Searching for ${name}`);
    return await pool.query("SELECT * FROM item WHERE LOWER(name) LIKE $1", [`%${name}%`])


  } catch (error) {
    console.error(error);

  }
}
async function addItem(object) {
  try {
    console.log(`Adding ${object.name} to database`)
    await pool.query("INSERT INTO item (name,category_id,price,quantity,platform,condition,description) VALUES ($1,$2,$3,$4,$5,$6,$7)", [
      object.name,
      object.category_id,
      object.price,
      object.quantity,
      object.platform,
      object.condition,
      object.description
    ])
    return "success"

  } catch (error) {
    console.error(error);
    return "fail"
  }

}

async function updateItem(object) {
  try {
    console.log(`Updating ${object.name} in database`)
    pool.query("UPDATE item SET name=$1, category_id=$2, price=$3, quantity=$4, platform=$5, condition=$6 WHERE id = $7", [
      object.name,
      object.category_id,
      object.price,
      object.quantity,
      object.platform,
      object.condition,
      object.id
    ])
  } catch (error) {
    console.error(error);

  }
}


// const obj = {
//     name:"Far cry 5",
//     category_id: 1,
//     price:15.32,
//     quantity:5,
//     platform:"PC",
//     condition:"Used",
//     // For the update
//     id:111
// }

// addItem(obj)
// updateItem(obj)
// getByName("r")

// getById(11)

module.exports = {
  getLatestItemsLimited,
  getConsolesOnly,
  getGamesOnly,
  addItem,
  updateItem,
  getByName,
  getById
}
