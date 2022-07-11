const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const movieRoutes = require('./api/movieRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/api', movieRoutes);

module.exports = router;

