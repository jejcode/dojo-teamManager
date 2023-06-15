const mongoose = require('mongoose') // import mongoose library
const PlayerSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: [true, 'Player name is required'],
            minlength: [2, "Name must be at least 2 characters long."]
        },
        position: {
            type: String
        }
    }, { timestamps: true }
)
module.exports = mongoose.model('Player', PlayerSchema)