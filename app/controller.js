const games = require('../games.json');

const controller = {
  getHomepage(req,res){
    res.locals.games = games;
    res.locals.cssFile = null;
    res.locals.title = "Gamehub";
    res.render('index');
  },
  // getFourchette(req,res){
  //   res.locals.games = games;
  //   res.locals.css = '';
  //   res.render('fourchette');
  // },
  // getDiceRoller(req,res){
  //   res.locals.games = games;
  //   res.locals.css = 'diceRoller';
  //   res.render('diceRoller');
  // },
  getGame(req,res){
    const nomDuJeu = req.params.nomDuJeu;

    const gamesData = games.find( game => game.name === nomDuJeu);

    // console.log(gamesData);
    
    res.locals.games = games;
    
    
    if(gamesData){
      res.locals.title = gamesData.title;
      res.locals.cssFile = gamesData.cssFile;
      
      res.render(nomDuJeu);
    } else {
      res.locals.cssFile = null;
      res.status(404).render('404');
    }

  },
};


module.exports = controller;

