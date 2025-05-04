
const router = require('express').Router();

router.use('/api', require('./api/index.js'));

module.exports = router;