const { Videogame } = require('../db')
const { postHandler } = require('../handlres/postHandler')

const postVideogame = async (req, res) => {
    try {
        const { name, image, description, platafomrs, realesed, genres, rating } = req.body;

        if (!name || !description) res.status(400).json({ message: "Faltan datos" })

        const pe = await Videogame.findOne({ where: { name } })
        if (pe) return res.status(400).json({ message: "Videogame already exists" })

        if (name && description) {
            postHandler({ name,description ,  realesed, image, rating, genres /*,platafomrs  , */});
            res.status(200).json({ message: "Videogame created" })
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}

module.exports = { postVideogame }