const router = require('express').Router();
const movieRoutes = require('./api/movieRoutes');
const homeRoutes = require('./homeRoutes')

router.use('/', homeRoutes);
router.use('/api', movieRoutes);

module.exports = router;
