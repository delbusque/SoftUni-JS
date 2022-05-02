function loadRepos() {
    let url = `https://swapi.dev/api`;

    let divDocument = document.getElementById('res');

    fetch(`${url}/people/1`).then(res => res.json()).then(data => {
        let lukeData = Object.create(data);
        fetch(`${lukeData.homeworld}`).then(res => res.json()).then(data => {
            let lukePlanet = Object.create(data);
            divDocument.textContent = `This is the greatest jedy ${lukeData.name} and his homeworld is ${lukePlanet.name} ...`;
        })
    });
}