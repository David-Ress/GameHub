const express = require('express');
const router = express.Router();

const controller = require('./controller.js');

router.get('/', controller.getHomepage);
router.get('/game/fourchette', controller.getFourchette);
router.get('/game/diceRoller', controller.getDiceRoller);

module.exports = router;
