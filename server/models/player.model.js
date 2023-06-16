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
        },
        game1Status: {type: Number},
        game2Status: {type: Number},
        game3Status: {type: Number}


    }, { timestamps: true }
)
module.exports = mongoose.model('Player', PlayerSchema)