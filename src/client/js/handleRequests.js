const getTripDetails = async () => {
    const originCity = document.getElementById("origin").value;
    const destCity = document.getElementById("desired-dest").value;

    if(destCity === null || destCity === ' ') {
        alert("Please enter a valid city");
        return;
    }

    try {
        const weather = await fetchCoordinates(destCity).then(async (coordinates) => {
            return await fetchWeather(coordinates.latitude, coordinates.longitude)
        });
        console.log('Weather:', weather);
    } catch(err) {
        console.error(err);
        console.log("Failed to process city information to retrieve weather");
    }   
}

const fetchCoordinates = async (city) => {
    return await fetch(`http://localhost:8080/geo?city=${city}`)
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
    return await fetch(`http://localhost:8080/weather?lat=${lat}&lon=${lon}`)
    .then((response) => response.json())
    .then((data) => {
        return data;
    })
    .catch((err) => {
        console.error(err);
        console.log(`Unable to retrieve the weather for specified location`);
    })
}

export { getTripDetails }