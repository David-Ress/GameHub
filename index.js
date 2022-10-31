
require('dotenv').config();

const express = require('express');
const app = express();

// Vues
app.set('views', './views');
app.set('view engine', 'ejs');

// Dossier public
app.use(express.static('public'));

const router = require('./app/router');
app.use(router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});

