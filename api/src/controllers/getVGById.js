const axios = require("axios");
require('dotenv').config();
const {API_KEY} = process.env;
const {Videogame, Genre} = require("../db")

const getVideoGamesById = async (req, res) => {
    const { idVideogame } = req.params
  if (idVideogame.includes('-')) {
    let videogameDb = await Videogame.findOne({
        where: {
            id: idVideogame,
        },
        include: Genre
    })
       //dejo un array con los nombres de genero solamente
    videogameDb.genres = videogameDb.genres.map(g => g.name);
    res.json(videogameDb)
} else {
    //else (si no es un juego creado, voy a buscar la info a la API)
    try {
        const response = await axios.get(`https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`);
        let { id, name, background_image, genres, description, released: releaseDate, rating, platforms } = response.data;
        genres = genres.map(g => g.name); // de la API me trae un array de objetos, mapeo solo el nombre del genero
        platforms = platforms.map(p => p.platform.name); // de la API me trae un array de objetos, mapeo solo el nombre de la plataforma
        return res.json({
            id,
            name,
            background_image,
            genres,
            description,
            releaseDate,
            rating,
            platforms
        })
    } catch (error) {
        res.status(500).send({error:error.message})
    }
  }
};


module.exports = getVideoGamesById;


