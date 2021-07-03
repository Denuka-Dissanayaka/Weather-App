const form = document.querySelector('form');
const input = document.querySelector('input');
const nameOfCity = document.querySelector('h5');
const weatherCondition = document.querySelector('#condition');
const temperature = document.querySelector('#temp');
const card = document.querySelector('.card');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cityName = input.value.trim();
    form.reset();
    nameOfCity.textContent = cityName;

    getCity(cityName)
        .then(data => {
            const cityKey = data[0].Key;
            return getWeatherCondition(cityKey);
        })
        .then(data => {
            console.log(data[0])
            const condition = data[0].WeatherText;
            const temp = data[0].Temperature.Metric.Value;
            const iconNum = data[0].WeatherIcon;

            weatherCondition.textContent = condition;
            temperature.textContent = temp;
            icon.setAttribute('src', `./img/icons/${iconNum}.svg`);

            if(data[0].IsDayTime === true) {
                time.setAttribute('src', './img/day.svg')
            } else {
                time.setAttribute('src', './img/night.svg')
            }

            if(card.classList.contains('d-none')) {
                card.classList.remove('d-none');
            }
        })
        .catch(err => console.log(err));

} )