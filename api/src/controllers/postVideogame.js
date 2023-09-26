const { Videogame } = require ('../db')

const postVideogame = async (req,res)=> {
    try {
        const {name, description, plataform, realesed, rating} = req.body;
        if(!name || !description || !plataform || !realesed || !rating) res.status(400).json({message: "Faltan datos"})
        
        postHandler({name, description, plataform, realesed, rating});
        res.status(200).json({message:"Videogame created"})


    } catch (error) {
        res.status(500).json({message:message})
    }

}

module.exports = {postVideogame}