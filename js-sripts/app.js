const input = document.querySelector('form'); 
const card = document.querySelector('.card');
const info = document.querySelector('.details');
const timeImage = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
const forecast = new Weather();


const updateUI = (data) => {
    const { cityInfo, weather } = data;
   
    info.innerHTML = `
      <h5 class="my-3">${cityInfo.EnglishName}</h5>
      <div class="my-3">${weather.WeatherText}</div>
      <div class="display-4 my-4">
      <div class="line">
      <span>${weather.Temperature.Imperial.Value}</span>
      <span>&deg;F</span>
      </div>
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
      </div>
    `;
  
    let iconSrc = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);
    
    let imgSrc = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    timeImage.setAttribute('src', imgSrc);
  
    if(card.classList.contains('d-none')){
      card.classList.remove('d-none');
    }
  };


input.addEventListener('submit', (e) => {
    e.preventDefault();
    const city = input.city.value.trim();
    input.reset();
    forecast.updateCity(city)
      .then(data => updateUI(data))
      .catch(err => console.log(err));
      
      localStorage.setItem('city', city);
})

if(localStorage.getItem('city')) {
  forecast.updateCity(localStorage.getItem('city'))
  .then(data => updateUI(data))
  .catch(err => console.log(err))
}