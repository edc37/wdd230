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
