const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors()); // Permet au front React de communiquer avec ce serveur
app.use(express.json());

// Route de test
app.get('/', (req, res) => {
    res.send('Serveur ATCA en ligne - Prêt pour le service');
});

// Endpoint API simulé (pour montrer que Node est utile)
app.get('/api/info', (req, res) => {
    res.json({
        company: "ATCA",
        tagline: "L'excellence automobile, neuf et occasion."
    });
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});