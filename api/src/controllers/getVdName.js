const axios = require('axios');
const { Videogame } = require('../db');
const URL = "https://api.rawg.io/api/games?search=";
require('dotenv').config();
const { API_KEY } = process.env;
const { Op } = require('sequelize');

const getVdName = async (req, res) => {
    const { name } = req.query;

    try {
        const { data } = await axios(`${URL}${name}&key=${API_KEY}`);



        const juego = {
            id: data.id,
            name: data.name,
            description: data.description,
        }
        res.status(200).json(juego)
        console.log(juego)
        if (!data.results || data.results.length === 0) {
            res.status(404).send("Not Found")
        }
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
};

module.exports = { getVdName };

/* const {name} = req.query;
    try {
        const {data} = await axios(https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
        if(data.results && data.results.length > 0){
            const first15Results = data.results.slice(0,16);
            const videogame = first15Results.map(game =>({
                id: game.id,
                name: game.name,
                description: game.description
            }));
            return res.status(200).json(videogame)
        }else{
            const dbVideogame = await findOne({where:{name}})
            if(dbVideogame){
                return res.status(200).json({
                    id: dbVideogame.id,
                    name: dbVideogame.name,
                    description: dbVideogame.description
                })
            }else{
                res.status(404).send("Videojuego no encontrado")
            }
        }

    } catch (error) {
        return res.status(500).send(error.message)
    }` */
