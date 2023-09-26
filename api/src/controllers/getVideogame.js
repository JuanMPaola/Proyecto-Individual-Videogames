const axios = require('axios');
const URL = "https://api.rawg.io/api/games";
const {API_KEY} = process.env;
const PAGE = 1;

const getVideogame = async (req, res) => {
    try {

        const {data} = await axios(`${URL}?key=${API_KEY}&page=${PAGE}`)

        if (!data) return res.status(404).send("Not found")

        if (data) return res.status(200).json(data)


    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = { getVideogame }