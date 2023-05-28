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

/* banner */
let dayNum = new Date().getDay();
if (dayNum == 1 || dayNum == 2) {
    alert("🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m." );
}

/* WINDCHILL */

function doInputOutput() {
    let tempF = parseFloat(document.getElementById("temp").value);
    let speed = parseFloat(document.getElementById("wind_speed").value);
    let display = windChill(tempF, speed);
    document.getElementById("chillOutput").innerHTML = display;
}
function windChill(tempF, speed) {
    let chill = 35.74 + .6215 * tempF - (35.75 * speed ** .16) + (.4275 * tempF * (speed ** .16));
    return chill.toFixed(2);
}
