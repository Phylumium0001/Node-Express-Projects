const authors = [
    { id: 1, name: "Bryan" },
    { id: 2, name: "Christian" },
    { id: 3, name: "Jason" },
  ];

async function getAuthorById(authorId) {
    return authors.find(atuhor=>atuhor.id === authorId)
    
}

module.exports = {getAuthorById}