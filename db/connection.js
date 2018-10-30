const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/WDI18-p2-pebble')

mongoose.connection.once('open', () => {
    console.log(`Mongoose has connected to MongoDB`)
})
mongoose.connection.on('error', (error) => {
    console.error(`MongoDB connection error!!! ${error}`)
    process.exit(-1)
})

module.exports = mongoose