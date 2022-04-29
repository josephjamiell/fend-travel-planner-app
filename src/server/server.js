import 'dotenv/config';
import fetch from 'node-fetch';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));

console.log(path.join(__dirname, '../client'));

app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile('dist/index.html');
})

app.get('/weather', (req, res) => {
    const lat = req.query.lat;
    const lon = req.query.lon;

    if(lat === null || lon === null) {
        res.send("Invalid request. Arguments missing.");
    }

    const response = fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${process.env.WEATHERBIT_API_KEY}`)
        .then((response) => response.json())
        .then((data) => {res.send(data)})
        .catch((err) => {
            console.error(err);
            console.log(`Failed to aquire weather data for lat: ${lat} long: ${lon}`);
        })
})

app.get('/geo', (req, res) => {
    const city = req.query.city;

    if(city === null) {
        res.send("Invalid request. Arguments missing.");
    }

    const response = fetch(`http://api.geonames.org/postalCodeSearchJSON?placename_startsWith=${city}&country=us&username=${process.env.GEONAMES_USERNAME}`)
        .then((response) => response.json())
        .then((data) => {
            let locations = data.postalCodes.map(x => {return {
                city: x.placeName, 
                state: x.adminName1,
                latitude: x.lat,
                longitude: x.lng
            }});
            res.send(locations[0]);
        })
        .catch((err) => {
            console.error(err);
            console.log(`Failed to aquire data for places starting with ${city}`);
        })
})

app.get('/images', (req, res) => {

    const q = req.query.q;

    if(placename === null) {
        res.send("Invalid request. Arguments missing.");
    }

    const response = fetch(`https://pixabay.com/api/?q=leopard&key=${process.env.PIXABAY_API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.err(err);
            console.log("Failed to retrieve photos");
        })
})

app.listen(port, () => {
    console.log(`Travel Planner App listening on http://localhost:${port}`);
    console.log("Press Ctrl + C to exit...");
})