const { Videogame, Genre } = require('../db');

const postHandler = async ({ name, image, description, platafomrs, realesed, genres, rating}) => {
    try {

        // Verificar si el videojuego ya existe en la base de datos
        const [videogame, created] = await Videogame.findOrCreate({
            where: {
                name,
                description,
                realesed, 
                image,
                rating,
                genres/*
                platafomrs,
                 */
            },
        });

        if (!created) {
            console.log("El videojuego ya existe:", videogame.name);
        } else {
            console.log("Videojuego creado:", videogame.name);

            // Asociar los géneros con el videojuego
            if (genres && genres.length > 0) {
                for (const genreName of genres) {
                    const genre = await Genre.findOne({
                        where: { name: genreName },
                    });

                    if (genre) {
                        await videogame.addGenre(genre);
                        console.log(`Género "${genreName}" asociado.`);
                    } else {
                        console.log(`Género "${genreName}" no encontrado.`);
                    }
                }
            }
        }
    } catch (error) {
        console.error("Error al crear el videojuego:", error);
    }
};


module.exports = { postHandler }