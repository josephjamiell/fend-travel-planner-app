const populateTripDetails = (dest, forecast, imageUrl) => {
    const title = document.getElementById("trip-header");
    const image = document.getElementById("trip-image");
    const description = document.getElementById("trip-desc");
    const highlow = document.getElementById("trip-highlow");
    title.textContent = `${dest.city.toUpperCase()}, ${dest.country.toUpperCase()}`;
    image.src = imageUrl;
    description.textContent = forecast.weather.description;
    highlow.textContent = `${forecast.high_temp}°C / ${forecast.low_temp}°C`;
    
    const cts = document.getElementById("current-trips-section");
    cts.classList.remove("hide");
    console.log(forecast);
}

export { populateTripDetails }