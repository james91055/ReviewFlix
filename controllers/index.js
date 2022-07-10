const router = require('express').Router();
const movieRoutes = require('./api/movieRoutes');

router.use('/api', movieRoutes);

module.exports = router;
