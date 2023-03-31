const key = "28668df08bb504525fea307a64624112"

function dataInput() {

    const city = document.querySelector(".search").value

    searchCity(city)
}

async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    dataScreen(data)
}


function dataScreen(data) {

    document.querySelector(".name-city").innerHTML = `Tempo em ${data.name}`
    document.querySelector(".humidity").innerHTML = `Umidade:  ${data.main.humidity}%`
    document.querySelector(".weather").innerHTML = `${data.weather[0].description}`
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp)+"°C"

}