const controller = {
  getHomepage(req,res){
    // res.locals.title = '';
    res.render('index'); // nom du fichier .ejs lié
  },
};

module.exports = controller;
