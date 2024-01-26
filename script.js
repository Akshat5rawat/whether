var inputValues = document.querySelector('#city');
var btn = document.querySelector('#add');
var cityOutput = document.querySelector('#cityoutput');
var descriptionOutput = document.querySelector('#description');
var tempOutput = document.querySelector('#temp');
var windOutput = document.querySelector('#wind');
var apiKey = "309faf5b7084ff7d1a634229f12516fe";

function conversion(val) {
    return (val - 273).toFixed(3);
}

btn.addEventListener('click', function () {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValues.value + '&appid=' + apiKey)
        .then(res => res.json())
        .then(data => {
            var nameVal = data['name'];
            var weatherDescription = data['weather'][0]['description'];
            var temperature = data['main']['temp'];
            var windSpeed = data['wind']['speed'];

            cityOutput.innerHTML = `Weather of <span>${nameVal}</span>`;
            tempOutput.innerHTML = `Temperature: <span>${conversion(temperature)} C</span>`;
            descriptionOutput.innerHTML = `Sky condition: <span>${weatherDescription}</span>`;
            windOutput.innerHTML = `Wind speed: <span>${windSpeed} km/h</span>`;
        })
        .catch(err => alert('You entered the wrong city name'));
});
