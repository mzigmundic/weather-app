// Initialize storage object & get location
const storage = new Storage();
const weatherLocation = storage.getLocationData();

// Initialize weather object
const weather = new Weather(weatherLocation.city);

// Initialize UI object
const ui = new UI();

// Get weather when DOM loads
document.addEventListener('DOMContentLoaded', getWeather);

// Change location event
document.getElementById('change-location-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    // Change location
    weather.changeLocation(city);

    // Set location in local storage
    storage.setLocationData(city);

    // Get and display weather
    getWeather();

    // Close modal
    $('#locationModal').modal('hide');
});

// Get weather
function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.display(results);
        })
        .catch(err => console.log(err));
}


