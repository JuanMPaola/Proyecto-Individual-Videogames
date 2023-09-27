const { Videogame } = require('../db')

const getByIdHandler = async (res, req, id) => {
    try {
        const juego = await Videogame.findOne({where: {id}})
        console.log(juego)
        console.log(id)

        if(juego) return res.status(200).json(juego)

        if(!juego) return res.status(404).send("Not found")

    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}

module.exports = { getByIdHandler }