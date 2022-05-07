import { getTripDetails } from './js/handleRequests.js';
import { populateTripDetails } from './js/updateUI.js';

import './styles/base.scss';
import './styles/header.scss';
import './styles/footer.scss';

const destination = document.getElementById("desired-dest");
destination.addEventListener("change", (event) => {
    console.log(`Changed: ${event}`);
})


export { getTripDetails, populateTripDetails }

