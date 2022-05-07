const getTripDetails = async () => {
    const dest = document.getElementById("desired-dest").value;

    if(dest.length <= 0) {
        alert("Please enter a valid city");
        return;
    }

    let city = dest.split(",")[0].trim();
    let country = dest.split(",")[1].trim();

    try {
        const weather = await fetchCoordinates(city, country).then(async (coordinates) => {
            return await fetchWeather(coordinates.lat, coordinates.lng)
        })

        //const imageData = await fetchImage(weather.weather.description);
        const imageData = await fetchImage(city);

        Client.populateTripDetails(weather, imageData);
        
    } catch(err) {
        console.error(err);
        console.log("Failed to process city information to retrieve weather");
    }   
}

const fetchCoordinates = async (city, country) => {
    return await fetch(`http://localhost:8081/geo?city=${city}&country=${country}`)
    .then((response) => response.json())
    .then((data) => {
        return data;
    })
    .catch((err) => {
        console.error(err);
        console.log(`Unable to retrieve coordinates for a city called ${city}`);
    })
}

const fetchWeather = async (lat, lon) => {
    return await fetch(`http://localhost:8081/weather?lat=${lat}&lon=${lon}`)
    .then((response) => response.json())
    .then((data) => {
        return data;
    })
    .catch((err) => {
        console.error(err);
        console.log(`Unable to retrieve the weather for specified location`);
    })
}

const fetchImage = async (name) => {
    return await fetch(`http://localhost:8081/images?q=${name}`)
    .then((response) => response.json())
    .then((data) => {
        return data.webformatURL;
    })
    .catch((err) => {
        console.error(err);
        console.log(`Unable to retrieve an image matching the specified search pattern (${name})`)
    })
}

export { getTripDetails }