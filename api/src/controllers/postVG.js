const { Videogame, Genres } = require("../db");

const createVideoGame = async (
  name,
  description,
  platforms,
  image,
  releaseDate,
  rating,
  genre
) => {
  return await Videogame.create({
    name: name,
    description: description,
    platforms: platforms,
    image: image,
    releaseDate: releaseDate,
    rating: rating,
    genre: genre,
  });
};

const postVideoGames = async (req, res) => {
  const { name, description, platforms, image, releaseDate, rating, genre } =
    req.body;

  try {
    const newVideoGame = await createVideoGame(
      name,
      description,
      platforms,
      image,
      releaseDate,
      rating
    );

    genre?.forEach(async (g) => {
      let genresDB = await Genres.findAll({ where: { name: g } });
      await newVideoGame.addGenre(genresDB);
    });

    return res.status(201).json(newVideoGame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postVideoGames;
