const games = require('../games.json');

const controller = {
  getHomepage(req,res){
    res.locals.games = games;
    res.locals.css = '';
    res.render('index'); // nom du fichier .ejs lié
  },
  getFourchette(req,res){
    res.locals.games = games;
    res.locals.css = '';
    res.render('fourchette');
  },
  getDiceRoller(req,res){
    res.locals.games = games;
    res.locals.css = 'diceRoller';
    res.render('diceRoller');
  },
};

module.exports = controller;
