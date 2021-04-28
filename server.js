const express = require('express');
const path = require('path');

var app = express();

var PORT = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/assets", express.static("./assets"));


//ROUTING
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));



// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`))