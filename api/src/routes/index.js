const router = require("express").Router();
const getGenre = require("../controllers/getGenre");
const postVideoGames = require("../controllers/postVG");
const getVideoGames = require("../controllers/getVG");
const getById = require("../controllers/getVGById");
const getByName = require("../controllers/getVGByName");
const deleteById = require("../controllers/deleById");

router.get("/genres", getGenre);
router.post("/videogames/post", postVideoGames);
router.get("/videogames", getVideoGames);
router.get("/videogames/:idVideogame", getById);
router.get("/", getByName);
router.delete("/delete/:id", deleteById);

module.exports = router;
