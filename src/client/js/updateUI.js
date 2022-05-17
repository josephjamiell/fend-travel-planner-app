const populateDestinations = () => {
    const dests = document.getElementById("desired-dest");
    const response = fetch("http://localhost:8081/destinations")
    .then((response) => response.json())
    .then((data) => {
        const fragment = new DocumentFragment();
        for(let dest of data) {
            const opt = document.createElement("option");
            opt.value = `${dest.city}, ${dest.countryCode}`;
            opt.textContent = `${dest.city}, ${dest.country}`; 
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
    console.log("Starting to populate trips");
    const upcoming = document.querySelector(".upcoming-trips-backboard");
    upcoming.innerHTML = "<h3>My Trips</h3>"
    const response = fetch("http://localhost:8081/trips")
    .then((response) => response.json())
    .then((data) => {
        console.log("Received trips", data);
        const fragment = new DocumentFragment();
        if(data.message === "No trips") {
            let para = document.createElement("p");
            para.innerHTML = "- No saved trips -";
            fragment.appendChild(para);
        } else {
            let tripListTable = document.createElement("table");
            let tableHead = document.createElement("thead");
            let tableHeadingRow = document.createElement("tr")
            let idHeading = document.createElement("th");
            idHeading.textContent = "ID";
            let destinationHeading = document.createElement("th");
            destinationHeading.textContent = "Destination";
            let dateHeading = document.createElement("th");
            dateHeading.textContent = "Departs";
            let flightHeading = document.createElement("th");
            flightHeading.textContent = "Flight #";
            let forecastHeading = document.createElement("th");
            forecastHeading.textContent = "Forecast";
            let statusHeading = document.createElement("th");
            statusHeading.textContent = "Status";
            let actionsHeading = document.createElement("th");
            actionsHeading.textContent = "Trip Actions";
            let tableBody = document.createElement("tbody");
            for(let trip of data) {
                let row = document.createElement("tr");
                let idData = document.createElement("td");
                idData.textContent = trip.id;
                let destinationData = document.createElement("td");
                destinationData.textContent = trip.information.destination;
                let dateData = document.createElement("td");
                dateData.textContent = trip.information.date;
                let flightData = document.createElement("td");
                flightData.textContent = trip.flight;
                let forecastData = document.createElement("td");
                forecastData.textContent = trip.information.temp;
                let statusData = document.createElement("td");

                const currentDate = new Date();
                const tripDate = new Date(trip.information.date);
                if(tripDate < currentDate) {
                    statusData.innerHTML = `<p><span style="background-color:red;" class="status-pill">expired</span><p>`;
                } else if (tripDate == currentDate) {
                    statusData.innerHTML = `<p><span style="background-color:green;" class="status-pill">on time</span><p>`;
                } else if (tripDate > currentDate) {
                    statusData.innerHTML = `<p><span style="background-color:green;" class="status-pill">upcoming</span><p>`;
                } else {
                    statusData.innerHTML = `<p><span style="background-color:orange;" class="status-pill">n/a</span><p>`;
                }

                
                let tripActionsData = document.createElement("td");
                tripActionsData.innerHTML = `<td><a href="#cancel-trip">Cancel</a></td>`;
                row.appendChild(idData);
                row.appendChild(dateData);
                row.appendChild(flightData);
                row.appendChild(destinationData);
                row.appendChild(forecastData);
                row.appendChild(statusData);
                row.appendChild(tripActionsData);
                tableBody.appendChild(row);
            }
            tableHeadingRow.appendChild(idHeading);
            tableHeadingRow.appendChild(dateHeading);
            tableHeadingRow.appendChild(flightHeading);
            tableHeadingRow.appendChild(destinationHeading);
            tableHeadingRow.appendChild(forecastHeading);
            tableHeadingRow.appendChild(statusHeading);
            tableHeadingRow.appendChild(actionsHeading);
            tableHead.appendChild(tableHeadingRow);
            tripListTable.appendChild(tableBody);
            tripListTable.appendChild(tableHead);
            fragment.appendChild(tripListTable);
        }
        upcoming.appendChild(fragment);
        console.log("Finished populating trips");
    })
    .catch((err) => {
        console.error(err);
        console.log("Failed to retrieve upcoming trips");
    })
}

const populateTripDetails = (dest, forecast, imageUrl) => {
    const titleDest = document.getElementById("trip-dest");
    const image = document.getElementById("trip-image");
    const description = document.getElementById("trip-desc");
    const highlow = document.getElementById("trip-highlow");
    titleDest.textContent = `${dest.city.toUpperCase()}, ${dest.country.toUpperCase()}`;
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
        const titleDest = document.getElementById('trip-dest');
        const desc = document.getElementById('trip-desc');
        const temp = document.getElementById('trip-highlow');

        Client.bookCurrentTrip(tripStartDate.value, titleDest.textContent, desc.textContent, temp.textContent);
        section.classList.add("hide");
    })

    const d = new Date();
    
    tripStartDate.min = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
    tripStartDate.max = `${d.getFullYear()}-${((d.getMonth() + 1) + MAX_MONTHS).toString().padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
    //tripEndDate.min = `${d.getFullYear()}-${(d.getMonth() + 1).toString().padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
    //tripEndDate.max = `${d.getFullYear()}-${((d.getMonth() + 1) + MAX_MONTHS).toString().padStart(2, "0")}-${d.getDate().toString().padStart(2, "0")}`;
}

export { populateTripDetails, bookCurrentTrip, populateDestinations, initializeTravelPlanner }