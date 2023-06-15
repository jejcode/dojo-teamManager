const mongoose = require('mongoose') // import mongoose library
const GameSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: [true, 'Name is required'],
            minlength: [3, "Name must be 3 characters long."]
        },
    }, { timestamps: true }
)
module.exports = mongoose.model('Game', GameSchema)