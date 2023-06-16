const Player = require('../models/player.model')
module.exports = {
    findAllPlayers : (req, res) => {
        Player.find()
            .then(allPlayers => {
                res.json(allPlayers)
            })
            .catch(err => {
                res.json({ message: 'Something went wrong.', error: err})
            })
    },

    findPlayer : (req, res) => {
        Player.findOne({_id: req.params.id})
        .then( Player => {
            console.log(Player)
            res.json(Player)
        })
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
    },

    createOnePlayer : (req,res) => {
        Player.create(req.body)
            .then( newPlayer => {
                res.json(newPlayer)
            })
            .catch(err => res.status(400).json(err))
    },

    updatePlayer : (req,res) => {
        console.log('req.body', req.body)
        console.log('id', req.params.id)
        Player.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
            .then( updatedPlayer => {
                res.json(updatedPlayer)
            })
            .catch(err => res.status(400).json(err))
    },

    deletePlayer : (req, res) => {
        Player.findByIdAndDelete({_id: req.params.id})
            .then(deleteConfirmation => res.json(deleteConfirmation))
            .catch(err => res.json(err))
    }
    
}