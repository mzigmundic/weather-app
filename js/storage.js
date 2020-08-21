// Storage Class
class Storage {
    constructor() {
        this.city;
        this.defaultCity = 'Zagreb';
    }

    // Get location from local storage if there is one otherwise set it to default
    getLocationData() {
        if (localStorage.getItem('city') === null) {
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        return { city: this.city }
    }

    // Set location to local storage
    setLocationData(city) {
        localStorage.setItem('city', city);
    }
}