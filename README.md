# Travel Planner App - Capstone
Udacity Front End Nanodegree program. 


## Description
This project is a web app that uses external APIs to return relevant information such weather forecast and images to plan or book a trip.


## Prerequisite
This project should run on a local server. Node and Express should be installed on the local machine. Required packages listed in `packages.json`.
	
- Create an account on [Geonames](http://www.geonames.org/export/web-services.html) 
- Create an account on [Weatherbit](https://www.weatherbit.io/account/create)
- Create an account with [Pixabay](https://pixabay.com/api/docs/)

then insert API KEY into the `.env` file.

```
WEATHERBIT_API_KEY="**************************"
PIXABAY_API_KEY="**************************"
GEONAMES_USERNAME="**************************"
```


## Installation
Ensure Node, Express, Cors, Body parser, Webpack and all required packages are installed.

```bash
npm install
```

Set up webpack config files for development and production environments.  Download files from this repo and navigate to the project folder. Afterwards, to start the server run these commands in command line:

```bash
npm run build-dev
npm run build-prod
npm run start
```

Navigate to http://localhost:8081/ in your browser.


## Usage
To use the app, enter select one of the available destinations in the select field and press the **Check Trip** button. A rounded div will appear with your trip details, you can choose to book or cancel your trip. Booked trips will be displayed with their current status in the **My Trips** div.



## Author
Jamiell Joseph