const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: {type: String, default: 'N/A'},
  year: {
    type: Number,
    min: [1000,'There is no way this book is that old!'],
    max: [new Date().getFullYear(),'Are you from the future?  What are the winning lotto numbers?']
  },
  quantity: {type: Number, default: 0},
  imageURL: {type: String, default: ''}
})


module.exports = mongoose.model('Book', bookSchema)