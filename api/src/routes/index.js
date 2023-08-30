const  router = require('express').Router();
const  getGenre = require('../controllers/getGenre');
const  postVideoGames = require("../controllers/postVG")
const  getVideoGames = require("../controllers/getVG")
const  getVideoGamesById = require("../controllers/getVGById")
const  getByName = require("../controllers/getVGByName")




router.get("/genres", getGenre)             
router.post("/videogames/post" , postVideoGames)      
router.get("/videogames", getVideoGames)              
router.get("/videogames/:idVideogame", getVideoGamesById)
router.get("/" , getByName)


module.exports = router;


