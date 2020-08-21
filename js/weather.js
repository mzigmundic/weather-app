// Weather Class
class Weather {
    constructor(city) {
        this.apiKey = '79708db3491f4c76a81132147202106';
        this.city = city;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${this.apiKey}&q=${this.city}&lang=sr`);

        const responseData = await response.json();

        return responseData;
    }

    // Change weater location
    changeLocation(city) {
        this.city = city;
    }
}