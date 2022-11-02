const express = require('express');
const router = express.Router();

const controller = require('./controller.js');

router.use(controller.journalising)
router.get('/', controller.getHomepage);
// router.get('/game/fourchette', controller.getFourchette);
// router.get('/game/diceRoller', controller.getDiceRoller);
router.get('/game/:nomDuJeu', controller.getGame);
router.use(controller.get404);


module.exports = router;
