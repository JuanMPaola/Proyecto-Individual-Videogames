const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const { getVdById } = require('../controllers/getVdById')
const { getGenres } = require('../controllers/getGenres')
const { getVideogame } = require('../controllers/getVideogame')
const { postVideogame } = require('../controllers/postVideogame')
const { getVdName } = require ('../controllers/getVdName')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames/:id", getVdById);
router.get("/videogames", getVideogame);
router.get("/genres", getGenres);
router.post("/videogames", postVideogame);
router.get("/videogames/name", getVdName);

module.exports = router;
