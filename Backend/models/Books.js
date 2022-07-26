const mongoose = require('mongoose')

const BooksSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        trim: true
    },
    author:{
        type:String,
        required: true,
        trim: true
    },
    description:{
        type:String,
        required: true,
        trim: true
    },
    imageUrl:{
        type: String,
    },
    price:{
        type: Number,
        required: true,
        trim: true
    },
    available:{
        type: Boolean
    }
}, {timestamps: true})

module.exports = mongoose.model('Books', BooksSchema)