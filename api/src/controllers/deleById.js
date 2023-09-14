const { Videogame } = require("../db");

const deleteById = async (req, res) => {
  const { id } = req.params;
  try {
    await Videogame.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send("Videogame has deleted💥💥");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = deleteById;
