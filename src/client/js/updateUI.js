const populateTripDetails = (forecast, imageUrl) => {
    const title = document.getElementById("current-trip-title");
    const image = document.getElementById("current-forecast-img");
    const description = document.getElementById("current-forecast-desc");
    title.textContent = `${forecast.city_name}, ${forecast.country_code}`;
    image.src = imageUrl;
    description.textContent = forecast.weather.description;
    
    
    console.log(forecast);
}

export { populateTripDetails }