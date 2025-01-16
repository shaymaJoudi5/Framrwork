const express = require('express'); 
const app = express(); // Créer une instance d'une application Express
const port = 3001; 

// Middleware pour analyser les données codées en JSON et en URL
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Array  du l'utilisateurs
let users = [
    { id: 1, name: 'Alice', email: 'alice@example.com' },
    { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// Définir une route pour le chemin racine
app.get('/', (req, res) => {
    res.send('Welcome to the Users API!'); 
});

// GET tous les utilisateurs
app.get('/users', (req, res) => {
    res.json(users);
});

// GET un utilisateur par ID
app.get('/users/:id', (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
});

// POSTER un nouvel utilisateur
app.post('/users', (req, res) => {
    const newUser = { id: users.length + 1, ...req.body };
    users.push(newUser);
    res.status(201).json(newUser); 
});

// PUT pour mettre à jour un utilisateur
app.put('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Mettre à jour l'objet utilisateur
    users[userIndex] = { ...users[userIndex], ...req.body };
    res.json(users[userIndex]);
});

// SUPPRIMER un utilisateur
app.delete('/users/:id', (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    // Supprimer l'utilisateur du tableau
    const deletedUser = users.splice(userIndex, 1)[0];
    res.json({ message: 'User deleted', user: deletedUser });
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Application is listening on port ${port}!`);
});
