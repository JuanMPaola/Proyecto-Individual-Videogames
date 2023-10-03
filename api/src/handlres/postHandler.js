const { Videogame, Genre } = require('../db');

const postHandler = async ({ name, background_image, description, platforms, realesed, genres, rating }) => {
    try {

        // Verificar si el videojuego ya existe en la base de datos
        const [videogame, created] = await Videogame.findOrCreate({
            where: {
                name,
                description,
                realesed,
                background_image,
                rating,
                platforms,
                
            },
        });

        console.log(genres)

        // Asociar los géneros con el videojuego
        if (genres) {
            for (const genreName of genres) {
                const genre = await Genre.findOne({
                    where: { name: genreName },
                });
                if (genre) {
                    await videogame.addGenre(genre.id);
                    console.log(`Género "${genreName}" asociado.`);
                }
            }
            const game = await Videogame.findOne({
                where:{id: videogame.id},
                include:[
                    {
                        model: Genre,
                        attributes: ["name"],
                        through: { attributes:[]}
                    }
                ]
            })
            return game;
        }

        return videogame; // Importante: devolver el videojuego creado
    } catch (error) {
        console.error("Error al crear el videojuego:", error);
        throw error;
    }
};

module.exports = { postHandler };