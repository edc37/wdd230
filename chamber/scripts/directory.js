/* JSON */
/* const response = await fetch('json/chamberDirectory.json'); */

/*fetch('https://hp-api.onrender.com/api/characters')
.then(res => {
	return res.json();
})
.then(data => {;
	data.forEach(character => {
		const markup = `<li>${character.name}, ${character.house}, ${character.dateOfBirth}</li>`;
	
		document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
	});
})
.catch(error => console.log(error)); */
const link = 'scripts/json/directory.json';
fetch("scripts/json/directory.json")
.then(res => {
    return res.json();
})
.then(data => {
    data.forEach(business => {
        const markup = `<h3>${business.name}</h3`;
        document.querySelector("#directory").insertAdjacentHTML("beforeend", markup);
    })
})