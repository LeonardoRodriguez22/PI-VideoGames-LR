const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Genres } = require("../db");

const removeHTMLTags = (text) => {
  // Expresión regular para buscar y eliminar las etiquetas HTML
  const regex = /(<([^>]+)>)/gi;
  return text.replace(regex, "");
};

const getById = async (req, res) => {
  const { idVideogame } = req.params;
  if (isNaN(idVideogame)) {
    let videogameDb = await Videogame.findByPk(idVideogame, {
      include: {
        model: Genres,
        attributes: ["name"],
        through: { attributes: [] },
        image:idVideogame.image,
      },
    });
    const filtered = {
      id: videogameDb.id,
      name: videogameDb.name,
        genre: videogameDb.Genres.map((g) => g.name).join(", "),
        description: videogameDb.description,
        releaseDate: videogameDb.releaseDate,
        rating: videogameDb.rating,
        platforms: videogameDb.platforms,
        image:videogameDb.image,
    }
    
    //dejo un array con los nombres de genero solamente
    // videogameDb.genres = videogameDb.genres.map((g) => g.name);
    res.json(filtered);
  } else {
    //else (si no es un juego creado, voy a buscar la info a la API)
    try {
      const response = (
        await axios.get(
          `https://api.rawg.io/api/games/${idVideogame}?key=${API_KEY}`
        )
      ).data;
      let {
        id,
        name,
        background_image,
        genres,
        description,
        released: releaseDate,
        rating,
        platforms,
      } = response;
      genres = genres.map((g) => g.name).join(", ");
      platforms = platforms.map((p) => p.platform.name);
      description = removeHTMLTags(response.description);
      return res.json({
        id,
        name,
        background_image,
        genres,
        description,
        releaseDate,
        rating,
        platforms,
      });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  }
};

module.exports = getById;
