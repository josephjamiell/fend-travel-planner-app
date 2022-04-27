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

app.listen(port, () => {
    console.log(`Travel Planner App listening on http://localhost:${port}`);
    console.log("Press Ctrl + C to exit...");
})