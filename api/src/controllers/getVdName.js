const { Videogame } = require('../db')
const URL = "https://api.rawg.io/api/games?search="
const {API_KEY} = process.env;


const getVdName = async (req, res) => {
    try {
        const { name } = req.params;
        const { data } = await axios(`${URL}${name}?key=${API_KEY}`)
        
        if (data.name) {
            return res.status(200).json(data)
        } else {
            const { data } = await Videogame.findOne({where: {name}})
            if(data.name) res.status(200).json({data})
        }
        if (!name) {
            res.status(404).send("Not found")
        }

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getVdName }