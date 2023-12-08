const express = require('express');


const app = express();
const PORT = 8000;
//artistsArray!
const artistListArray = [
    {
        name: 'Miles Davis',
        born: 1926,
        died: 1990,
    },
    {
        name: 'Duke Ellington',
        born: 1899,
        died: 1974,
    },
    {
        name: 'John Coltrane',
        born: 1926,
        died: 1987,
    },
    {
        name: 'Louis Daniel Armstrong',
        born: 1901,
        died: 1971,
    },
];
//SongArray!
const songListArray = [
    {
        title: 'Take Five',
        artist: 'The Dave Brubeck Quartet',
    },
    {
        title: 'So What',
        artist: 'Miles Davis',
    },
    {
        title: 'Sing Sing Sing',
        artist: 'Benny Goodman',
    },
    {
        title: 'Take the "A" Train',
        artist: 'The Dave Brubeck Quartet',
    },
];

app.use(express.static('server/public'));

app.get('/artist', (req, res) => {
    res.send(artistListArray);
});


app.listen(PORT, () => {
    console.log('listening on port', PORT)
});

//GET for songs
//added song
app.get('/song', (req, res) => {
    res.send(songListArray);
});

//add artist
//server setup - POST
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
//route for post requests
app.post('/', (req,res) => {
    // The data (body) sent from the client is saved for us
    // in `req.body`
    // Note that without bodyParser setup, req.body will be undefined!
    console.log(`Get a POST request!`, req.body);

    // Grab the new artist from the request body
    let artist = req.body.newArtistBody;

    // Push the artist into our array
    console.log(`Adding new artist: `, artist)
    artistList.push(artist);

    // Send back a status code of 201
    res.sendStatus(201);
});
//TESTING
app.post('./song', function(req, res) {
    console.log('POST REQUEST - add artist');
    res.send(newArtistBody);
});
