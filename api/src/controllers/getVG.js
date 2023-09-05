const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame } = require("../db");
const { Genres } = require("../db");

const getVideoGames = async (req, res) => {
  try {
    const DBGames = await Videogame.findAll({
      include: {
        model: Genres,
        attributes: ["name"],
        trough: { attributes: [] },
      },
    });

    const DBFilter = DBGames?.map((vg) => ({
      id: vg.id,
      name: vg.name,
      genre: vg.Genres?.map((g) => g.name).join(", "),
      image: vg.image,
      rating: vg.rating,
    }));

    const response1 = (
      await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page_size=100&page=1`
      )
    ).data.results;
    const response2 = (
      await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page_size=100&page=2`
      )
    ).data.results;
    const response3 = (
      await axios.get(
        `https://api.rawg.io/api/games?key=${API_KEY}&page_size=100&page=3`
      )
    ).data.results;

    const APIGames = [...response1, ...response2, ...response3];
    const apiGames1 = APIGames?.map((vg) => ({
      rating: vg.rating,
      id: vg.id,
      name: vg.name,
      genre: vg.genres?.map((g) => g.name).join(", "),
      image: vg.background_image,
    }));

    const allGames = [...DBFilter, ...apiGames1];
    // console.log(allGames.length);
    res.status(200).json(allGames);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = getVideoGames;
