const usersController = {
    index: (req, res) => {
        // res.send("Hey whats up this is app index")
        res.render('app/index')
    }
}

module.exports = usersController