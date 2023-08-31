const axios = require("axios");
require("dotenv").config();
const { API_KEY } = process.env;
const { Videogame, Genres } = require("../db");
const { Op } = require("sequelize");

const getByName = async (req, res) => {
  let { name } = req.query;

  try {
    const gamesDB = await Videogame.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: {
        model: Genres,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });

    const { data } = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`
    );
    const apiByName = data.results.map((vg) => {
      return {
        id: vg.id,
        name: vg.name,
        image: vg.background_image,
        genres: vg.genres,
      };
    });

    const vGByName = [...gamesDB, ...apiByName];

    if (vGByName.length === 0) {
      throw Error("No se encontro el Video Game");
    }

    if (vGByName.length > 15) {
      const vGByNameSlice = vGByName.slice(0, 15);
      return res.status(200).json(vGByNameSlice);
    }
    return res.status(200).json(vGByName);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};
module.exports = getByName;
