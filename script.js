const urlBase= `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = "d44170394491db78499869cf08a654ca"
const diffKelvin = 273.15

document.getElementById('searchButton').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value;
    if(city){
        //Llamar a la API
        fetchWeather(city)
    } else {
        alert('Please insert a city')
    }
})

function fetchWeather(city) {
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
}