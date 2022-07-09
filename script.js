const getWeatherData = (city) => {
  const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ada4b97147mshe90a730a99ec4a0p170452jsn7cb3a393a3f3',
		'X-RapidAPI-Host': 'community-open-weather-map.p.rapidapi.com'
	}
}

  return fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}&units=imperial`, options)
	.then(response => response.json())
	.then(response => response)
	.catch(err => console.error(err));
};

const searchCity=async ()=>{
  const city=document.getElementById('city-input').value;
  const data=await getWeatherData(city);
  showWeatherData(data);
}

const showWeatherData=(weatherData)=>{
  document.getElementById('temp').innerText=weatherData.main.temp;
  document.getElementById('city-name').innerText=weatherData.name;
  document.getElementById('weather-type').innerText=weatherData.weather[0].main;
  document.getElementById('min-temp').innerText=weatherData.main.temp_min;
  document.getElementById('max-temp').innerText=weatherData.main.temp_max;
}
