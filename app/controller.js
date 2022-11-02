const games = require('../games.json');
const dayjs = require('dayjs')

const controller = {
  getHomepage(req,res){
    res.locals.games = games;
    res.locals.cssFile = null;
    res.locals.title = "Gamehub";
    res.render('index');
  },

  getGame(req,res){
    const nomDuJeu = req.params.nomDuJeu;
    const gamesData = games.find( game => game.name === nomDuJeu);
    
    res.locals.games = games;
    res.locals.title = gamesData.title;
    res.locals.cssFile = gamesData.cssFile;

    res.render(nomDuJeu);
  },

  get404(req,res){
    res.locals.games = games;
    res.locals.cssFile = null;
    res.status(404).render('404');
  },

  journalising(req,res, next){
        let currentDate = dayjs().format('DD/MM/YYYY')
        const userPath = req.path ;
        const ipAddress = req.socket.remoteAddress;
        console.log(`[${currentDate}][IP: ${ipAddress}][Path: ${userPath}]`)
        next();
  }

  };
module.exports = controller;

