let tripsData = [];

import 'dotenv/config';
import fetch from 'node-fetch';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const app = express();
const port = 8081;
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
    const date = req.query.date;

    if(lat === null || lon === null || date === null) {
        res.send("Invalid request. Arguments missing.");
    }

    const response = fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lon}&key=${process.env.WEATHERBIT_API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            for(let forecast of data.data) {
                if(forecast.valid_date === date) {
                    res.send(forecast);
                    break;
                }
            }
        })
        .catch((err) => {
            console.error(err);
            console.log(`Failed to aquire weather data for lat: ${lat} long: ${lon}`);
        })
})

app.get('/geo', (req, res) => {
    const city = req.query.city;
    const country = req.query.country;

    if(city === null || country === null) {
        res.send("Invalid request. Arguments missing.");
    }

    const response = fetch(`http://api.geonames.org/searchJSON?name=${city}&username=${process.env.GEONAMES_USERNAME}`)
        .then((response) => response.json())
        .then((data) => {
            for(let dest of data.geonames){
                if(dest.name.toLowerCase() === city.toLowerCase() && dest.countryName.toLowerCase() === country.toLowerCase()) {
                    res.status(200).send(dest);
                    break;
                }
            }
        })
        .catch((err) => {
            console.error(err);
            console.log(`Failed to aquire data for places starting with ${city}`);
        })
})

app.get('/images', (req, res) => {

    const q = req.query.q;

    if(q === null) {
        res.send("Invalid request. Arguments missing.");
    }

    const response = fetch(`https://pixabay.com/api/?q=${q}&key=${process.env.PIXABAY_API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
            res.send(data.hits[0]);
        })
        .catch((err) => {
            console.err(err);
            console.log("Failed to retrieve photos");
        })
})

app.get('/trips', (req, res) => {
    if(tripsData.length > 0) {
        res.status(200).send(tripsData);
    } else {
        res.status(200).send({ message: "No trips" });
    }
})

app.listen(port, () => {
    console.log(`Travel Planner App listening on http://localhost:${port}`);
    console.log("Press Ctrl + C to exit...");
})