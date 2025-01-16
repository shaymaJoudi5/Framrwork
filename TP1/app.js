const express = require('express');
const app = express(); 
const port = 3000; 

const loggerMiddleware = (req, res, next) => {
    const now = new Date();
    const date = now.toLocaleDateString(); 
    const time = now.toLocaleTimeString(); 
    console.log(`[${date} ${time}] ${req.method} ${req.path}`); 
    next(); 
};

app.use(loggerMiddleware);

app.get('/', (req, res) => {
    res.send('Exercice 1!');
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`); 
});
