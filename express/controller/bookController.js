const links = [
    {
        name: "Home",
        url: "/"
    },
    {
        name: "Authors",
        url: "/authors"
    },
    {
        name: "Books",
        url: "/books"
    }
]

const getBooks = (req, res,next) => {
    res.render("books", {
        links: links
    })
}

const createNewBook = (req, res,next) => {
    res.render("new_book")
}

const saveNewBook = (req, res,next) => {
    const {title,author} = req.body
    console.log(title,author)
    res.send("Book Created")
}

module.exports = {
    getBooks,
    createNewBook,
    saveNewBook
}