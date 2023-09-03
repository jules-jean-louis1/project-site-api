const express = require('express');
const app = express();


// Config du moteur de template EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Config du dossier public
app.use(express.static(__dirname + '/public'));

// Routes
const projectRoutes = require('./routes/projectRoutes');

app.use('/', projectRoutes);

const port = 3000;
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});