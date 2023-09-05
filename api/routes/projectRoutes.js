
const express = require('express');
const router = express.Router();

// Routes pour la connexion
router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

// Routes pour les projets

module.exports = router;