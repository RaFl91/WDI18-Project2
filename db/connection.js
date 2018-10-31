require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.log('error', err)
})

// mongoose.connection.once('open', () => {
//     console.log(`Mongoose has connected to MongoDB`)
// })
// mongoose.connection.on('error', (error) => {
//     console.error(`MongoDB connection error!!! ${error}`)
//     process.exit(-1)
// })

module.exports = mongoose