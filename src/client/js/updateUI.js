const populateDestinations = () => {
    const dests = document.getElementById("destinations");
    const response = fetch("http://localhost:8081/destinations")
    .then((response) => response.json())
    .then((data) => {
        const fragment = new DocumentFragment();
        for(let dest of data) {
            const opt = document.createElement("option");
            opt.value = `${dest.city}, ${dest.country}`;
            fragment.appendChild(opt);
        }
        dests.appendChild(fragment);
    })
    .catch((err) => {
        console.error(err);
        console.log("Failed to fetch serviced destinations");
    })

    populateUpcomingTrips();
}

const populateUpcomingTrips = () => {
    const upcoming = document.querySelector(".upcoming-trips-backboard");
    upcoming.innerHTML = "<h3>Upcoming Trips</h3>"
    const response = fetch("http://localhost:8081/trips")
    .then((response) => response.json())
    .then((data) => {
        const fragment = new DocumentFragment();
        if(data.message === "No trips") {
            let para = document.createElement("p");
            para.innerHTML = "- No upcoming trips -";
            fragment.appendChild(para);
        } else {
            let triplist = document.createElement("ul");
            for(let trip of data) {
                let item = document.createElement("li");
                let div = document.createElement("div");
                div.innerHTML = 
                `<h4>✈️ ${trip.information.destination} ✈️</h4>
                 <h5>Departs on ${trip.information.date}</h5>`;
                item.appendChild(div);
                triplist.appendChild(item);
            }
            fragment.appendChild(triplist);
        }
        upcoming.appendChild(fragment);
    })
    .catch((err) => {
        console.error(err);
        console.log("Failed to retrieve upcoming trips");
    })
}

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
}

const bookCurrentTrip = (date, dest, weather, temp) => {
    const response = fetch("http://localhost:8081/trips", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({"date": date, "destination": dest, "weather": weather, "temp": temp})
    })
    .catch((err) => {
        console.error(err);
        console.log("Failed to save trip data");
    })

    populateUpcomingTrips();
}

const initializeTravelPlanner = () => {
    const MAX_MONTHS = 6;
    const tripStartDate = document.getElementById("desired-startdate");
    const tripEndDate = document.getElementById("desired-enddate");
    const booker = document.getElementById("trip-book");
    booker.addEventListener("click", () => {
        const section = document.getElementById("current-trips-section");
        const title = document.getElementById('trip-header');
        const desc = document.getElementById('trip-desc');
        const temp = document.getElementById('trip-highlow');

        Client.bookCurrentTrip(tripStartDate.value, title.textContent, desc.textContent, temp.textContent);
        section.classList.add("hide");
    })

    const d = new Date();
    
    tripStartDate.min = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
    tripStartDate.max = `${d.getFullYear()}-${((d.getMonth() + 1) + MAX_MONTHS).toString().padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
    tripEndDate.min = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
    tripEndDate.max = `${d.getFullYear()}-${((d.getMonth() + 1) + MAX_MONTHS).toString().padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
}

export { populateTripDetails, bookCurrentTrip, populateDestinations, initializeTravelPlanner }