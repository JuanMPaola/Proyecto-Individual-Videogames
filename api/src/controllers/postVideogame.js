const { Videogame } = require ('../db')
const { postHandler } = require('../handlres/postHandler')

const postVideogame = async (req,res)=> {
    try {
        const {name, description, } = req.body;
        if(!name || !description) res.status(400).json({message: "Faltan datos"})
        
        console.log({name, description})
        if(name && description){
            postHandler({name, description});
            res.status(200).json({message:"Videogame created"})
        }


    } catch (error) {
        res.status(500).json({message: error.message})
    }

}

module.exports = {postVideogame}