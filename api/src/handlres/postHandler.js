const { Videogame } = require('../db')


const postHandler = async ({ name, description }) => {
    const [videogame, created] = await Videogame.findOrCreate({ where: { name, description } })
    
    if(created){
        return console.log("Created", videogame.name)
    }else{
        return console.log("videogame already existing:", videogame.name)
    } 
}

module.exports = { postHandler }