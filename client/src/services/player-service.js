import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://localhost:8000/api'
})

const createPlayer = async (formData) => {
    try{
        const player = await instance.post('/players', formData)
        return player.data
    }
    catch (err) {
        throw err
    }
}
const getAllPlayers = async () => {
    try {
        const players = await instance.get('/players')
        return players.data
    }
    catch (err){
        console.log(err)
        throw(err)
    }
}

const getOnePlayer = async (playerId) => {
    try{
        const player = await instance.get(`/players/${playerId}`)
        return player.data
    }
    catch (err) {
        throw err
    }
}

const updateOnePlayer = async (playerId, formData) => {
    try{
        const player = await instance.put(`/players/${playerId}`, formData)
        return player.data
    }
    catch (err) {
        throw err
    }
}

const deletePlayerById = async (playerId) => {
    try{
        const res = await instance.delete(`/players/${playerId}`)
        return res.data
    }
    catch (err) {
        throw err
    }
}
export {
    createPlayer,
    getAllPlayers,
    getOnePlayer,
    updateOnePlayer,
    deletePlayerById
}