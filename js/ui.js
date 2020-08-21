// User Interface Class
class UI {
    constructor() {
        this.location = document.getElementById('location');
        this.description = document.getElementById('description');
        this.temperature = document.getElementById('temperature');
        this.details = document.getElementById('details');
        this.icon = document.getElementById('icon');
        this.pressure = document.getElementById('pressure');
        this.humidity = document.getElementById('humidity');
        this.feelsLike = document.getElementById('feels-like');
        this.wind = document.getElementById('wind');
        this.uv = document.getElementById('uv');
        this.visibility = document.getElementById('visibility');
    }

    // Display content
    display(weather) {
        this.location.textContent = weather.location.name;
        this.description.textContent = weather.current.condition.text;
        this.temperature.textContent = `${weather.current.temp_c} °C`;
        this.icon.setAttribute('src', weather.current.condition.icon);
        this.pressure.textContent = `Tlak: ${weather.current.pressure_mb} mBar`;
        this.humidity.textContent = `Vlažnost: ${weather.current.humidity} %`;
        this.feelsLike.textContent = `Osjet: ${weather.current.feelslike_c} °C`;
        this.wind.textContent = `Vjetar: ${weather.current.wind_kph} km/s ${weather.current.wind_dir}`;
        this.uv.textContent = `UV indeks: ${weather.current.uv}`;
        this.visibility.textContent = `Vidljivost: ${weather.current.vis_km} km`;
    }
}