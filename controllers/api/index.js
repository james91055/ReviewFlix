const router = require('express').Router();
const movieRoutes = require('./movieRoutes');

router.use('/', movieRoutes);

module.exports = router;
