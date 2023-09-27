const axios = require('axios');
const { getByIdHandler } = require('../handlres/getByIdHandler');
require('dotenv').config();
const { API_KEY } = process.env;

const getVdById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);

        if (data.id) {
            const juego = {
                id: data.id,
                name: data.name,
                description: data.description,
            };
            return res.status(200).json(juego);
        }
        if (!data.id) {
            return getByIdHandler(id)
        }
        // return res.status(404).send("Not found");
        
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getVdById };
