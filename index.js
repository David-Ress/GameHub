const router = require('./app/router');
const controller = require('./app/controller');
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT ?? 3000;

// Vues
app.set('views', './views');
app.set('view engine', 'ejs');

// Dossier public
app.use(express.static('public'));




app.use(router);



app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

