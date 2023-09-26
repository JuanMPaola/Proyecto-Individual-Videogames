const axios = require('axios')
const URL = "https://api.rawg.io/api/games"
const {API_KEY} = process.env


const getVdById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}?key=${API_KEY}`)
        const { name, description, plataform, realesed, rating } = data;

        if (!name) {
            res.status(404).send("Not found")
        }

        

        if (name) {
            return res.status(200).json({ name, description, plataform, realesed, rating })
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getVdById }