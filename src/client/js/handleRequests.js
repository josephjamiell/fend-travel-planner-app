const getTripDetails = async () => {
    const dest = document.getElementById("desired-dest");
    const date = document.getElementById("desired-date");

    if(dest.length <= 0) {
        alert("Please enter a valid city");
        return;
    }

    if(date === null || date === undefined) {
        alert("Please enter a valid date for your trip");
        return;
    }

    let city = dest.value.split(",")[0].trim();
    let country = dest.value.split(",")[1].trim();
    let tripDate = date.value;

    try {
        const weather = await fetchCoordinates(city, country).then(async (coordinates) => {
            return await fetchWeather(coordinates.lat, coordinates.lng, tripDate)
        })

        const imageData = await fetchImage(city);

        Client.populateTripDetails({city, country}, weather, imageData);
        
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

const fetchWeather = async (lat, lon, tdate) => {
    return await fetch(`http://localhost:8081/weather?lat=${lat}&lon=${lon}&date=2022-05-20`)
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