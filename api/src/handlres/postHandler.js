const { Videogame } = require('../db')

const postHandler = ({name, description, plataform, realesed, rating}) => {
    Videogame.findOrCreate({where:{name, description, plataform, realesed, rating}})

}

module.exports = { postHandler }