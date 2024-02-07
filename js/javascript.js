const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');

search.addEventListener('click', ()=>{

    const APIKey = '323cad199683c5e92ed6509dcfc5069e';
    const city = document.querySelector('.search-box input').value;

    if (city == '') 
        return;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(response => response.json()).then(json =>{
    
        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'style/pictures/sun.png';  
                break;

            case 'Rain':
                image.src = 'style/pictures/rain.png';  
                break;
            
            case 'Snow':
                image.src = 'style/pictures/snow.png';  
                break;

            case 'Clouds':
                image.src = 'style/pictures/cloud.png';  
                break;

            case 'Mist':
                image.src = 'style/pictures/air.png';  
                break;


            case 'Haze':
                image.src = 'style/pictures/haze.png';  
                break;

            default:
                image.src = 'style/pictures/cloud.png';
        }

        temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

    });

})