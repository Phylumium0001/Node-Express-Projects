const router = require("express").Router()
const queries = require("../models/queries")

router.get('/', async (req, res) => {
  try {
    
    console.log(req.session.passport)
    const messages = await queries.getAllMessages()
    console.log(messages)
    // const memberCount = await getMemberCount(); // Implement this
    // messages = [{
    //   content: "Message text",
    //   createdAt: Date(),
    //   user: { username: "authorName" }
    // },
    // {
    //   content: "Message text",
    //   createdAt:  Date(),
    //   user: { username: "authorName" }
    // }]
    memberCount = 10


    res.render('index', {
      title: 'Cipher Board',
      currentUser: req.session.passport.user || null,
      messages,
      memberCount
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
})

module.exports = router 
