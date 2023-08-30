require('dotenv').config();
const { API_KEY } = process.env;
const axios = require('axios');
const { Genres } = require('../db');


const getGenre = async (req, res) => {
   
   try {
       const {data} = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
     
       const genres = data.results;
       
       const genresfilter = genres?.map((genre) => genre.name)
       genresfilter.forEach(async (g) => {
           await Genres.findOrCreate({
               where: {
                   name: g
               }
           })
       })
       res.status(200).send("Generos creados en la base de Datos")
   } catch (error) {
       res.status(400).json({error:error.message})
   }
}

module.exports = getGenre
