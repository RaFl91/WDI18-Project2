const applicationController = {
    index: (req, res, next) => {
        // res.send(`Home page is responsive`)
        res.render('app/index', {title: `Express`})
    }
}

module.exports = applicationController