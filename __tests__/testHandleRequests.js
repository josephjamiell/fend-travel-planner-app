import {
    getTripDetails,
    checkServerOnline,
    fetchCoordinates,
    fetchWeather, 
    fetchImage
} from "../src/client/js/handleRequests.js";

describe("Testing Requests Handling", () => {
    ("Checking core functionality. They should all be defined", () => {
        expect(getTripDetails).toBeDefined();
        expect(checkServerOnline).toBeDefined();
        expect(fetchCoordinates).toBeDefined();
        expect(fetchWeather).toBeDefined();
        expect(fetchImage).toBeDefined();
    })
});