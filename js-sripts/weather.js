const key = "V6Z2he9kPWcX6zyKtQ0w5WSNUFhYGIIB";


const getWeather = async (id) => {
    const baseWeather = 'http://dataservice.accuweather.com/currentconditions/v1/'
    const query1 = `${id}?apikey=${key}`;
    const response1 = await fetch(baseWeather + query1);
    const weatherData = await response1.json()
    return weatherData[0];
}


const getCity = async (city) => {
    const baseCity = 'http://dataservice.accuweather.com/locations/v1/cities/search'
    const query2 = `?apikey=${key}&q=${city}`;
    const response2 = await fetch(baseCity + query2);
    const cityData = await response2.json();
    return cityData[0];
}
