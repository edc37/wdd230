/* Display date */
let dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
let monthNames= [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
let d = new Date();
let dayName = dayNames[d.getDay()];
let monthName = monthNames[d.getMonth()];
let year = d.getFullYear();
let fullDate = (`${dayName}, ${d.getDate()} ${monthName} ${year}`)
document.querySelector("#today").innerHTML = fullDate;

/* last modified */
let mod = document.lastModified;
document.querySelector("#date-modified").innerHTML = mod;

/*hamburger */
function toggleMenu () {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn");
x.onclick = toggleMenu;

/* banner 
let dayNum = new Date().getDay();
if (dayNum == 1 || dayNum == 2) {
    alert("🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m." );
}*/

/* WINDCHILL 

function doInputOutput() {
    let tempF = parseFloat(document.getElementById("temp").value);
    let speed = parseFloat(document.getElementById("wind_speed").value);
    let display = windChill(tempF, speed);
    document.getElementById("chillOutput").innerHTML = display;
}
function windChill(tempF, speed) {
    let chill = 35.74 + .6215 * tempF - (35.75 * speed ** .16) + (.4275 * tempF * (speed ** .16));
    return chill.toFixed(2);
}*/

/* Submit Timestamp */
function timestamp() {
    let submission = document.lastModified;
    document.querySelector(".submitBtn").innerHTML = submission;
}

/* Weather */
const currentTemp = document.querySelector("#currentTemp");
const weatherIcon = document.querySelector("#weatherIcon");
const captionDesc = document.querySelector("figcaption");
const windSpeed = document.querySelector("#windSpeed");
const windChill = document.querySelector("#windChill");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=39.1653&lon=-86.5264&units=imperial&appid=c51d7a703983b1efa09d6ceb78c5ce37";

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    windSpeed.innerHTML = `<strong>${weatherData.wind.speed} mph</strong`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    const arr = desc.split("");
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const desc2 = arr.join("");

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc2);
    captionDesc.textContent = desc2;

    const chill = 35.74 + .6215 * weatherData.main.temp - (35.75 * weatherData.wind.speed ** .16) + (.4275 * weatherData.main.temp * (weatherData.wind.speed ** .16));

    windChill.innerHTML = `<strong>${chill.toFixed(2)}</strong>`;
}
apiFetch();

/* JSON */
/* const response = await fetch('json/chamberDirectory.json'); */