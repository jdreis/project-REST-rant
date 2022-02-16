const router = require('express').Router();

// RESTAURANTS
router.get('/', (req, res) => {
    res.send('GET /places');
});

module.exports = router;