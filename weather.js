class Weather {
    constructor() {
        this.key = "V6Z2he9kPWcX6zyKtQ0w5WSNUFhYGIIB";
        this.WeatherURI = 'http://dataservice.accuweather.com/currentconditions/v1/';
        this.cityURI = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    }
    async updateCity(city) {
        const cityInfo = await this.getCity(city);
        const weather = await this.getWeather(cityInfo.Key);
        return {cityInfo, weather};
    }

    async getCity(city) {
        const query2 = `?apikey=${this.key}&q=${city}`;
        const response2 = await fetch(this.cityURI + query2);
        const cityData = await response2.json();
        return cityData[0];
    }

    async getWeather(id) {
        const query1 = `${id}?apikey=${this.key}`;
        const response1 = await fetch(this.WeatherURI + query1);
        const weatherData = await response1.json()
        return weatherData[0];
    }
}