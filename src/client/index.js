import { getTripDetails } from './js/handleRequests.js';
import { populateTripDetails, bookCurrentTrip, populateDestinations } from './js/updateUI.js';
import './styles/base.scss';
import './styles/header.scss';
import './styles/footer.scss';

export { getTripDetails, populateTripDetails, bookCurrentTrip, populateDestinations}

//initialize events

const booker = document.getElementById("trip-book");
const tripDate = document.getElementById("desired-date");
booker.addEventListener("click", () => {
    const section = document.getElementById("current-trips-section");
    const title = document.getElementById('trip-header');
    const desc = document.getElementById('trip-desc');
    const temp = document.getElementById('trip-highlow');

    Client.bookCurrentTrip(tripDate.value, title.textContent, desc.textContent, temp.textContent);
    section.classList.add("hide");
})