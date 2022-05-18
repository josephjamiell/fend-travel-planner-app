let tripsData = [];

import 'dotenv/config';
import fetch from 'node-fetch';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { destinations, aircraft, saveTrips, loadTrips} from './travelData.js';

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

    const response = fetch(`http://api.geonames.org/searchJSON?placename=${city}&country=${country}&username=${process.env.GEONAMES_USERNAME}`)
        .then((response) => response.json())
        .then((data) => {
            res.status(200).send(data.geonames[0]);
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

app.get('/status', async (req, res) => {
   try {
    res.status(200).send({status: "online", code: 5555});
   } catch (err) {
       console.error(err);
       console.log("Failed to get status from server");
   }
})

app.get('/destinations', (req, res) => {
    const sortedDestinations = destinations.sort( function( a, b ) {
        a = a.city.toLowerCase();
        b = b.city.toLowerCase();
    
        return a < b ? -1 : a > b ? 1 : 0;
    });

    res.status(200).send(sortedDestinations);
})

app.get('/trips', async (req, res) => {
    if(tripsData.length > 0) {
        res.status(200).send(tripsData);
    } else {
        try {
            let loadedTrips = await loadTrips(path.join(__dirname, "trips.bkup.json"));
            let parsedTrips = JSON.parse(loadedTrips);
            if(parsedTrips.length > 0) {
                tripsData.push(...parsedTrips);
                res.status(200).send(tripsData);
            } else {
                res.status(200).send({ message: "No trips" });
            }
        } catch(err) {
            console.error(err);
            console.log("Failed to added loaded trips to tripsData");
        }
    }
})

app.post('/trips', async (req, res) => {
    try {
        let trip = {
            id: `JJ${(tripsData.length + 1).toString().padStart(4, "0")}`, 
            flight: `${aircraft[Math.floor(Math.random() * aircraft.length)].flight}`,
            information: req.body,
            isCanceled: null
        }
        tripsData.push(trip);
        saveTrips(tripsData, path.join(__dirname, "trips.bkup.json"));
        res.status(201).send("Successfully stored trip data");
    }
    catch(err) {
        console.error(err);
        res.status(500).send("Failed to store trip data");
    }
})

app.put('/trips', async (req, res) => {
    let id = req.body.id.toString();
    try {
        let tripToCancel = tripsData.find((trip) => {
            return trip.id == id;
        })
        let pos = tripsData.indexOf(tripToCancel, 0);
        tripsData[pos].isCanceled = true;
        saveTrips(tripsData, path.join(__dirname, "trips.bkup.json"));
        res.send(`Trip ${tripToCancel.id} to ${tripToCancel.information.destination} has been canceled.`);
    } catch(err) {
        console.error(err);
        console.log(`Failed to cancel trip ${id} on the server`)
    }
})

app.listen(port, () => {
    console.log(`Travel Planner App listening on http://localhost:${port}`);
    console.log("Press Ctrl + C to exit...");
})

export {app}